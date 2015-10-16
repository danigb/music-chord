var vows = require('vows')
var assert = require('assert')
var fromName = require('../fromName')

vows.describe('fromName').addBatch({
  'from type and tonic': function () {
    assert.deepEqual(fromName('M', 'Eb'), [ 'Eb', 'G', 'Bb' ])
    assert.deepEqual(fromName('7b9', 'C2'), ['C2', 'E2', 'G2', 'Bb2', 'Db3'])
  },
  'from name': function () {
    assert.deepEqual(fromName('C7b9'), ['C', 'E', 'G', 'Bb', 'Db'])
    assert.equal(fromName('c13#9').join(' '), 'C E G Bb D# A')
    assert.equal(fromName('c3 13#9').join(' '), 'C3 E3 G3 Bb3 D#4 A4')
  }
}).export(module)
