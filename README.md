# Web of Things (WoT) Binding Templates
[![Follow on Twitter](https://img.shields.io/twitter/follow/W3C_WoT.svg?label=follow+W3C_WoT)](https://twitter.com/W3C_WoT)
[![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/web-of-things?style=plastic)]( https://stackoverflow.com/questions/tagged/web-of-things)

General information about the Web of Things can be found on https://www.w3.org/WoT/.
  
---
This repository is for discussion and development of the Web of Things (WoT) Binding Templates document.

Each commit here will sync it to the master, which will expose the content to http://w3c.github.io/wot-binding-templates/.

To make contributions, please provide pull-requests to the html file, see [github help](https://help.github.com/articles/using-pull-requests/).

Some HTML files are automatically rendered from RDF sources. To render them, install Node.js (if necessary) and run:
```sh
$ npm i # to do once to install dependencies
$ node render.js
```
