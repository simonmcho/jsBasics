var str = prompt("Enter in a word to check if it is a palindrome");

function palindromeCheck(str) {
  var replaceNAC = str.replace(/[\W_]/g, "").toLowerCase();
  var reversal = replaceNAC.split("").reverse().join("");
  if (reversal == replaceNAC) {
    alert("true");
    alert(reversal);
  }
  else {
    alert("false");
    alert(reversal);
  };

}

palindromeCheck(str);
