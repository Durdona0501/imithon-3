// exercise-1
function reverseInput(input) {
  let process = input.split(" ").reverse().join(" ");
  
  console.log(process);
}


// exercise-2
function squareNumbers(numbers) {
  let numbersArray = [];

  for(let i = 0; i < numbers.length; i++) {
      if (Math.sqrt(numbers[i]) % 1 === 0) {
          numbersArray.push(Math.sqrt(numbers[i]));
      }
      else {
          numbersArray.push(numbers[i] * numbers[i]);
      }
  }
      console.log(numbersArray);
}


// exercise-3
function doubleLetters(string) {
      let word = string.split("");
      for(let letter = 0; letter < word.length; letter+=2) {
        word.splice(letter, 0, word[letter]);
      }
  
      let join = word.join("");
      console.log(join); 
    }

    
