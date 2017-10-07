/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

var test = require('tape');

function diff(arr1, arr2) {
  var result = [];

  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }

  for (var j in arr2) {
    if (arr1.indexOf(arr2[j]) === -1){
      result.push(arr2[j]);
    }
  }

  return result;
}


// #########
// # TESTS #
// #########

var array1 = [1, 2, 3]
var array2 = [4, 5, 1]
var array3 = [1, 2, 3]
var array4 = [1, 2, 4]

test('returns an array of unique items when unique items are present', function(assert) {
  assert.same(diff(array1, array2), [2, 3, 4, 5])
  assert.same(diff(array3, array4), [3, 4])

  assert.end();
})

test('returns an empty array when no difference found', function(assert) {
  assert.same(diff(array1, array3), [])

  assert.end();
})
