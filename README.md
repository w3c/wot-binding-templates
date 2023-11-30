# Web of Things (WoT) Binding Templates

[![Follow on Twitter](https://img.shields.io/twitter/follow/W3C_WoT.svg?label=follow+W3C_WoT)](https://twitter.com/W3C_WoT)
[![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/web-of-things?style=plastic)]( https://stackoverflow.com/questions/tagged/web-of-things)

General information about the Web of Things can be found on https://www.w3.org/WoT/.
  
---
This repository is for discussion and development of the W3C Web of Things (WoT) Binding Templates document.

Each commit here will sync it to the master, which will expose the content to [http://w3c.github.io/wot-binding-templates/](http://w3c.github.io/wot-binding-templates/.)

Binding Templates document is made of multiple subspecifications that each describe the use of a protocol, media type or platform.
For convenience purposes, the currently available Editor's Draft of subspecifications are linked below:

### Protocols

<table class="def">
    <thead>
        <tr>
            <th>Abbreviation</th>
            <th>Name</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTTP</td>
            <td>Hypertext Transfer Protocol</td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/protocols/http/index.html">Link</a></td>
        </tr>
        <tr>
            <td>CoAP</td>
            <td>Constrained Application Protocol</td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/protocols/coap/index.html">Link</a></td>
        </tr>
        <tr>
            <td>MQTT</td>
            <td>Message Queuing Telemetry Transport</td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/protocols/mqtt/index.html">Link</a></td>
        </tr>
        <tr>
            <td>Modbus</td>
            <td>Modbus</td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/protocols/modbus/index.html">Link</a></td>
        </tr>
        <tr>
            <td>BACnet</td>
            <td>Building Automation and Control Networks</td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/protocols/bacnet/index.html">Link</a></td>
        </tr>
    </tbody>
</table>

Please also look at <https://w3c.github.io/wot-binding-templates/#protocol-intro> for additional information.

### Payload Formats

<table class="def">
    <thead>
        <tr>
            <th>Abbreviation</th>
            <th>Name</th>
            <th>Media Type</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>XML</td>
            <td>eXtensible Markup Language</td>
            <td><code>application/xml</code></td>
            <td><a href="https://w3c.github.io/wot-binding-templates/bindings/payloads/xml/index.html">Link</a></td>
        </tr>
    </tbody>
</table>

Please also look at <https://w3c.github.io/wot-binding-templates/#payloads-intro> for additional information.

### Platforms

Work in progress.

Please also look at <https://w3c.github.io/wot-binding-templates/#platforms-intro> for additional information.

## Contribution

To make contributions, please provide pull-requests to the corresponding file, see [GitHub help](https://help.github.com/articles/using-pull-requests/).

Some HTML files are automatically rendered from RDF sources.
To render them, install [Node.js](https://nodejs.org/en/) (if necessary) and run:

```sh
$ npm i # to do once to install dependencies
$ node render.js
```

This rendering process is mandated through the use of a [Husky](https://www.npmjs.com/package/husky) pre-commit hook.
Make sure to run `npm install` first to install husky in the first place.

## Specberus

Many information about a spec can be obtained from [Specberus](https://github.com/w3c/specberus) hosted by the W3C.
Below are some requests that are usually useful:

1. Get general information: `curl "https://www.w3.org/pubrules/api/metadata?url=https://w3c.github.io/wot-binding-templates/"`
2. Validate document: `curl "https://www.w3.org/pubrules/api/validate?url=https://w3c.github.io/wot-binding-templates/&profile=auto"`

## Editing Conventions

Please use [EditorConfig](https://editorconfig.org/) by installing a plugin for your favorite editor.
This detects the [.editorconfig](.editorconfig) file and adjusts your IDE's behavior regarding indentation, line 
endings and more.
Additionally, please adjust your IDE to use 120 line length, where each line that is longer than 120
should be continued in the following line.

If you do not wish to use EditorConfig, please set the following settings in your editor:

- Indentation Style: space
- Indentation Size: 4
- End of Line: lf
- Charset: utf-8
