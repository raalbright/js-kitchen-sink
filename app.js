let myName = 'Ray';
const numberOfUSStates = 50;
let fivePlusFour = 5 + 4;

if (myName.startsWith('L')) {
    console.log('Back of the line!');
} else {
    console.log('Next');
}

function sayHello () {
    console.log('Hello World!');
}

sayHello();

function checkAge (name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", " + "you aren't old enough to view this page!");
    }
}


checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

const vegetables = ['lettuce', 'corn', 'carrots'];

for (vegetable of vegetables) {
    console.log(vegetable);
}

const people = [ 
    { name: 'A', age: 20 },
    { name: 'B', age: 21 },
    { name: 'C', age: 19 },
    { name: 'D', age: 24 },
    { name: 'E', age: 22 },
 ];

 for (person of people) {
     checkAge(person.name, person.age);
 }

 function getLength (word) {
     return word.length;
 }

 const wordLength = getLength('Hello World');

 if (wordLength % 2 === 0) {
     console.log('The world is nice and even!');
 } else {
     console.log('The world is an odd place!');
 }