# <center>waze-traffic</center>

<center>[![Build Status](https://travis-ci.org/begundal-ug/waze-traffic.svg?branch=master)](https://travis-ci.org/begundal-ug/waze-traffic) [![Coverage Status](https://coveralls.io/repos/github/begundal-ug/waze-traffic/badge.svg?branch=master)](https://coveralls.io/github/begundal-ug/waze-traffic?branch=master) [![npm version](https://badge.fury.io/js/waze-traffic.svg)](https://npmjs.org/package/waze-traffic)</center>

This is an unofficial module to fetch traffic info from [Waze](https://www.waze.com), which includes traffic alerts and jams that happens around an area that you defined.

This was built with ES2015 in mind, so you need to use nodejs 6 minimum, or use babel with `babel-preset-es2015` preset.

### First, a warning.

This module doesn't affiliate with waze in any way, and you shouldn't treat this module as official way to interact with Waze's API.

### Install

```bash
## Yarn
$ yarn add waze-traffic

## NPM
$ npm install --save waze-traffic
```

### Usage

```js
const waze = require('waze-traffic');

waze.getTraffic({
    top: '-6.89206',
    right: '107.64529',
    bottom: '-6.89883',
    left: '107.63186',
}).then(info => {
    console.log(info);
});
```

### API

####**getTraffic([boundary])**

#####**boundary**

**top** (required)

Type: `string`

The top longitude boundary of the area

**right** (required)

Type: `string`

The right latitude boundary of the area

**bottom** (required)

Type: `string`

The bottom longitude boundary of the area

**left** (required)

Type: `string`

The left latitude boundary of the area

### Release History

see [CHANGELOG.md](CHANGELOG.md)

### License

Copyright (c) 2017 Achmad Mahardi, Ahmad Anshorimuslim
Licensed under the MIT license.
