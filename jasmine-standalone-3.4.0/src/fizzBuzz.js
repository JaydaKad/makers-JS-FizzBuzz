
function FizzBuzz() {
}
FizzBuzz.prototype.play = function(number) {
  if(number % 15 == 0){
    return 'fizzbuzz'
  } else if(number % 3 == 0) {
    return 'fizz'
  } else {
      return 'buzz'
  }
};

// def fizzbuzz(number)
//   return 'fizz' if number % 3 == 0 && number % 5 != 0
//   return 'buzz' if number % 5 == 0 && number % 3 != 0
//   return 'fizzbuzz' if number % 3 == 0 && number % 5 == 0
// end
