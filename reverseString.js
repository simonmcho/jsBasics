function reverseString(str) {
  var array1 = [];
  var split = str.split("").reverse().join("");
  return split;
}

var entry = prompt("Enter a word you want to reverse");
var result = reverseString(entry);  
alert(result);
