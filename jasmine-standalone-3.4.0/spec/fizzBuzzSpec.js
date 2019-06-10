describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return \"fizz\" when passed 3", function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
  });

});




// it 'returns "buzz" when passed 5' do
//     expect(fizzbuzz(5)).to eq 'buzz'
// end
//
// it 'expects "fizz" is divisible by 3' do
//     expect(fizzbuzz(6)).to eq 'fizz'
// end
//
// it 'expects "buzz" is divisible by 5' do
//     expect(fizzbuzz(10)).to eq 'buzz'
// end
//
// it 'expects "fizzbuzz" is divisble by 3 and 5' do
//       expect(fizzbuzz(15)).to eq 'fizzbuzz'
// end
