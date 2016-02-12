//Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeat(str, num) {
  if (num >= 0) {
    var stringToReturn = str.repeat(num);
    return stringToReturn;
  } else {
    var emptyString = "";
    return emptyString;
  }
}

repeat("*", 3);
