const fs = require('fs');
const sttl = require('sttl');
const urdf = require('urdf');
const toRDf = require('./toRdf.js').context;

const tpl = fs.readFileSync('ontology/templates.rq', 'utf-8');

sttl.register(tpl);
sttl.connect(async (query) => {
    const graph = await urdf.query(query);
    const bindings = graph.reduce((accumulator, value) => {
        // Flat bindings that have list variables
        // Note: this method only works for one list variable per binding
        const found = Object.keys(value).find((k) => value[k].type === 'list');
        if (found) {
            value[found].value.forEach((listElement) => {
                const newBinding = Object.assign({}, value);
                newBinding[found] = listElement;
                accumulator.push(newBinding);
            });
        } else {
            accumulator.push(value);
        }
        return accumulator;
    }, []);
    return { results: { bindings } };
});

const ontologies = [
    'bindings/protocols/coap/ontology.ttl',
    'ontology/mqtt.ttl',
    'ontology/modbus.ttl',
];

console.log("Rendering ontology documentation...");
const promiseChain = ontologies.reduce(async (previousPromise, ontologyFile) => {
    const templateURI =
        'http://w3c.github.io/wot-binding-templates/ontology#main';
    await previousPromise;
    await render(
        ontologyFile,
        templateURI,
        ontologyFile.replace('.ttl', '.html')
    );
    await urdf.clear();
}, Promise.resolve());


console.log("Rendering WoT binding documentation...");

const mappings = [
    {
        ontologyFile: 'bindings/protocols/modbus/mapping.ttl',
        baseOntologyFile: 'ontology/modbus.ttl',
        templateURI:
            'http://w3c.github.io/wot-binding-templates/mappings#modbus',
        contextFile: 'bindings/protocols/modbus/context.jsonld',
    },
    {
        ontologyFile: 'bindings/protocols/mqtt/mapping.ttl',
        baseOntologyFile: 'ontology/mqtt.ttl',
        templateURI: 'http://w3c.github.io/wot-binding-templates/mappings#mqtt',
        contextFile: 'bindings/protocols/mqtt/context.jsonld',
    },
    {
        ontologyFile: 'bindings/protocols/coap/mapping.ttl',
        baseOntologyFile: 'bindings/protocols/coap/ontology.ttl',
        templateURI: 'http://w3c.github.io/wot-binding-templates/mappings#coap',
        contextFile: 'bindings/protocols/coap/context.jsonld',
    },
];

const modbusTemplate = fs.readFileSync(
    'bindings/protocols/modbus/template.sparql',
    'utf-8'
);
const mqttTemplate = fs.readFileSync(
    'bindings/protocols/mqtt/template.sparql',
    'utf-8'
);
const coapTemplate = fs.readFileSync(
    'bindings/protocols/coap/template.sparql',
    'utf-8'
);
sttl.register(modbusTemplate);
sttl.register(mqttTemplate);
sttl.register(coapTemplate);

mappings.reduce(async (previousPromise, mapping) => {
    const { ontologyFile, baseOntologyFile, templateURI, contextFile } = mapping;
    const base = fs.readFileSync(baseOntologyFile, 'UTF-8');
    await previousPromise;
    await urdf.load(base, { format: 'text/turtle' });
    const jsonld = fs.readFileSync(contextFile, 'utf8');
    const result = toRDf(JSON.parse(jsonld));
    await urdf.load(result);
    await render(
        ontologyFile,
        templateURI,
        ontologyFile.replace('mapping.ttl', 'index.html')
    );
    await urdf.clear();
}, promiseChain);

async function render(ontologyFile, templateURI, output) {
    const ttl = fs.readFileSync(ontologyFile, 'UTF-8');
    try {
        await urdf.load(ttl, { format: 'text/turtle' });
        const html = await sttl.callTemplate(templateURI, ttl);
        fs.writeFileSync(output, html);
        console.log('File ', output, 'generated');
    } catch (e) {
        console.error('Error while rendering ' + ontologyFile + ': ' + e);
    }
}
