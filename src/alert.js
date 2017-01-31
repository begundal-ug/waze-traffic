function createAlert(alert) {
    return {
        country: alert.country,
        numOfThumbsUp: alert.numOfThumbsUp,
        type: alert.type,
        subType: alert.subType,
        placeNearby: alert.placeNearby,
        latitude: alert.latitude,
        longitude: alert.longitude,
    };
}

module.exports = createAlert;
