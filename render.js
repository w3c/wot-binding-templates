let fs = require('fs');
let sttl = require('sttl');
let urdf = require('urdf');
const toRDf = require('./toRdf.js').context

const tpl = fs.readFileSync('ontology/templates.rq', 'utf-8');

sttl.register(tpl);
sttl.connect(q => {
    return urdf.query(q)
        .then(b => {
            const bindings = b.reduce((accumulator, value) => {
                // Flat bindings that have list variables
                // Note: this method only works for one list variable per binding
                const found = Object.keys(value).find(k => value[k].type === "list")
                if (found) {
                    value[found].value.forEach(listElement => {
                        const newBinding = Object.assign({}, value)
                        newBinding[found] = listElement
                        accumulator.push(newBinding);
                    });
                } else {
                    accumulator.push(value)
                }
                return accumulator
            }, []);

            return { results: { bindings } }
        });
});

const ontologies = [
    'ontology/coap.ttl',
    'ontology/mqtt.ttl',
    'ontology/modbus.ttl'
];


console.log("Rendering ontology documentation...");
const promiseChain = ontologies.reduce((p, src) => {
    const ontologyFile = src
    const templateURI = 'http://w3c.github.io/wot-binding-templates/ontology#main'
    return p.then( _ => render(ontologyFile,templateURI,ontologyFile.replace('.ttl', '.html'))).then(() => urdf.clear())
}, Promise.resolve());


console.log("Rendering WoT binding documentation...");

const mappings = [
    ['bindings/modbus/mapping.ttl', 'ontology/modbus.ttl', 'http://w3c.github.io/wot-binding-templates/mappings#modbus','bindings/modbus/context.jsonld'],
];


const modbusTemplate = fs.readFileSync('bindings/modbus/template.sparql', 'utf-8');
sttl.register(modbusTemplate);

mappings.reduce((p, src) => {
    const ontologyFile = src[0]
    const baseOntologyFile = src[1]
    const templateURI = src[2]
    const contextFile = src[3]
    let base = fs.readFileSync( baseOntologyFile, 'UTF-8');
    return p.then( _ => urdf.load(base,{ format: 'text/turtle' }))
        .then(() => {
            const jsonld = fs.readFileSync(contextFile,'utf8');
            const result = toRDf(JSON.parse(jsonld));
            return urdf.load(result)
        })
        .then( _ => render(ontologyFile,templateURI,ontologyFile.replace('mapping.ttl', 'index.html')))
        .then(() => urdf.clear());
},promiseChain);

function render(ontologyFile,templateURI,output) {
    let ttl = fs.readFileSync(ontologyFile, 'UTF-8');
    return Promise.resolve()
    .then(() => urdf.load(ttl, { format: 'text/turtle' }))
    .then(() => sttl.callTemplate(templateURI, ttl))
    .then(html => fs.writeFileSync(output, html))
    .then(_ => console.log("File ",output,"generated"))
    .catch((e) => {
        console.error('Error while rendering ' + ontologyFile + ': ' + e);
    });
}