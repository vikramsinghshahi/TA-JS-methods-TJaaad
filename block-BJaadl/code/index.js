let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array){
   return array.sort((a,b) => a.length - b.length).pop()
}


console.log(findLongestWord([...words]));



// - Convert the above array "words" into an array of length of word instead of word.


function cb(word){
   return (word.length)
}

let wordsLength = words.map(cb);

console.log(wordsLength);

// - Create a new array that only contains word with atleast one vowel.

function checkVowel(word){
 return word.toLowerCase().includes("a")||
 word.toLowerCase().includes("e")||
 word.toLowerCase().includes("i")||
 word.toLowerCase().includes("o")||
 word.toLowerCase().includes("u")
}



let newArray = words.filter((w) => checkVowel(w))

console.log(newArray);

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

let notStartWithVowel = words.filter((w) => !checkVowel(w[0]))

console.log(notStartWithVowel);

// - Create a new array that contianse words not ending with vowel
let notEndWithVowel = words.filter((w) => !checkVowel(w[w.length - 1]))

console.log(notEndWithVowel);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array){
  return array.reduce((acc ,cv) =>{
    acc = acc + cv
    return acc
  } , 0)
}

console.log(sumArray(numbers));



// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]


let mutipleOfThree = numbers.filter((num) => num % 3 == 0);

console.log(mutipleOfThree );


// - Create a new array that contains only even numbers


let evenNumber = numbers.filter((num) => num % 2 == 0);
console.log(evenNumber );

// - Create  a new array that contains only odd numbers.
let oddNumber = numbers.filter((num) => num % 2 !== 0);

console.log(oddNumber );

// - Create a new array that should have true for even number and false for odd numbers.
function cb(num){
  if( num %2 ===0){
    return true
  } else {
    return false
  }
}

let oddOrEven = numbers.map(cb);

console.log(oddOrEven);


// - Sort the above number in assending order.


console.log([...numbers].sort((a , b) => a-b));

// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.

console.log(numbers.reduce((acc , cv) =>{
  acc = acc + cv
  return acc
} , 0)
)


//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array){
  return (array.reduce((acc , cv)=>{
    acc = acc + cv
    return acc
  } , 0)/ array.length)
}

console.log(averageNumbers(numbers))




let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
  return (array.map((w) => w.length).reduce((acc , cv) =>{
    acc = acc + cv
     return acc}, 0)/ array.length)
  }

  console.log(averageWordLength(strings));