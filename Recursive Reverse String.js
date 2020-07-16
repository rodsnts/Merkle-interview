const reverseString = (str) => {
  if (str.length === 1 || str.length === 0) {
    return str;
  }
   return str[str.length - 1] + reverseString(str.slice(0,-1));
}

reverseString("");
