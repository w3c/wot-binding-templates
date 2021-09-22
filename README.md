# Web of Things (WoT) Binding Templates

[![Follow on Twitter](https://img.shields.io/twitter/follow/W3C_WoT.svg?label=follow+W3C_WoT)](https://twitter.com/W3C_WoT)
[![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/web-of-things?style=plastic)]( https://stackoverflow.com/questions/tagged/web-of-things)

General information about the Web of Things can be found on https://www.w3.org/WoT/.
  
---
This repository is for discussion and development of the W3C Web of Things (WoT) Binding Templates document.

Each commit here will sync it to the master, which will expose the content to [http://w3c.github.io/wot-binding-templates/](http://w3c.github.io/wot-binding-templates/.)

## Contribution

To make contributions, please provide pull-requests to the corresponding file, see [GitHub help](https://help.github.com/articles/using-pull-requests/).

Some HTML files are automatically rendered from RDF sources.
To render them, install [Node.js](https://nodejs.org/en/) (if necessary) and run:

```sh
$ npm i # to do once to install dependencies
$ node render.js
```

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
