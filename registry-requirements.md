# Binding Registry Requirements

Until the editor's draft and the requirements here are ready, this document will contain the requirements for the binding registry.
Please see <https://github.com/w3c/wot/blob/main/registry-analysis/Readme.md> to see the analysis of the registry mechanism.

## Use Case

From the charter:

> Support WoT Interoperability: The WG will improve out-of-the-box interoperability and enable the integration of WoT into other ecosystems and communities. Thus, the WG will define core binding and profiling mechanisms, and define additional profiles and bindings, as appropriate.

Our Story and Use Case:

The goal of the W3C Web of Things is to support multiple protocols via the bindings mechanism.
There are domains like smart cities and infrastructure where multiple stakeholders bring different devices and systems with different protocols.
This means existing systems should be made interoperable with a descriptive approach via Thing Descriptions.

It is unrealistic to incorporate a complete list of bindings into a REC document before its publication; thus, we need a more flexible mechanism.

## Intro Section of the Document

- A binding SHOULD be written by people with a good understanding of the protocol and media type (or similar), who are not necessarily the TD Editors. This includes people and organizations inside and outside of the WoT WG.
  - Reasons Behind the Requirement:
    - Instead of WG learning each new protocol and media type, it is more efficient for people with a good understanding of the protocol or media type to write a binding.
    - Engaging other communities.
- The binding registry MUST be a separate document but associated with a TD version.
  - Reasons Behind the Requirement: It is easier to update in the long term.
- Association of a binding with the TD specification (registry entry) SHOULD be confirmed by the WoT Working Group or its custodian. In other words, a person needs some permission and/or confirmation to authoritatively say that a given binding can be used with TD version X. The custodian of this registry is the WoT WG in the beginning.
  - Reasons Behind the Requirement: WoT WG is the manager of the registry.
  
## Content of Registry Definition

A preliminary list of rules that is extending https://www.w3.org/2023/Process-20230612/#reg-def (needs more iteration):

- Entry format: what is put into the table and not what the binding should contain.
- Lifecycle of entries: how are they submitted, updated, deprecated etc.
- Submission Requirements: What the binding has to contain in order to go into the table

### Entry format 

Each entry MUST contain this information, and all parts of the entry MUST not conflict with existing bindings.

- Name of the binding
  - Examples: `HTTP Binding Template`, `CoAP Binding Template`, 
- Link to the binding: Stable and dated link
  - Examples: `https://www.w3.org/TR/wot/binding-templates/http-20240726/index.html`
- Binding ontology prefix
  - Examples: `modv`, `htv`, `cov`
- Binding Identification in TD: URI Scheme or other TD terms that are reserved for this binding.
  - Examples: `"subprotocol":"sse"`, `"href":"http://example.com"`, `"contentType":"application/json"`
  - In a TD, a binding SHOULD be identifiable by the terms in a form such as `href`, `contentType`, `subprotocol`, or connection information found in the root of the TD.
    - Reasons Behind the Requirement:
      - This avoids conflicts that are mentioned in the previous requirement
    - TODO: These terms should be refined based on the additions/changes to the TD 2.0 mechanism, e.g., introducing a `protocol` term, or putting restrictions on URI scheme and `subprotocol` combination, data mapping, etc.
    - DISCUSS: We need to clarify whether the URI scheme and the media type MUST be registered in IANA first. Opinions:
      - Cris: Provisional registration could reduce the overhead. Any new conflicting ones would bring up a discussion but it can still result in "our" provisional getting demoted.
        - Pros: more stable. Cons: More overhead and work
        - In the provisional state of an entry, we can ask for no registration to get reviews etc.
      - Luca: We should require this. Otherwise, there can be conflicts (our registry shows one scheme and IANA another). We first get a binding submission, at that stage no registration is required. After a review by the TF, the submitter should trigger a submission process in IANA.
      - Daniel: The merged entries should contain finalized registrations at IANA. We can get a first PR for submission without any registration in the first place but that PR will not be merged beforehand.
      - Ege's Preliminary Consensus Idea: Until a custodian review, no registration is needed. A full IANA registration is required for the final and stable version of the binding. The submitter SHOULD trigger the registration at IANA. If needed, the custodian MAY trigger the IANA registration.
- Supported TD version (no uniqueness needed):
  - A binding SHOULD correspond to specific TD specification version(s).
    - Reason Behind the Requirement: A binding may not fit newer or older versions of a TD specification (e.g., `readproperty` can become `readprop`, or a new operation can arrive). Thus, at the time of writing a binding, it needs to be associated with one or more known TD specification versions.
- Status: DISCUSS with lifecycle

### Lifecycle 

- Technical submission mechanism. How does a binding get submitted? Is it a PR, an issue linking to an existing document, or an email? See the submission mechanism fields above.
  - Ege: We work with issues only. The information for the entry format is submitted as a list. This way, non-W3C members can submit a binding. Reviews from the custodian happen on the issue and the submitter is expected to answer until the custodian makes a PR to add the binding to the registry or change its status.
