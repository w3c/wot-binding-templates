# Binding Registry Requirements

Until the editor's draft and the requirements here are ready, this document will contain the requirements for the binding registry.

## WoT Requirements and Expectations for a Potential Binding Registry

### Expectation and Use Case

From the charter:

> Support WoT Interoperability: The WG will improve out-of-the-box interoperability and enable the integration of WoT into other ecosystems and communities. Thus, the WG will define core binding and profiling mechanisms, and define additional profiles and bindings, as appropriate.

Our Story and Use Case:

The goal of the W3C Web of Things is to support multiple protocols via the bindings mechanism.
There are domains like smart cities, and infrastructure where multiple stakeholders bring different devices and systems with different protocols.
This means existing systems should be made interoperable with a descriptive approach via Thing Descriptions.

It is unrealistic to incorporate a complete list of bindings into a REC document before its publication, thus we need a more flexible mechanism.

### Expectations

To choose a mechanism and the rules, we document our expectations below:

- A binding SHOULD be written by people with a good understanding of the protocol, media type (or similar), and not necessarily the TD Editors. This includes people and organizations inside and outside of the WoT WG.
  - TODO: Ask existing registry "managers" about their opinion on this proposal. This will be discussed in the breakout on March 12.
  - Reasons Behind the Requirement:
    - Instead of WG learning each new protocol and media type, it is more efficient for people with a good understanding of the protocol or media type to write a binding.
    - Engaging other communities.
- A binding SHOULD correspond to specific TD specification version(s).
  - Reason Behind the Requirement: A binding may not fit newer or older versions of a TD specification (e.g., `readproperty` can become `readprop`, or a new operation can arrive). Thus, at the time of writing a binding, it needs to be associated with one or more known TD specification versions.
- The binding registry MUST be a separate document but associated with a TD version.
  - Reasons Behind the Requirement: It is easier to update in the long term.
- Association of a binding with the TD specification (registry entry) SHOULD be confirmed by the WoT Working Group. In other words, a person needs some permission and/or confirmation to authoritatively say that a given binding can be used with TD version X. The custodian of this registry is the WoT WG.
  - Reasons Behind the Requirement: WoT WG is the manager of the registry.
- If the WoT WG no longer exists, the W3C Team or their delegated entity becomes the custodian.
  - Reasons Behind the Requirement: It should be possible to maintain the registry without the WoT WG.
- It SHOULD be possible to register, update, or remove a registry entry for associating a binding to a specific TD specification outside of the REC lifecycle of the given TD specification.
  - Reasons Behind the Requirement:
    - Allowing new protocols to be bound to any TD version. 
    - The process should outlive the WG if the WG ever comes to stop functioning or if the WG decides to not work on a TD specification version anymore.
- There SHOULD NOT be two bindings for the same protocol, media type etc.
  - Reasons Behind the Requirement:
    - It breaks interoperability otherwise
    - We should avoid confusing users, i.e. which binding should I use?
    - It would complicate implementations
  - TODO: Clarify what happens when two ecosystems like OCF and LwM2M both use CoAP binding. The initial thinking is to register them as separate entries but clarify what they use from CoAP binding. A layered registry can be thought of as similar to language tags with `en` extending to `en-us` and `en-uk`, where the tags and entries are different but the association with `en` is expressed in the id. In our case, this would be `coap-ocf` and `coap-lwm2m`. A higher-level binding SHOULD NOT override or conflict with a lower-level binding, and this should be verified by the custodian, e.g., `cov:method` in CoAP binding should not be turned into `cov:operation` in the higher-level binding. The namespace (prefix and its values) defined in a binding CANNOT be redefined in any other binding.
