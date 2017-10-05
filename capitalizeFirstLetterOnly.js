//Return the provided string with the first letter of each word
//capitalized.  Make sure the rest of the word is in lower case.

function titleCase(str) {
  var firstLetter
  var restOfWord

  return str
    .split(" ")
    .map(function(word) {
      firstLetter = word.charAt(0)
      restOfWord = word.slice(1)

      return firstLetter.toUpperCase() + restOfWord
    })
    .join(" ")
}

titleCase("I'm a little tea pot")
