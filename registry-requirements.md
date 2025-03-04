# DRAFT - Binding Registry Requirements

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

- <a name="int-exp">Int-Exp</a>: A binding SHOULD be written by people with a good understanding of the protocol and media type (or similar), who are not necessarily the TD Editors. This includes people and organizations inside and outside of the WoT WG.
  - Reasons Behind the Requirement:
    - Instead of WG learning each new protocol and media type, it is more efficient for people with a good understanding of the protocol or media type to write a binding.
    - Engaging other communities.
- <a name="int-sep">Int-Sep</a>:The binding registry MUST be a separate document but associated with a TD version.
  - Reasons Behind the Requirement: It is easier to update in the long term.
- <a name="int-asso">Int-Asso</a>: Association of a binding with the TD specification (registry entry) SHOULD be confirmed by the WoT Working Group or its custodian. In other words, a person needs some permission and/or confirmation to authoritatively say that a given binding can be used with TD version X. The custodian of this registry is the WoT WG in the beginning.
  - Reasons Behind the Requirement: WoT WG is the manager of the registry.
- <a name="int-oth">Int-Oth</a>: The binding document (registry entry) CAN be hosted by another entity than the custodian.

## Content of Registry Definition

A preliminary list of rules that is extending https://www.w3.org/2023/Process-20230612/#reg-def (needs more iteration):

- Entry format: what is put into the table and not what the binding should contain.
- Lifecycle of entries: how are they submitted, updated, deprecated etc.
- Submission Requirements: What the binding has to contain to go into the table

### Entry format

Each entry MUST contain this information, and all parts of the entry MUST not conflict with existing bindings.

- <a name="form-name">Form-Name</a>: Name of the binding
  - Examples: `HTTP Binding Template`, `CoAP Binding Template`
- <a name="form-link">Form-Link</a>: Link to the binding document: Stable link whose content cannot change (e.g., a date, version number, etc.)
  - Examples: `https://www.w3.org/TR/wot/binding-templates/http-20240726/index.html`
- <a name="form-pref">Form-Pref</a>: Binding ontology prefix
  - Examples: `htv`, `modv`, `cov`
- <a name="form-id">Form-Id</a>: Binding Identification in TD: URI Scheme or other TD terms reserved for this binding.
  - Examples: `"subprotocol":"sse"`, `"href":"http://example.com"`, `"contentType":"application/json"`
  - In a TD, a binding SHOULD be identifiable by the terms in a form such as `href`, `contentType`, `subprotocol`, or connection information found in the root of the TD.
    - Reasons Behind the Requirement:
      - This avoids conflicts that are mentioned in the previous requirement
    - TODO: These terms should be refined based on the additions/changes to the TD 2.0 mechanism, e.g., introducing a `protocol` term or putting restrictions on URI scheme and `subprotocol` combination, data mapping, etc.
    - Until a custodian review, no registration is needed. A full IANA registration is required for the final and stable version of the binding. The submitter SHOULD trigger the registration at IANA. If needed, the custodian MAY trigger the IANA registration. The submitter MAY do a provisional registration to simplify the process on the IANA side.
- <a name="form-tdver">Form-TdVer</a>: Supported TD version (no uniqueness needed):
  - A binding SHOULD correspond to specific TD specification version(s).
    - Reason Behind the Requirement: A binding may not fit newer or older versions of a TD specification (e.g., `readproperty` can become `readprop`, or a new operation can arrive). Thus, when writing a binding, it must be associated with one or more known TD specification versions.
- <a name="form-stat">Form-Stat</a>: Status: One of Initial, Current, Superseded or Obsolete
- <a name="form-summ">Form-Summ</a>: Summary Document: Link to the summary document
- <a name="form-ver">Form-Ver</a>: DISCUSS: Version: A string that denotes the version of the binding that is linked.
  - What is the versioning scheme we use. See https://github.com/w3c/wot-binding-templates/issues/400

