
var dictionary = require('./dictionary')
var chords = require('./dict/chords.json')
var aliases = require('./dict/aliases.json')
var dict = dictionary(chords, aliases)

var IMPLICIT = /^([a-gA-G](?:#{1,4}|b{1,4}|x{1,2}|))(.*)$/
/**
 * Build chords by name
 *
 * The same as `chord` function but using chord names instead of intervals.
 * The chord name may contain the tonic placed before the type (see example)
 *
 * @param {String} name - the chord name
 * @param {String} tonic - (Optional) the tonic
 * @return {Array} an array of notes in ascending order or null
 *
 * @example
 * fromName('C7b9') // => ['C', 'E', 'G', 'Bb', 'Db']
 */
function fromName (name, tonic) {
  var chord = dict(name, tonic)
  if (chord) return chord
  var m = IMPLICIT.exec(name)
  return m ? dict(m[2], tonic || m[1]) : null
}

module.exports = fromName
