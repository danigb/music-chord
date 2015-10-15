var vows = require('vows')
var assert = require('assert')
var dictionary = require('../dictionary')

vows.describe('dictionary').addBatch({
  'create dictonary': function () {
    var chords = dictionary({major: 'C E G'})
    assert.deepEqual(chords('major', 'Eb'), [ 'Eb', 'G', 'Bb' ])
  }
}).export(module)
