function reverseNumber(x) {
 var rev = 0;
 while (x !== 0) {
  rev = rev * 10;
  rev = rev + x % 10;
  x = x - x % 10;
  x = x / 10;
 }
 return rev;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
