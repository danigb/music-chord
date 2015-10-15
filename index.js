'use strict'

var curry = require('curry')
var transpose = require('pitch-transpose')
var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

var isArray = Array.isArray
function parse (i) { return isArray(i) ? i : (asPitch.parse(i) || asInterval.parse(i)) }
function normalize (i, ndx, array) { return op.subtract(array[0], i) }
function octavize (i) { return i[2] === null ? [i[0], i[1], 0] : i }
function semitones (i) { return i[0] + i[1] + 12 * i[2] }
function comparator (a, b) { return semitones(a) - semitones(b) }

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
 * @param {String} tonic - the tonic of the chord
 * @return {Array} the chord notes
 *
 * @example
 * chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
 * var maj79 = chord('C E G B D')
 * maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']
 */
function chord (src, tonic) {
  var array
  if (isArray(src)) array = src
  else if (typeof src === 'string') array = src.split(/\s+/)
  else return null
  if (array.length === 0) return []

  return array.map(parse).map(octavize).map(normalize).sort(comparator).map(transpose(tonic))
}

var lib = curry(chord)

module.exports = lib
