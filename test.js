const test = require('tape');

const traffic = require('./index');

test('get traffic', t => {
    t.plan(2);
    
    traffic.getTraffic({
        top: '-6.89206',
        right: '107.64529',
        bottom: '-6.89883',
        left: '107.63186',
    }).then(result => {
        t.notEqual(typeof result.alerts, 'undefined');
        t.notEqual(typeof result.jams, 'undefined');
    });
});
