function sumofdigits(str) {
  let sum = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     sum = sum + Number(str[i]);
  //   }
  //   return sum;
  return str.split("").reduce((sum, c) => {
    return !isNaN(c) ? sum + Number(c) : sum;
  }, 0);
}

console.log(sumofdigits("1234"));
console.log(sumofdigits("123"));