- In a TD, a binding SHOULD be identifiable by the elements in a form such as `href`, `contentType`, `subprotocol`, or other terms. Alternative: In a TD, a binding SHOULD be identifiable by the elements in a form or connection information (base etc.) (This alternative seems to have more consensus).
  - Reasons Behind the Requirement:
    - This avoids conflicts that are mentioned in the previous requirement
  - TODO: These terms should be refined based on the additions/changes to the TD 2.0 mechanism. E.g. introducing a `protocol` term, or restrictions on URI scheme and `subprotocol` combination, data mapping etc.
  - TODO: We need to clarify whether the URI scheme and the media type MUST be registered in IANA first.
    - Provisional registration could reduce the overhead. Any new conflicting ones would bring up a discussion but it can still result in "our" provisional getting demoted.
    - Pros: more stable. Cons: More overhead and work
  - TODO: How to identify a higher-level binding in the form
- A binding that uses a protocol MUST map at least one WoT operation (`op` keyword values such as `readproperty`) to a protocol message and vice versa
  - Reasons Behind the Requirement:
    - Otherwise, it is not binding the protocol to WoT and cannot be useful.
- A binding that uses a serialization format via the `contentType` keyword, MUST mention how the Data Schema terms should be used to describe the messages.
  - Reasons Behind the Requirement:
    - Avoid submission of a binding like "XML Binding" that only says "Use `contentType:application/xml` and nothing more. That alone would not be enough to serialize correct messages based on the data schema.
  - TODO: We will need additional mechanisms (including vocabulary terms) to ensure that it is possible to use other media types.
- TODO: Explain that there are no categories
- TODO: Analyze <https://github.com/w3c/ttwg/tree/main/boilerplate/registry>

### Content of Registry Definition

A preliminary list of rules that is extending https://www.w3.org/2023/Process-20230612/#reg-def :

- Entry format (i.e. what is put into the TD document and not what the linked document should contain)
  - Name of the binding
  - Link to the binding: Stable link
  - (possibly) The binding prefix
- Requirements on the submitted document:
  - To be clarified but the initial list for protocols at <https://w3c.github.io/wot-binding-templates/#creating-a-new-protocol-binding-template-subspecification> and <https://w3c.github.io/wot-binding-templates/#protocol-bindings-table>

Aspects to clarify based on the analysis of other registries above:

- Versioning of registry entries (see https://github.com/w3c/wot/tree/main/registry-analysis#versioning) and versioning with respect to 
- Deletion and deprecation (see https://github.com/w3c/wot/tree/main/registry-analysis#deletion-and-deprecation-of-registry-entries)
- Differentiating entry into the registry and update
- Technical submission mechanism. How does a binding get submitted? Is it a PR, an issue linking to an existing document, or an email? See the submission mechanism fields above.
- Whether we should have one or multiple registries


### Rules of a Registry

A preliminary list of rules (needs more iteration):

- Entry format (i.e. what is put into the TD document and not what the linked document should contain)
  - Name of the binding
  - Link to the binding: Stable link
  - (possibly) The binding prefix
- Requirements on the submitted document:
  - To be clarified but the initial list for protocols at <https://w3c.github.io/wot-binding-templates/#creating-a-new-protocol-binding-template-subspecification> and <https://w3c.github.io/wot-binding-templates/#protocol-bindings-table>

Aspects to clarify based on the analysis of other registries above:

- Versioning of registry entries (see https://github.com/w3c/wot/tree/main/registry-analysis#versioning) and versioning with respect to 
- Deletion and deprecation (see https://github.com/w3c/wot/tree/main/registry-analysis#deletion-and-deprecation-of-registry-entries)
- Differentiating entry into the registry and update
- Technical submission mechanism. How does a binding get submitted? Is it a PR, an issue linking to an existing document, or an email? See the submission mechanism fields above.
- Whether we should have one or multiple registries

### Registry Template

Submission template vs. what lives in the registry entry

A set of files and requirements for each file

At the top level, markdown file similar to the use case template that describes the binding, YAML template for git workflow 

- name of binding
- maintainers
- protocols

Same content as existing binding
- HTML specification file using respec
- JSON Schema
- Ontology files including JSON-LD context for TDs

(Think about how to manage the set of semantic artifacts/ontologies)

Create a repository template to make it easy for people to create new bindings
