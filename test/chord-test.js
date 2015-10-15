var vows = require('vows')
var assert = require('assert')
var chord = require('../')

vows.describe('chord').addBatch({
  'build chord from intervals': function () {
    assert.deepEqual(chord('1 3 5 9', 'C4'), ['C4', 'E4', 'G4', 'D5'])
    assert.deepEqual(chord('1 3 5 9', 'C'), ['C', 'E', 'G', 'D'])
  },
  'build chord from notes': function () {
    assert.deepEqual(chord('C E G B D', 'C'), [ 'C', 'D', 'E', 'G', 'B' ])
    assert.deepEqual(chord('C E G B D', 'G4'), [ 'G4', 'A4', 'B4', 'D5', 'F#5' ])
    assert.deepEqual(chord('C E G B D1', 'G4'), [ 'G4', 'B4', 'D5', 'F#5', 'A5' ])
    assert.deepEqual(chord('C2 G3 B2', 'A4'), ['A4', 'G#5', 'E6'])
  },
  'get intervals': function () {
    assert.equal(chord('C E F B', null).join(' '), '1P 3M 4P 7M')
  },
  'partially applied': function () {
    var maj7drop2 = chord('C2 E2 G1 B2')
    assert.deepEqual(maj7drop2('C4'), [ 'G3', 'C4', 'E4', 'B4' ])
  }
}).export(module)
