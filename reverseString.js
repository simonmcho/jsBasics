//Reverse the provided string.

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");
