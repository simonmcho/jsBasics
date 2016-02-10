var word = prompt("Type in a sentence and find out how many characters the longest word has");
function findLongestWord(word) {
  var split = word.split(" ");
  var longestWord = 0;
  for (var i = 0; i < split.length; i++) {
    if (split[i].length > longestWord ) {
      longestWord = split[i].length;
    }
  }
  alert(longestWord);
}

findLongestWord(word);