DISCUSS: Clarify what happens when two ecosystems, OCF and LwM2M, use the CoAP binding. The initial thinking is to register them as separate entries and clarify what they use from the CoAP binding. A layered registry can be considered similar to language tags with `en` extending to `en-us` and `en-uk`, where the tags and entries are different but the association with `en` is expressed in the ID. In our case, this would be `coap-ocf` and `coap-lwm2m`. A higher-level binding SHOULD NOT override or conflict with a lower-level binding, and the custodian should verify this, e.g., `cov:method` in CoAP binding should not be turned into `cov:operation` in the higher-level binding. The namespace (prefix and its values) defined in a binding CANNOT be redefined in any other binding.
- See https://github.com/w3c/wot-binding-templates/issues/401

### Lifecycle

- <a name="life-subm">Life-Subm</a>: Technical submission mechanism. How does a binding get submitted?
   - We work with issues only. The information for the entry format is submitted as a list. This way, non-W3C members can submit a binding. Reviews from the custodian happen on the issue. The submitter is expected to answer until the custodian makes a PR to add the binding to the registry or change its status.
   - A purpose built GitHub project for tracking submissions is used. When a submission comes in form an issue, it is automatically added to column "Binding Submitted". When the custodian and reviewers start looking at it, it goes to the "Under Review" column. If the review is in favour, the custodian makes the PR to add it to the registry and the issue goes to column "Accepted". If the review is not in favour, it goes to the column "Rejected". All these changes are reflected as comments in the original issue.
   - In case of potential conflict with another entry, the reviewer MUST mark the new submission accordingly. As two bindings that do the same are not allowed, either the old one MUST be deprecated or the new one MUST be rejected. See also point 13 under "Requirements on the Submitted Document".
- <a name="life-stat">Life-Stat</a>: Initial -> Current -> Superseded or Obsolete
  - Definitions:
    - Initial: Document is correctly written but no implementation experience has been necessarily documented.
    - Current: Custodian recommends it for new implementations and it has enough implementation experience
    - Superseded: A previously "current" entry that is now superseded with a newer one
    - Obsolete: Custodian does not recommend the usage of this binding
  - This is inspired by the TTWG Boilerplate
  - Alternatives that can be reconsidered if needed:
    - Initial: provisional, draft, in development
    - Current: Final, Stable
    - Outdated: Old, Deprecated (not preferred since it is still usable), Previous, Obsolete. Also see <https://www.w3.org/policies/process/#RecsObs>
