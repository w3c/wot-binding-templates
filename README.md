<p align="center">
  <a href="https://w3.org/wot">
    <img alt="Web of Things Homepage" src="https://www.w3.org/WoT/IG/wiki/images/8/8f/WOT-hz.svg" width="300" />
  </a>
</p>

<p align="center">
  <a href="https://w3c.social/@wot">
    <img alt="Follow on Mastodon" src="https://img.shields.io/mastodon/follow/111609289932468076?domain=https%3A%2F%2Fw3c.social"></a>
  <a href="https://twitter.com/W3C_WoT">
    <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/W3C_WoT"></a>
  <a href="https://stackoverflow.com/questions/tagged/web-of-things">
    <img alt="Stack Exchange questions" src="https://img.shields.io/stackexchange/stackoverflow/t/web-of-things?style=plastic"></a>
</p>

<p align="center">
  <a href="https://www.w3.org/TR/wot-binding-templates/"> <!--  REC LINK -->
    <img alt="Latest WG Note" src="https://img.shields.io/badge/W3C_Note-Latest-005a9c"></a>
  <a href="https://w3c.github.io/wot-binding-templates/"> <!--  ED LINK -->
    <img alt="Latest Editor's Draft" src="https://img.shields.io/badge/Editor's_Draft-Latest-fe914a"></a>
</p>

# Web of Things (WoT) Binding Templates

General information about the Web of Things can be found on https://www.w3.org/WoT/.
  
---

Binding Templates enable a Thing Description to be adapted to a specific protocol, data payload formats or platforms that combine both in specific ways. 
This is done through additional descriptive vocabularies, Thing Models and examples that aim to guide the implementors of Things and Consumers alike.

## Logistics

- Call information: We use the W3C Calendar. You can find the next WoT TD/Binding Templates calls at https://www.w3.org/groups/wg/wot/calendar.
- Wiki (contains agenda): https://www.w3.org/WoT/IG/wiki/WG_WoT_Thing_Description_WebConf
- [Contribution rules](./CONTRIBUTING.md)

## Publications

- [Latest Editor's Draft](https://w3c.github.io/wot-binding-templates/) (syncs to this repository's main branch)
- [Latest Working Draft](https://www.w3.org/TR/wot-binding-templates/)
- Other deliverables:
  - [HTTP Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/http/index.html)
  - [CoAP Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/coap/index.html)
  - [MQTT Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/mqtt/index.html)
  - [Modbus Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/modbus/index.html)
  - [BACnet Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/bacnet/index.html)
  - [PROFINET Binding Template](https://w3c.github.io/wot-binding-templates/bindings/protocols/profinet/index.html)
  - [XML Binding Template](https://w3c.github.io/wot-binding-templates/bindings/payloads/xml/index.html)

---

## Instructions for Editors and Contributors

If you have followed the [Contribution rules](./CONTRIBUTING.md) and want to contribute, please follow the instructions below.

### Tooling

Some HTML files are automatically rendered from RDF sources.
To render them, install [Node.js](https://nodejs.org/en/) (if necessary) and run:

```sh
$ npm i # to do once to install dependencies
$ node render.js
```

This rendering process is mandated through the use of a [Husky](https://www.npmjs.com/package/husky) pre-commit hook.
Make sure to run `npm install` first to install husky in the first place.

### Formatting

Please use [EditorConfig](https://editorconfig.org/) by installing a plugin for your favorite editor.
This detects the [.editorconfig](.editorconfig) file and adjusts your IDE's behavior regarding indentation, line 
endings and more.
Additionally, please adjust your IDE to use 120 line length, where each line that is longer than 120
should be continued in the following line.

If you do not wish to use EditorConfig, please set the following settings in your editor:

- Indentation Style: space
- Indentation Size: 4
- Charset: utf-8

## Labeling Conventions

We use the GitHub labels found at https://github.com/w3c/wot-binding-templates/labels. Please try to reuse the labels before creating new ones.

## Known Implementations

The W3C WoT collects known implementations at <https://www.w3.org/WoT/developers/>. Implementations of Binding Templates are found under all categories.
