let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array


let peopleName = persons.map(cb)

function cb(person){
  return person.name
}

console.log(peopleName);




// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((people) => people.grade);

console.log(peopleGrade);


// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((people) => people.sex);

console.log(peopleSex);


// Log the filtered named of people in peopleName that starts with 'J' or 'P'


peopleName =  ["John", "Sarah", "Bob", "Johnny", "Ethan", "Paula", "Donald", "Jennifer", "Courtney", "Jane", "John", "Arya"];
 
console.log(peopleName.filter((name) => name.startsWith("J")|| name.startsWith("P")));


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(peopleName.filter((name) => name.startsWith("A")|| name.startsWith("C")).length);

// Log all the filtered male ('M') in persons array

console.log( persons.filter((people) => people.sex == "M"));

// Log all the filtered female ('F') in persons array

console.log( persons.filter((people) => people.sex == "F"));



// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log( persons.filter((people) => people.sex == "F").filter((people) => people.name.startsWith("C")||people.name.startsWith("J")));



// Log all the even numbers from peopleGrade array

console.log( peopleGrade.filter((grade) => grade % 2 ===0));


// Find the first name that starts with 'J' in persons array and log the object

console.log( persons.find((person) => person.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object
console.log( persons.find((person) => person.name.startsWith("P")));


// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log( persons.find(
  (person) => person.name.startsWith("J") 

   && person.grade > 10 
    && person.sex === "F"
)
    )
;


// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((person) => person.sex === "F");

console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");

console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc , cv)=>{
  acc = acc + cv
  return acc
}, 0);

console.log(gradeTotal);

// Find the average grade

console.log(gradeTotal / peopleGrade.length);


// Find the average grade of male

let maleGrade = persons.filter((people) => people.sex =="M").map((people) => people.grade)

let maleGradeAverage = (maleGrade.reduce((acc , cv)=>{
  acc = acc + cv
  return acc
} , 0))/ maleGrade.length

console.log(maleGradeAverage);



// Find the average grade of female


let femaleGrade = persons.filter((people) => people.sex =="F").map((people) => people.grade)

let femaleGradeAverage = (maleGrade.reduce((acc , cv)=>{
  acc = acc + cv
  return acc
} , 0))/ maleGrade.length

console.log(femaleGradeAverage);



// Find the highest grade

let heighestGrade = [...peopleGrade].sort((a,b) => a-b).pop()

console.log(heighestGrade)

// Find the highest grade in male

let heighestGradeMale = [...maleGrade].sort((a, b)=> a-b).pop()

console.log(heighestGradeMale);

// Find the highest grade in female

let heighestGradeFemale = [...femaleGrade].sort((a, b)=> a-b).pop()

console.log(heighestGradeFemale);


// Find the highest grade for people whose name starts with 'J' or 'P'

let peopleNamePAndJ  = persons.filter((person) => person.name.startsWith("J") || person.name.startsWith("P"));

let peopleGradePAndJ    = peopleNamePAndJ.map((people) => people.grade)



console.log([...peopleGradePAndJ].sort((a,b) => a-b).pop());


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log([...peopleGrade].sort((a,b) => a - b));

// Sort the peopleGrade in descending order
console.log([...peopleGrade].sort((a,b) => b -a ));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

console.log([...peopleGrade].sort((a,b) => b -a ));

// Sort the array peopelName in ascending `ABCD..Za....z`


let newPeopleName = peopleName.sort();

console.log(newPeopleName)
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

console.log([...peopleName].sort());