- <a name="life-tran">Life-Tran</a>: What are the requirements for transitioning from one value to another? See the "Requirements on the Submitted Document" section as well.
- <a name="life-ver">Life-Ver</a>: Versioning of registry entries (see https://github.com/w3c/wot/tree/main/registry-analysis#versioning)
  - Ege: We do not allow updates to a registry document's content. A new version of a binding is a resubmission and optional deprecation of the old one. However, new features need new implementations, so it is not a completely new registration.
- <a name="life-deldep">Life-DelDep</a>: Deletion and deprecation (see https://github.com/w3c/wot/tree/main/registry-analysis#deletion-and-deprecation-of-registry-entries)
  - No entry is ever deleted. Deprecated entries are moved to another table or are clearly marked deprecated, colored differently, and moved to the bottom.

### Ownership

- <a name="own-cust">Own-Cust</a>: If the WoT WG no longer exists, the W3C Team or their delegated entity becomes the custodian. For example, a dedicated W3C community group can be created to maintain the registry.
  - Reasons Behind the Requirement: Maintaining the registry without the WoT WG should be possible.
- <a name="own-rev">Own-Rev</a>: Reviewer: If there is an expert of the binding entry's specification and a WoT expert within the custodian entity, they CAN do the review independently. If not, the custodian MUST choose an expert for that specification and a WoT expert who can be the same person.

### Requirements on the Submitted Document

What does the binding have to contain to go into the table

- <a name="req-opmap">Req-opmap</a>: A binding that uses a protocol MUST map at least one WoT operation (`op` keyword value such as `readproperty`) to a protocol message and vice versa
- <a name="req-contmap">Req-contmap</a>: A binding that uses a serialization format via the `contentType` keyword MUST mention how the Data Schema terms should be used to describe the messages. This avoids submission of a binding like "XML Binding" that says "Use `contentType:application/xml` and nothing more. That alone would not be enough to serialize correct messages based on the data schema.
  - TODO: We will need additional mechanisms (including vocabulary terms) to ensure that it is possible to use other media types.
- <a name="req-traninit">Req-TranInit</a>: Initial entry MUST be a correct document which complies with [Req-content](#req-content). The reviewer MUST NOT check whether the binding tries to map `readproperty` to a non-existent HTTP method. A successful initial document triggers a "Call for Implementation".
- <a name="req-docsec">Req-DocSec</a>: The WoT binding MAY be just one section of the document. In that case, the "Link to the binding document" in the registry entry MUST point to the specific location. PDF or similar document types MAY be submitted if the "Link to the binding document" in the registry entry contains a text pointing to the section. However, HTML and Webpages SHOULD be favoured.
- <a name="req-copy">Req-Copy</a>: The WoT binding document DOES NOT have to follow the W3C copyright. The submitter is free to choose based on the process they or their organization follows.
- <a name="req-openread">Req-OpenRead</a>: The binding document linked in the registry entry SHOULD be open to read, use, and implement, but that is not required for the document be added to the registry.
  - See also https://github.com/w3c/wot-binding-templates/issues/393
- <a name="req-openrev">Req-OpenRev</a>: Reviewer MUST have access to the binding document and to the protocol or media type specification (what the binding specifies)
- <a name="req-summ">Req-Summ</a>: The submitter MUST fill the GitHub form provided by the custodian to generate the summary document, which is hosted by the custodian together with the registry. This form contains the following:
  - Abstract - It MUST contain an abstract with the following information:
    - What the binding's content is about, e.g. what this protocol is.
    - Who should use it
    - For which purpose should it be used, e.g. monitoring, process control. This SHOULD use terminology of the submitter, i.e. the custodian does not provide definitions for this.
  -  Examples - It SHOULD contain examples (can be one) TDs or TMs demonstrating the use of the binding
  -  It MUST contain Access/Usage restrictions about the binding, protocol, implementation etc. using the terminology and/or documents of the submitter. A non-exhaustive list of examples of restrictions: 
    - Reading the binding document
    - Reading the protocol specification
    - Implementing a non-commercial device/Thing
    - Implementing a non-commercial Consumer application/driver
    - Conditions for commercial use: E.g. building a commercial product with the binding
    - Making a statement about your product's supporting that binding
- <a name="req-trancurr">Req-TranCurr</a>: DISCUSS: What is the objective mechanism to confirm the status change from "initial" to "current"? Should we have a test suite? Plugfest experience?
  - See https://github.com/w3c/wot-binding-templates/issues/403
- <a name="req-content">Req-Content</a>: The binding MUST contain the following sections in the order presented below. The binding CAN contain other sections anywhere, including between the required ones. The submitters are encouraged to look at the existing submissions. There MUST be at least one operation mapped to a protocol message/vocabulary term. The submitter SHOULD use the table template provided in the document for the vocabulary.
  - Introduction
  - Binding Content:
    - URL Format
    - Form Vocabulary Definition as Table
    - Default and possible mappings to operations as a Table
  - Examples
- <a name="req-docs">Req-Docs</a>: DISCUSS: What are the required (machine-readable) documents provided on the side?
  - See https://github.com/w3c/wot-binding-templates/issues/404
- <a name="req-implexp">Req-ImplExp</a>: Where should discussions on implementation experience be collected?
  - See https://github.com/w3c/wot-binding-templates/issues/403
- <a name="req-confl">Req-Confl</a>: The binding entry SHOULD NOT conflict with other entries in the registry by redefining the same concepts such as redefining the URI Scheme, the vocabulary terms or the default assignments. If the previously stable binding is being improved upon by the same organization, that previous binding MUST be deprecated once the new one reaches the **stable** status.