- Versioning of registry entries (see https://github.com/w3c/wot/tree/main/registry-analysis#versioning)
  - Ege: We do not allow updates of a registry document content. A new version of a binding is a resubmission and optional deprecation of the old one. Only new features need new implementations though so it is not a completely new registration.
  - DISCUSS: Do we allow two versions of a binding to stay in the registry?
    - Ege: At least per TD version, it should be avoided but I think multiple initial entries should be allowed in case of diverging opinions to collect implementation feedback. If there is a drastically new binding of an existing one, two can be allowed to be kept but this should not be encouraged. This will causes issues with prefix, URI scheme based detection etc.
- Deletion and deprecation (see https://github.com/w3c/wot/tree/main/registry-analysis#deletion-and-deprecation-of-registry-entries)
  - Ege: No entry is ever deleted. Deprecated entries are moved to another table or to the bottom of the table and marked clearly deprecated and colored differently.

- Status values: Initial (provisional, draft) -> Final -> Deprecated
  - Merged initial entries trigger a "Call for Implementation"
- What are the requirements to transition from one to the other value? See the next section as well.

### Ownership

- If the WoT WG no longer exists, the W3C Team or their delegated entity becomes the custodian.
  - Reasons Behind the Requirement: Maintaining the registry without the WoT WG should be possible.

### Requirements on the Submitted Document:

What does the binding have to contain to go into the table

- To be clarified, but the initial list for protocols is at <https://w3c.github.io/wot-binding-templates/#creating-a-new-protocol-binding-template-subspecification> and <https://w3c.github.io/wot-binding-templates/#protocol-bindings-table>
- An initial entry needs to fullfill document-level requirements (to be defined) but does not need to demonstrate implementation experience.
- What is the objective mechanism to confirm the initial entry?
  - Ege: Initial entry (provisional, draft) is checked for document correctness. 
  - Cris: Merging the initial entry would trigger a "Call for Implementation". Where discussions on implementation experience should be collected?
- DISCUSS: What is the implementation experience needed to transition from initial to final status? Should we have a test suite? Plugfest experience?
  - Koster: We won't be able to do "lab test" for certification (e.g. Matter). The assertions to satisfy will be generic to all bindings.
  - Cris: Testing the binding without being f2f should be possible.
  - Jan: Should there be interop testing? How many Thing implementations from submitter? How many Consumer implementations from submitter? What kind of implementation from non-submitter?
  - Ege: Going to the final, requires implementation experience (test suite, virtual or physical plugfest, etc.)
- A binding that uses a protocol MUST map at least one WoT operation (`op` keyword value such as `readproperty`) to a protocol message and vice versa
  - Reasons Behind the Requirement:
    - Lacking this requirement, the protocol is not bound to WoT and cannot be useful.
- A binding that uses a serialization format via the `contentType` keyword, MUST mention how the Data Schema terms should be used to describe the messages.
  - Reasons Behind the Requirement:
    - Avoid submission of a binding like "XML Binding" that says "Use `contentType:application/xml` and nothing more. That alone would not be enough to serialize correct messages based on the data schema.
  - TODO: We will need additional mechanisms (including vocabulary terms) to ensure that it is possible to use other media types.
 

## Basic Requirements

To choose a mechanism and the rules, we document our expectations below:

- This will be dissected into multiple points. It SHOULD be possible to register, update, or remove a registry entry that associates a binding to a specific TD specification outside of the REC lifecycle of the given TD specification.
  - Reasons Behind the Requirement:
    - Allowing new protocols to be bound to any TD version. 
    - The process should outlive the WG, in case the WG ever dissolves or the WG decides to stop maintaining a given TD specification version.
- There SHOULD NOT be two bindings for the same protocol, media type, etc.
  - Reasons Behind the Requirement:
    - Such multiple bindings would break interoperability
    - Such multiple bindings would confuse users, i.e., which binding should I use?
    - Such multiple bindings would complicate implementations
  - DISCUSS: Clarify what happens when two ecosystems like OCF and LwM2M both use CoAP binding. The initial thinking is to register them as separate entries and clarify what they use from CoAP binding. A layered registry can be thought of as similar to language tags with `en` extending to `en-us` and `en-uk`, where the tags and entries are different but the association with `en` is expressed in the ID. In our case, this would be `coap-ocf` and `coap-lwm2m`. A higher-level binding SHOULD NOT override or conflict with a lower-level binding, and this should be verified by the custodian, e.g., `cov:method` in CoAP binding should not be turned into `cov:operation` in the higher-level binding. The namespace (prefix and its values) defined in a binding CANNOT be redefined in any other binding.

- DISCUSS: How to identify a higher-level binding in the form


