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

module.exports = {
  intervals: intervals,
  mapValues: mapValues
}
