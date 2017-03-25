/**
 * Jam
 *
 * Jam is a representation of waze's traffic jam data,
 * and it's self-documented.
 *
 * The `line` part is an array of points, which marks the jammed route
 *
 * UNDOCUMENTED:
 * type
 * roadType
 */

const createPoint = require('./point')

function createJam (jam) {
  return {
    country: jam.country || '',
    city: jam.city || '',
    severity: jam.severity || 0,
    level: jam.level || 0,
    delay: jam.delay || 0,
    speed: jam.speed || 0,
    type: jam.type || '',
    line: jam.line.length ? jam.line.map(coord => createPoint(coord)) : [],
    start_street: jam.street || '',
    end_street: jam.endNode || '',
    ts: jam.pubMillis || (new Date()).getTime(),
    roadType: jam.roadType || 0
  }
};

module.exports = createJam
