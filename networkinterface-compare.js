'use strict'

var regex = /(\d+)/

/**
 * @param {String} a networkinterface name
 * @param {String} b networkinterface name
 * @returns {Number} ordering
 */
function networkinterfaceCompare(a, b) {
  var less = -1
  var greater = 1
  var equal = 0

  var aStrings = a.split(regex)
  var bStrings = b.split(regex)

  while (aStrings.length && bStrings.length) {
    var aString = aStrings.shift()
    var bString = bStrings.shift()

    var aNum = parseInt(aString, 10)
    var bNum = parseInt(bString, 10)

    // do a numeric comparison if both values are numbers
    if (!isNaN(aNum) && !isNaN(bNum)) {
      if (aNum < bNum) {
        return less
      } else if (aNum > bNum) {
        return greater
      }
    // otherwise fallback to an alphabetic comparison
    } else {
      if (aString < bString) {
        return less
      } else if (aString > bString) {
        return greater
      }
    }
  }

  return equal
}

module.exports = networkinterfaceCompare

