'use strict'

var gamut = require('music-gamut')

/**
 * Get intervals of a given chord
 *
 * @name intervals
 */
module.exports = gamut.fn([ gamut.asIntervals, gamut.sort, gamut.harmonics ])
