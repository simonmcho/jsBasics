function end(str, target) {
  strToTest = str.substr((str.length - target.length), str.length);
  if (strToTest === target) {
    return true;
  }
  else {
    return false;
  }
}

end("he has a name", "name");
