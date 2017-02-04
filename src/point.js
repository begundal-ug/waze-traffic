/**
 * Point
 * 
 * Point is an object which defines a point in a map.
 * expressed in this format:
 * {
 *     x: longitude
 *     y: latitude
 * }
 */

function createPoint(coord) {
    return {
        x: coord.x,
        y: coord.y,
    };
}

module.exports = createPoint;
