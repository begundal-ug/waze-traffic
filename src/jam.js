function createJam(jam) {
    return {
        severity: jam.severity,
        type: jam.type,
        country: jam.country,
        end: jam.end,
        start: jam.start,
        street: jam.street,
        startLatitude: jam.startLatitude,
        startLongitude: jam.startLongitude,
        endLatitude: jam.endLatitude,
        endLongitude: jam.endLongitude,
        delayInSec: jam.delayInSec,
    }
};

module.exports = createJam;
