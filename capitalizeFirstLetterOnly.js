//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  var words = str.split(" ");
  for (var i in words) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }
  words = words.join(" ");
  return words;
}

titleCase("I'm a little tea pot");
