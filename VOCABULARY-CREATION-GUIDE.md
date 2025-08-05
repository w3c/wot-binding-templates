# Vocabulary Creation Guide

Thing Description Forms can be extended with annotations that further describe how to activate affordances.
These annotations are typically reused from existing protocol vocabularies that need to exist separately from the binding document.
This document gives guidance on how such vocabularies can be created and how they should be used together with the templates and tools provided.

## Components of a Binding

Besides the actual binding document that is to be used by implementors
(the `index.html` file), there are several additional companion documents which
enable the binding to be used in practice.
To enable TD consumers to understand the reused vocabularies, the definition of a
JSON-LD context file (`context.jsonld`) is necessary.
This file maps the TD-specific vocabulary defined in the binding to an
OWL ontology (`ontology.ttl`), enabling the use of Semantic Web technologies.
Finally, a JSON schema file (`example-protocol.schema.json`) should be provided
to enable automatic syntactic validation of forms using the binding.

## Creating a New Vocabulary

In order to create a new Binding, you need to first conceptualize
how the different parameters that can be set for a protocol interaction can
be mapped to the different types of Interaction Affordances (Properties,
Actions, and Events).
For instance, an HTTP vocabulary for the Web of Things can define vocabulary
terms for the different kinds of methods (e.g., GET, POST, or PUT) that are
usable in requests.
Vocabulary terms can also be more specific to a certain type of Interaction
Affordance or operation type, e.g., Event Affordances or observable Properties.

The mapping then needs to be described as vocabulary terms based on the Web
Ontology Language (OWL) and – more generally – the Resource Description
Framework (RDF).
This mapping can reuse existing, more general vocabularies and integrate them
into the Web of Things.
However, in cases where there is no pre-existing vocabulary for a protocol,
creating one that is only WoT-specific is also a valid option.

<!-- TODO: Add examples -->

## Document Rendering Workflow

Building upon the set of documents mentioned above, an automated rendering
process of the binding document from the ontology can be established.
To do so, a `template.sparql` file needs to be created based on
[STTL](https://ns.inria.fr/sparql-template/), which defines rules for
transforming a source RDF graph into a result text.
The rules are applied to an `index.template.html` file which contains
placeholders (`%s`) where a formatted version of the vocabulary terms
(e.g., a table) can be inserted.
To be able to create a formatted version, the ontology vocabulary needs to be brought
into the right form using a mapping (in `mapping.ttl`) based on SHACL
(Shapes Constraint Language).

Once the files are in place, they need to be inserted into the top-level
`render.js` file, which can not only create a rendered binding (`index.html`) file but also a human-readable ontology file (`ontology.html`)
which can be used as an alternative representation based on content negotiation.

Examples of existing binding documents can be found in the `bindings`
directory.
<!-- TODO: Expand template for bindings -->
