// My thoughts on my solution: This function has a time complexity of O(n^3) and that's not the ideal way to do it but was the only way i managed to do
const reverseString = (str) => {
  if (str.length === 1 || str.length === 0) {
    return str;
  }
   return str[str.length - 1] + reverseString(str.slice(0,-1));
}

reverseString("Merkle");
