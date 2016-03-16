//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var firstEntry = arr[0].toLowerCase().split("");
  var secondEntry = arr[1].toLowerCase().split("");
  var searchResult = 0;
  
  for (var i in secondEntry) {
    if (firstEntry.indexOf(secondEntry[i]) > -1) {
        searchResult += 0;
        }
        else {
        searchResult += 1;
        }
  }
    if (searchResult === 0) {
      return true;
    }
    else {
      return false;
    }
}

mutation(["Alien", "liNE"]);

/*Return a MultiDimensional Array so that the first Array includes all the characters that are included in both indices of mutation() 
And the second array includes all the characters that are only in the second index of mutation()
*/

function mutation(arr) {
  var firstEntry = arr[0].toLowerCase();
  var secondEntry = arr[1].toLowerCase();
  var number = 0;
  var included = [];
  var excluded = [];
  var finalArray = [];
  
  for (var i in secondEntry) {
    if (firstEntry.indexOf(secondEntry[i]) > -1) {
      included.push(secondEntry[i]);
    }
    else {
      excluded.push(secondEntry[i]);
    }
  }
  
  finalArray.push(included, excluded);
  
  return finalArray;
}

mutation(["hello", "neo"]);
