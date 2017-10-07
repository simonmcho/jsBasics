/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

var test = require('tape');

function diff(arr1, arr2) {
  var uniqueItemsStore = {
  }

  var uniqueItemMap = arr1.concat(arr2)
    .reduce(function(store, item) {
      if(store[item] === undefined){
        store[item] = true
      } else {
        store[item] = false
      }

      return store
    }, uniqueItemsStore)

  return  Object.keys(uniqueItemMap)
    .reduce(function(uniqueItemsResult, item) {
      if(uniqueItemMap[item]){
        uniqueItemsResult.push(parseInt(item))

        return uniqueItemsResult
      }

      return uniqueItemsResult
    }, [])
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
