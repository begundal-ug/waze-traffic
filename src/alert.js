const createPoint = require('./point');

function createAlert(alert) {
    return {
        country: alert.country || '',
        city: alert.city || '',
        street: alert.street || '',
        location: Object.keys(alert.location).length ? createPoint(alert.location) : {},
        type: alert.type || '',
        subType: alert.subType || '',
    };
}

module.exports = createAlert;
