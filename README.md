## waze-traffic

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