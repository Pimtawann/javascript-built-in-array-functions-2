function isPalindrome(string) {
  const trimmed = string.trim();
  const reversed = trimmed.split('').reverse().join('');
  return trimmed === reversed;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false