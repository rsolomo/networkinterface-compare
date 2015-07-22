'use strict'

var assert = require('assert')
var format = require('util').format
var compare = require('../networkinterface-compare.js')

describe('compare', function() {
  var name1 = 'Ethernet4'
  var name2 = 'Ethernet5/2'
  var name3 = 'Ethernet5/11'
  var less = -1
  var greater = 1
  var equal = 0

  it(format('%s < %s', name1, name2), function() {
    var actual = compare(name1, name2)
    assert.equal(actual, less)
  })
  it(format('%s < %s', name1, name3), function() {
    var actual = compare(name1, name3)
    assert.equal(actual, less)
  })
  it(format('%s > %s', name2, name1), function() {
    var actual = compare(name2, name1)
    assert.equal(actual, greater)
  })
  it(format('%s < %s', name2, name3), function() {
    var actual = compare(name2, name3)
    assert.equal(actual, less)
  })
  it(format('%s < %s', name3, name1), function() {
    var actual = compare(name3, name1)
    assert.equal(actual, greater)
  })
  it(format('%s < %s', name3, name2), function() {
    var actual = compare(name3, name2)
    assert.equal(actual, greater)
  })
  it(format('%s = %s', name1, name1), function() {
    var actual = compare(name1, name1)
    assert.equal(actual, equal)
  })
  it(format('%s = %s', name2, name2), function() {
    var actual = compare(name2, name2)
    assert.equal(actual, equal)
  })
  it(format('%s = %s', name3, name3), function() {
    var actual = compare(name3, name3)
    assert.equal(actual, equal)
  })
  it('a list of network interface names items', function() {
    var names = [
      'Ethernet1/1',
      'Ethernet1/10',
      'Ethernet1/19',
      'Ethernet1/2'
    ]
    names.sort(compare)
    assert.equal(names[0], 'Ethernet1/1')
    assert.equal(names[1], 'Ethernet1/2')
    assert.equal(names[2], 'Ethernet1/10')
    assert.equal(names[3], 'Ethernet1/19')
  })
})

