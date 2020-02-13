function howManyHundreds(num){
  var hundreds = (num - (num % 100)) / 100;
  return hundreds;
}

console.log(howManyHundreds(219));
console.log(howManyHundreds(55));
console.log(howManyHundreds(2300));