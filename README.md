## waze-traffic
[![Build Status](https://travis-ci.org/begundal-ug/waze-traffic.svg?branch=master)](https://travis-ci.org/begundal-ug/waze-traffic) [![Coverage Status](https://coveralls.io/repos/github/begundal-ug/waze-traffic/badge.svg?branch=master)](https://coveralls.io/github/begundal-ug/waze-traffic?branch=master)

This module fetches traffic info, which includes traffic alerts and traffic jams around an area that you defined.

### How to use

```js
const traffic = require('waze-traffic');

traffic.getTraffic({
        top: '-6.89206',
        right: '107.64529',
        bottom: '-6.89883',
        left: '107.63186',
    }).then(result => {
        console.log(result)
        /**
         * should be like this:
         * {
         *     "alerts": [{
         *         country: '...',
         *         numOfThumbsUp: '...',
         *         type: '...',
         *         subType: '...',
         *         placeNearby: '...',
         *         latitude: '...',
         *         longitude: '...',
         *     }, ...],
         *     "jams": [{
         *         severity: '...',
         *         type: '...',
         *         country: '...',
         *         end: '...',
         *         start: '...',
         *         street: '...',
         *         startLatitude: '...',
         *         startLongitude: '...',
         *         endLatitude: '...',
         *         endLongitude: '...',
         *         delayInSec: '...',
         *     }, ...],
         * }
         */
    });
```
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/certified-steve-bruhle.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/reading-6th-grade-level.svg)](http://forthebadge.com)
