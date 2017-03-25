/**
 * Alert
 *
 * Alert is a representation of waze's alert data,
 * and it's self-documented.
 */

const createPoint = require('./point')

function createAlert (alert) {
  return {
    ts: alert.pubMillis || (new Date()).getTime(),
    country: alert.country || '',
    city: alert.city || '',
    street: alert.street || '',
    location: Object.keys(alert.location).length ? createPoint(alert.location) : {},
    type: alert.type || '',
    subType: alert.subtype || '',
    speed: alert.speed || 0,
    mood: alert.reportMood || 0,
    reportRating: alert.reportRating || 0,
    confidence: alert.confidence || 0,
    reliability: alert.reliability || 0,
    roadType: alert.roadType || 0
  }
}

module.exports = createAlert
