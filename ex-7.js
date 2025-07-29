function isPalindrome(string) {
  const result = string.split('').reverse().join('');
  if (result.trim() === string.trim()){
    return true
  } else {
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false