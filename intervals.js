'use strict'

var gamut = require('music-gamut')

/*
 * Get intervals of a given chord (not yet public API)
 *
 * @api private
 * @name intervals
 * @function
 * @param {String|Array} gamut - the notes or intervals
 * @return {Array<Array>} the chord intervals in ascending order
 *
 */
module.exports = function (notes) { gamut.distances(null, notes) }
