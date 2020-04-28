let fs = require('fs');
let sttl = require('sttl');
let urdf = require('urdf');

const tpl = fs.readFileSync('ontology/templates.rq', 'utf-8');
const main = 'http://w3c.github.io/wot-binding-templates/ontology#main';

sttl.register(tpl);
sttl.connect(q => {
    return urdf.query(q)
    .then(b => ({
        results: {
            bindings: b
        }
    }));
});

const src = [
    'ontology/coap.ttl',
    'ontology/mqtt.ttl'
];

src.reduce((p, f) => {
    let ttl = fs.readFileSync(f, 'UTF-8');
    
    return p.then(() => urdf.clear())

    .then(() => urdf.load(ttl, { format: 'text/turtle' }))

    .then(() => sttl.callTemplate(main, ttl))

    .then(html => fs.writeFileSync(f.replace('.ttl', '.html'), html))

    .catch((e) => {
        console.error('Error while rendering ' + f + ': ' + e);
    });
}, Promise.resolve());
