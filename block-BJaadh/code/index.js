// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called" , "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(strings.join(" "));

// - Remove the first word in the array (strings)

strings.unshift();

console.log(strings);




// - Find all the words that contain 'is' use string method 'includes'


let newWords = strings.filter((str) =>  str.includes("is") );

console.log(newWords);

// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let multipleOfThree = (numbers.every((num) => num % 3 ===0));

console.log(multipleOfThree);

// -  Sort Array from smallest to largest

console.log([...numbers].sort((a,b) => a -b ));


// - Remove the last word in strings

console.log(strings.pop());

// - Find largest number in numbers

let largestNumber = [...numbers].sort((a, b) => a - b).pop();

console.log(largestNumber);

// - Find longest string in strings

let longestString = [...numbers].sort((a, b) => a.length - b.length).pop();

console.log(longestString);

// - Find all the even numbers


let evenNumber = numbers.filter((num) => num % 2 ===0);

console.log(evenNumber);


// - Find all the odd numbers


let oddNumber = numbers.filter((num) => num % 2 !==0);

console.log(oddNumber);


// - Place a new word at the start of the array use (unshift)

strings.unshift("Hello new");

console.log(strings);


// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3, 7))

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(3, 5))

// - Replace 12 & 18 with 1221 and 1881


let index = numbers.indexOf(12);
let indexNew = numbers.indexOf(18);


numbers[index] = 1221;
numbers[indexNew] = 1881;


console.log(numbers);




// - Replace words in strings array with the length of the word

let stringslength = strings.map((string) => string.length);


console.log(stringslength);
// - Find the sum of the length of words using above question

stringslength.reduce((acc ,cv)=> {
   acc = acc + cv;
  return acc
},0)


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let filterCustomers = customers.filter((customer) => 

customer.firstname.startsWith("J")
);

// - Create new array with only first name

let firstNameCustomer = customers.map((customer) =>
   customer.firstname
);

// - Create new array with all the full names (ex: "Joe Blogs")


let fullNameCustomer = customers.map((customer) =>
   `${customer.firstname} ${customer.lastname}`
);
// - Sort the array created above alphabetically

[...fullNameCustomer].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

let vowelCustomer = customers.filter((customer)=> {
  if (
    customer.firstname.toLowerCase().includes("a")||
  customer.firstname.toLowerCase().includes("e")||
  customer.firstname.toLowerCase().includes("i")||
  customer.firstname.toLowerCase().includes("o")||
  customer.firstname.toLowerCase().includes("u")
  
  ){return true;
  } else{
    return false;
  }
}

)
  