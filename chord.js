'use strict'

var curry = require('curry')
var gamut = require('music-gamut')

/**
 * Build a chord from a source and a tonic
 *
 * A source can be a list of intervals or notes. The tonic must be
 * a pitch (with or without octave)
 *
 * This function is currified, so you can partially apply the function passing
 * one parameter instead of two (see example)
 *
 * @param {Array} source - the list of intervals or notes
 * @param {String} tonic - the tonic of the chord or null to get the intervals
 * @return {Array} the chord notes (or intervals if null tonic)
 *
 * @example
 * var chord = require('music-chord')
 * chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
 * var maj79 = chord('C E G B D')
 * maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']
 */
function chord (src, tonic) {
  var intervals = gamut.sortBySize(gamut.distances(null, src))
  return tonic ? gamut.transpose(tonic, intervals) : intervals
}

module.exports = curry(chord)
