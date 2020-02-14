function range(start, end, step){
  let arr = [];
  if ((start === false || end === false || step === false) || (start > end) || (step <= 0)) return arr;
  else {
    for (let i = start; i <= end; i += step){
      arr.push(i);
    }
    return arr;
  }
  
}

console.log(range(30,3,1));
console.log(range(3,31,2));