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
