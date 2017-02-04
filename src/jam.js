const createPoint = require('./point');

function createJam(jam) {
    return {
        country: jam.country || '',
        city: jam.city || '',
        severity: jam.severity || '',
        delay: jam.delay || 0,
        speed: jam.speed || 0,
        type: jam.type || '',
        line: jam.line.length ? jam.line.map(coord => createPoint(coord)) : [],
        street: jam.street || '',
        roadType: jam.roadType || 0,
    }
};

module.exports = createJam;
