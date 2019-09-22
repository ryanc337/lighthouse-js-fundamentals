const howManyHundreds = function (num) {
  return ((num - (num % 100)) / 100)
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(9999), "=?", 99);
console.log(howManyHundreds(666), "=?", 6);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);