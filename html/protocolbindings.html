<!DOCTYPE html>
<!--<!DOCTYPE html [
    <!ENTITY nbsp "&#160;"> 
]>-->
<html>
  <head>
    <title>WoT Protocol Binding Templates</title>
    <meta http-equiv='Content-Type' content='text/html;charset=utf-8'/>
    <!-- 
      === NOTA BENE ===
      For the three scripts below, if your spec resides on dev.w3 you can check them
      out in the same tree and use relative links so that they'll work offline,
     -->
		<script src="https://www.w3.org/Tools/respec/respec-w3c-common" async="async" class="remove"></script>
    <script class='remove'>
      var respecConfig = {
          // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
          specStatus:           "unofficial",
          
          // the specification's short name, as in http://www.w3.org/TR/short-name/
          shortName:            "",

          // if your specification has a subtitle that goes below the main
          // formal title, define it here
          // subtitle   :  "an excellent document",

          // if you wish the publication date to be other than today, set this
          // publishDate:  "2009-08-06",

          // if the specification's copyright date is a range of years, specify
          // the start date here:
          // copyrightStart: "2005"

          // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
          // and its maturity status
          // previousPublishDate:  "1977-03-15",
          // previousMaturity:  "WD",

          // if there a publicly available Editor's Draft, this is the link
          edDraftURI:           "",

          // if this is a LCWD, uncomment and set the end of its review period
          // lcEnd: "2009-08-05",

          // if you want to have extra CSS, append them to this list
          // it is recommended that the respec.css stylesheet be kept
          extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],

          // editors, add as many as you like
          // only "name" is required
          editors:  [
              { name: "Michael Koster", url: "",
                company: "", companyURL: "" },
          ],

          // authors, add as many as you like. 
          // This is optional, uncomment if you have authors as well as editors.
          // only "name" is required. Same format as editors.

          //authors:  [
          //    { name: "Your Name", url: "http://example.org/",
          //      company: "Your Company", companyURL: "http://example.com/" },
          //],
          
          // name of the WG
          wg:           "Interest Group on the Web of Things",
          
          // URI of the public WG page
          wgURI:        "http://www.w3.org/WoT/IG/",
          
          // name (with the @w3c.org) of the public mailing to which comments are due
          wgPublicList: "public-wot-ig",
          
          // URI of the patent status for this WG, for Rec-track documents
          // !!!! IMPORTANT !!!!
          // This is important for Rec-track documents, do not copy a patent URI from a random
          // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
          // Team Contact.
          wgPatentURI:  "",
      };
    </script>
  </head>
  <body>
    <section id='abstract'>
    <p>WoT Thing Descriptions contain abstract, protocol-neutral desctiptions of interactions privoded by things and services.</p>
    
    <p>WoT Protocol Bindings are elements in a WoT Thing Description which perform the function of mapping the abstract interactions exposed by the Thing Description to the protocol-specific instances that are exposed by the devices and services in the target ecosystem.</p>
    
    <p>WoT Protocol Binding Templates consist of standardized design patterns and vocabulary to describe communications metadata for the target protocols that are mapped by WoT Thing Descriptions. Information in the Protocol Binding enables the WoT Servient to construct and parse messages in the target protocol.</p>
    
    <p>This document describes the general architecture and processing model for Protocol Bindings, and describes a structure and vocabulary for Protocol Binding Templates that may be adapted as needed to extend WoT Thing Description to new target protocols and ecosystems.</p>
    
    </section>

    <section>
    <h2>Definitions</h2>
    [See also the general definitions and vocabulary 	https://github.com/w3c/wot-architecture/blob/master/terminology.md]
    Binding Templates

	A re-usable collection of blueprints for the communication with different IoT platforms. The blueprints includes the required vocabulary for the Thing Description to map Interactions to platform-specific messages as well as implementation notes for the required protocol stacks or dedicated communication drivers.

	Protocol Binding

An implementation of the mapping between Interaction in the TD Interaction Model (e.g., Property read) and specific operations of a protocol (e.g., HTTP GET).
	</section>
    
    <section>
    <h2>Use Cases for Protocol Bindings</h2>
    <bl>
    <li>Mapping of specific protocols to the WoT Abstract Interactions</li>
    <li>Existing device ecosystems like OCF, LWM2M/IPSO, Bluetooth, Zigbee</li>
    <li>Devices and web services modeled using interactions</li>
    <li>HTTP, CoAP, MQTT, Websocket protocols (fetch, patch)</li>
    <li>IP and non-IP transports</li>
    <li>multi-servient synchronization, protocol adaptation and model re-composition, or adaptation in SW model</li>
    </bl>
	</section>
    
    <section>
    <h2>Thing Description Architecture</h2>
    
      <section>
      <h3>Thing Description</h3>
      <p>
<a href="#fig-td-example"></a> below is an example Thing Description, illustrating two parts. The upper part contains is a description of an interaction, and the lower part is an associated link, which contains the protocol binding.
      </p>
      </section>
      
	  <figure id="fig-td-example">
		<img src="images/td-example.png" style="width:95%"  />
    <figcaption>Example of a Thing Description</figcaption>
      </figure>
      
      <section>
      <h3>TD Interaction Description</h3>
      <p>
The interaction description part of a Thing Description describes an event, action, or property interaction which is exposed by a thing. Each interaction description contains semantic annotation that describes the type of interaction and its application class, and one or more link elements containing URIs that point to the API entry points for the interaction.
      </p>
      </section>
      
	  <figure id="fig-interaction">
		<img src="images/interaction-description.png" style="width:65%"  />
    <figcaption>Interaction Description Part</figcaption>
      </figure>
      
	</section>
       
    <section>
    <h2>Binding Template Design</h2>
    
    <section>
      <h3>Protocol Adaptation</h3>
      <p>
Device protocols from various standards organizations have peculiar patterns for exposing the device features that the protocol uses to encapsulate and communicate information. 
      </p>
      <p>
For example, OCF Resource Types expose a REST API that uses IETF concepts of Resource Type (rt) and Interface Type (if). By contrast, LWM2M/IPSO Smart Objects expose an hierarchy of object ID (collections) and resource ID (items) where the ID numbers provide the semantic identification. 
      </p>
      <p>
These may all use a common communication protocol like CoAP, and representation format like CBOR or JSON, but then require special options like resource type, interface type, content-formats, data types, and payload schemas. 
      </p>
      </section>
      
        <section>
      <h3>Protocol Binding</h3>
      <p> 
Protocol bindings map abstract WoT interactions to concrete protocol operations. The "link" block provides one or more links that point to entry points used to initiate the protocol operations. 
      </p>
      <p> 
          Extension of the "link" element in the TD to include communication instructions specific to the target protocol. Encoding in JSON serialization formats compatible with TD processing tools.
      </p>

      </section>
      
	  <figure id="fig-protocol-binding">
		<img src="images/protocol-binding-template.png" style="width:75%"  />
    <figcaption>Protocol Binding Part</figcaption>
      </figure>
      

	</section>
    
    <section>
    <h2>Processing Model and Runtime Architecture</h2>
    <bl>
    <li>Separation of context, isolation between client and target networks</li>
    <li>Secure communication between clients and target networks</li>
    <li>Protocol Bindings for Exposed Thing instances</li>
    </bl>
	</section>
       
    <section>
    <h2>Bindings for Properties</h2>
    Get/Set using red and write primitives, GET, PUT/POST
	</section>
    
    <section>
    <h2>Bindings for Actions</h2>
    <bl>
    <li>Mapping UPDATE vs. CREATE</li>
    <li>Protocol binidng for TD of created Action resource</li>
    <li>Mapping of Invoke, Read Status, Modify, Cancel</li>
    </bl>
	</section>
    
    <section>
    <h2>Bindings for Events</h2>
    <bl>
    <li>Mapping of simple Observe and Subscribe vs. Created Subscription</li>
    <li>Protocol binding for TD of created subscription resource</li>
    <li>Mapping of Subscribe, Modify Subscription, Cancel</li>
    </bl>
	</section>
    
    <section>
    <h2>Structure and Vocabulary for Protocol Binding Templates</h2>
    <bl>
    <li>TD Structure</li>
    <li>Link extension for Protocol Binding</li>
    <li>Protocol Binding vocabulary</li>
    </bl>
	</section>
    
    <section>
    <h2>Examples for Various Protocols and Ecosystems</h2>
    HTTP, CoAP, MQTT, OCF, LWM2M, ?? examples
	</section>
    
    <section>
    <h2>From the WoT WG Charter Sec. 2.3</h2>
    <p>While the Thing Description will provide general mechanisms to describe arbitrary protocols, to enable interoperability, the Working Group will define standard binding templates for common protocols.</p> 
    
    These standard binding templates will be created in close collaboration with the industry alliances and standards development organizations responsible for these. This includes definition of mappings from the interactions at the Thing Layer to:</p>
	<bl>
	<li>Transfer layer communication patterns such as push, pull, pub-sub, bi-directional messaging, etc.</li>
	<li>Specific protocols at the transfer layer, e.g., REST-based protocols such as HTTP and CoAP, pub-sub protocols such as MQTT, and raw channel-based protocols such as WebSockets</li>
	</bl>
	<p>The Web of Things has a multi-protocol architecture and bindings to both IP and non-IP transports (e.g., Bluetooth Low Energy) may be defined.</p>

	<p>Support for secure communications will be included, as defined by the Security and Privacy deliverable.</p>

	<p>The Binding Templates deliverable is informative by nature since the intended capabilities of the Thing Description could be used to describe any protocol, even common ones, from first principles. However, interoperability will be enhanced by providing and encouraging the use of standard binding templates for common protocols when possible.</p>
	</section>
	

  </body>
  
  <section id='appendix'>
  <h2>Earlier Material</h2>
  
    <section>
      <h2>Design Specification</h2>
      <section>
      <h3>Extension of the Interaction Description</h3>
      <p>
The interaction description contains the interaction type, additional semantic annotation for the interaction, and the input data and output data descriptors. 
      </p>
      
	  <figure id="fig-interaction-spec">
		<img src="images/interaction-description.png" style="width:65%"  />
        <figcaption>Interaction Description</figcaption>
      </figure>
      
       
      <p>
The inputData and outputData elements need to be able to accept multiple data items to support complex interactions. For example, an action may accept target value and transition time parameters to invoke. The implementation must pass data values between events, actions, and properties exposed to the scripting API, and the lower level traits exposed by the underlying thing protocols. This is done by labeling the data items with key names using json-schema "property" constructs. 
      </p>
      <p>
The inputData and outputData elements may be annotated with additional value constraints that are inherited from the low level thing traits. These value constraints may be expressed in json-schema validation constructs such as minimum and maximum, minLength, maxLength, etc.. Additional constraints may be specified using appropriate json-schema validation keywords and extended keywords.
      </p>
      </section>
      
      <section>
      <h3>Extension of the "link" element</h3>
      <p>
The "link" element of an interaction description points to and describes how the ecosystem specific driver is to interact with the low level thing API to carry out the interaction, e.g. set property, invoke action.
      </p>
      
      <figure id="fig-protocol-binding-spec">
		<img src="images/protocol-binding-template.png" style="width:75%"  />
        <figcaption>Protocol Binding Part</figcaption>
      </figure>
      

      <p>
For things that expose the device features in a REST and REST-like API, the Protocol Binding is constructed somewhat like an HTML submission form. Metadata in the binding template describes which REST method to use, and any other options that are required to be transmitted in the request or parsed from the response.
      </p>
      <p>
The example OCF protocol binding contains values for Resource Type (rt) and Interface Type (if) required to interact with the appropriate device features.
      </p>
      </section>      

    </section>

  </section>
  
</html>
