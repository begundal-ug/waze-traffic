const axios = require('axios');

const createAlert = require('./src/alert');
const createJam = require('./src/jam');

const serverList = ['rtserver', 'row-rtserver', 'il-rtserver'];

function notificationUrl(server, left, right, top, bottom) {
    return axios.get(`https://www.waze.com/${server}/web/TGeoRSS`, {
        params: {
            left,
            right,
            top,
            bottom
        }
    });
}

function getTraffic(segment) {
    if (!segment.top && !segment.right && !segment.bottom && !segment.left) return Promise.reject('Please provide top, right, bottom, left');
    return Promise.all(serverList.map(server => notificationUrl(server, segment.left, segment.right, segment.top, segment.bottom)))
        .then(responses => responses
            .map(response => {
                const obj = {
                    alerts: [],
                    jams: [],
                };
                if (response.data.alerts) {
                    obj.alerts = response.data.alerts.map(alert => createAlert(alert))
                }
                if (response.data.jams) {
                    obj.jams = response.data.jams.map(alert => createJam(alert))
                }
                return obj;
            })
            .reduce((prev, curr) => {
                return Object.assign(prev, curr);
            }), {});
}

module.exports = {
    getTraffic,
};
