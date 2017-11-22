/*
Compare two arrays and return a new array with any items only found in
one of the two given arrays, but not both.  In other words, return the
symmetric difference of the two arrays.

NOTE:  Array.prototype.indexOf might be an interator function.  If so,
       we'd be experiencing O(n)^2 if we try to filter through 2
       arrays with completely unique elements
*/

var test = require('tape');

function diff(arr1, arr2) {
  var uniqueItemMap = arr1.concat(arr2)
    .reduce(function(store, item) {
      store[item] = (store[item] === undefined) ? true : false

      return store
    }, {})

  return Object.keys(uniqueItemMap)
    .reduce(function(store, item) {
      if(uniqueItemMap[item]){
        store.push(parseInt(item))

        return store
      }

      return store
    }, [])
}

/*
  #########
  # TESTS #
  #########
*/

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
