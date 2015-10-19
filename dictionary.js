'use strict'

var chord = require('./chord')
var intervals = require('./intervals')

function mapValues (fn, hash) {
  return Object.keys(hash).reduce(function (ret, key) {
    ret[key] = fn(hash[key])
    return ret
  }, {})
}

/**
 * Create a chord dictionary
 *
 * @param {Hash} chordNames - a hash that maps names to intervals (or notes)
 * @param {Hash} aliases - (Optional) a hash that maps names to names or null
 * @return {Function} a function `chord(name, tonic)`
 *
 * @example
 * var dictionary = require('music-chord/dictionary')
 * chords = dictionary({M: 'C E G', m: 'C Eb G'})
 * chords('m', 'F') // => ['F', 'Ab', 'C']
 * chords('M', 'A4') // => ['A4', 'C#5', 'E5']
 */
function dictionary (dict, aliases) {
  var idict = mapValues(intervals, dict)
  aliases = aliases || []
  return function (name, tonic) {
    var intervals = idict[name] || idict[aliases[name]]
    return intervals ? chord(intervals, tonic) : null
  }
}

module.exports = dictionary
