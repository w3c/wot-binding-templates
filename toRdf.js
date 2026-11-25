// original file https://raw.githubusercontent.com/w3c/wot-thing-description/main/context/toRDF.js
const fs = require("fs");

const ld = "http://www.w3.org/ns/json-ld#";
const a = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";

function fullIRI(curie, ctx) {
  let capture = /^(\w+):(\w+)$/.exec(curie);

  if (capture) {
    let [str, ns, name] = capture;
    if (ctx[ns]) return ctx[ns] + name;
    else console.warn("No mapping found for prefix " + ns);
  }

  return curie;
}

function scopeName(id) {
  return id ? id.substring(id.indexOf("#") + 1) + "-" : ""; // TODO hash
}

function context(obj, id) {
  let ctx = obj["@context"];
  let scope = scopeName(id);

  if (!ctx) {
    return "";
  }

  let txt = `_:${scope}context <${a}> <${ld}Context> .\r\n`;

  if (ctx["@vocab"]) {
    let vocab = fullIRI(ctx["@vocab"], ctx);
    txt += `_:${scope}context <${ld}vocab> <${vocab}> .\r\n`;
  }

  Object.entries(ctx)
    .filter(([k, v]) => !k.startsWith("@"))
    .map(([k, v]) => {
      // terms may be compact IRIs (e.g. "modv:entity"), which are not valid blank node labels
      const node = `_:${scope}${k.replace(/\W/g, "_")}`;
      txt += `_:${scope}context <${ld}definition> ${node} .\r\n`;

      txt += `${node} <${a}> <${ld}Mapping> .\r\n`;
      txt += `${node} <${ld}term> "${k}" .\r\n`;

      let iri = fullIRI(v instanceof Object ? v["@id"] : v, ctx);
      if (!iri.startsWith("@")) {
        txt += `${node} <${ld}iri> <${iri}> .\r\n`;
      }

      if (v instanceof Object) {
        if (v["@container"]) {
          let container = v["@container"].replace("@", "");
          txt += `${node} <${ld}container> <${ld + container}> .\r\n`;
        }

        if (v["@type"]) {
          let type = v["@type"];
          if (type != "@id" && type != "@vocab") {
            txt += `${node} <${ld}type> <${type}> .\r\n`;
          }
        }

        if (v["@context"]) {
          txt += `${node} <${ld}context> _:${scopeName(iri)}context .\r\n`;
          txt += context(v, iri);
        }
      }
    });

  return txt;
}

module.exports = {
  context
};
