function titleCase(str) {
  var retVal = str.split(" ");
  var retArray = [];
  
  for (var i = 0; i < retVal.length; i++) {
    retVal[i] = retVal[i].charAt(0).toUpperCase() + retVal[i].substr(1).toLowerCase();
  }
  retVal = retVal.join(" ");
  return retVal;
}

titleCase(prompt("Enter in something"));
