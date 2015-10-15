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
function toArray (src) {
  if (Array.isArray(src)) return src
  else if (typeof src === 'string') return src.split(/\s+/)
  else return null
}
function intervals (src) {
  var arr = toArray(src)
  if (!arr || !arr.length) return arr

  return arr.map(parse).map(octavize).map(normalize).sort(comparator)
}
function mapValues (fn, hash) {
  return Object.keys(hash).reduce(function (ret, key) {
    ret[key] = fn(hash[key])
    return ret
  }, {})
}

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
  var ivls = intervals(src)
  return ivls ? ivls.map(transpose(tonic)) : null
}

/**
 * Create a chord dictionary
 *
 * @param {Hash} chordNames - a hash that maps names to intervals (or notes)
 * @param {Hash} aliases - (Optional) a hash that maps names to names or null
 * @return {Function} a function `chord(name, tonic)`
 */
function dictionary (dict, aliases) {
  var idict = mapValues(intervals, dict)
  aliases = aliases || []
  return function (name, tonic) {
    var intervals = idict[name] || idict[aliases[name]]
    return intervals ? chord(intervals, tonic) : null
  }
}

var lib = curry(chord)
lib.dictionary = dictionary

module.exports = lib
