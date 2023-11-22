# Vocabulary Creation Guide

Thing Description Forms can be extended with annotations that further describe how to access affordances.
These annotations are typically reused from existing protocol vocabularies that need to exist separately from the binding template document.
This document gives guidance how such vocabularies can be created and how they should be used together with the templates and tools provided.

## Components of a Binding Template

Besides the actual binding template document that is to be used by implementors
(the `index.html` file), there are several additional companion documents which
enable the binding to be used in practice.
To enable TD consumers to understand the reused vocabularies, the definition of a
JSON-LD context file (`context.jsonld`) is necessary.
This file maps the TD-specific vocabulary defined in the binding template to an
OWL ontology (`ontology.ttl`), enabling the use of Semantic Web technologies.
Finally, a JSON schema file (`example-protocol.schema.json`) should be provided
to enable automatic validation of forms using the binding template.

Building upon this set of documents, an automated rendering process of the
binding template document from the ontology can be established.
To do so, a `template.sparql` file needs to be created which can insert rendered
tables into placeholders (`%s`) within an `index.template.index` file.
To be able to create these tables, the ontology vocabulary needs to be brought
into the right form using a mapping (in `mapping.ttl`) based on SHACL
(Shapes Constraint Language).

Once the files are in place, they need to be inserted into the top-level
`render.js` file, which can not only create a rendered binding template
(`index.html`) file but also a human-readble ontology file (`ontology.html`)
which can be used as a alternative representation based on content negotiation.

Examples of existing binding template files can be found in the `bindings`
directory.
<!-- TODO: Expand template for binding templates -->
