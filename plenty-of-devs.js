function ageCalculator(name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Nik",1994,2020));