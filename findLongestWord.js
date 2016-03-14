//Return the length of the longest word in the provided sentence.

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

function findLongestWord(str) {
  str = str.split(" ");
  var length = 0;
  for (var i in str) {
    if (str[i].length > length) {
      length = str[i].length;
    }
  }
  return length;
}

findLongestWord(word);

