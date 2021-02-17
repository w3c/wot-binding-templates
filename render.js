let fs = require('fs');
let sttl = require('sttl');
let urdf = require('urdf');

const tpl = fs.readFileSync('ontology/templates.rq', 'utf-8');
const modbusTpl = fs.readFileSync('ontology/modbus.template.rq', 'utf-8');
const main = 'http://w3c.github.io/wot-binding-templates/ontology#main';

sttl.register(tpl);
sttl.register(modbusTpl);
sttl.connect(q => {
    return urdf.query(q)
    .then(b => ({
        results: {
            bindings: b
        }
    }));
});

const src = [
    ['ontology/coap.ttl',main],
    ['ontology/mqtt.ttl',main],
    ['ontology/modbus.ttl',"http://w3c.github.io/wot-binding-templates/ontology#modbus"]
];

src.reduce((p, src) => {
    const f = src[0]
    const template = src[1]
    let ttl = fs.readFileSync(f, 'UTF-8');
    return p.then(() => urdf.clear())

    .then(() => urdf.load(ttl, { format: 'text/turtle' }))

    .then(() => sttl.callTemplate(template, ttl))

    .then(html => fs.writeFileSync(f.replace('.ttl', '.html'), html))

    .catch((e) => {
        console.error('Error while rendering ' + f + ': ' + e);
    });
}, Promise.resolve());
