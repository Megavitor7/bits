//1
// repeat your name 5 times using a for loop
for (let i = 0; i < 5; i++) {
    console.log("Your name");
    console.log(`This is loop iteration ${i}`);
  }
  //2
// create an array with 3 names
let names = ["John", "Jane", "Bob"];

// use a for loop to say 'hello' + the name at the current index
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`);
}
//3
// ask the user for the maximum number
let max = prompt("Enter a maximum number:");

// use a while loop to print all numbers from 0 to the maximum number
let count = 0;
while (count <= max) {
    console.log(count);
    count++;
}
//4
// ask the user for the maximum number
let max = prompt("Enter a maximum number:");

// use a for loop to print all even numbers from 0 to the maximum number
for (let i = 0; i <= max; i += 2) {
    console.log(i);
}
//4
// ask the user for the maximum number
let max = prompt("Enter a maximum number:");

// use a for loop to print all numbers from 0 to the maximum number and whether they are even or odd
for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
        console.log(`The number ${i} is even.`);
    } else {
        console.log(`The number ${i} is odd.`);
    }
}
//5
//create an empty array to hold the students
let students = [];

//ask the user to enter 5 students
let i = 0;
do {
    let student = prompt("Enter a student name:");
    students.push(student);
    i++;
} while (i < 5);

console.log(students);
//6
let class13 = ["Martin", "Maxime", "Jordano", "Yasmina", "Kawtar", "Valentin", "Oussama", "Cactus", "Fanny", "Sergen", "Karis", "Kadri", "Piere", "Zidane", "Imad", "Abdel"];
class13.forEach((name, index) => {
    if (index % 2 === 0) {
        console.log(`${name} has an even index.`);
    } else {
        console.log(`${name} has an odd index.`);
    }
});

let even = class13.filter((name, index) => index % 2 === 0);
console.log(even);
let odd = class13.filter((name, index) => index % 2 !== 0);
console.log(odd);
//7
let names = ["John", "Jane", "Bob", "Emily", "Michael", "Sarah", "David", "Jessica", "Jacob"];

// Print each element of the array
names.forEach((name) => {
    console.log(name);
});

// Print the first letter of each element of the array
names.forEach((name) => {
    console.log(name[0]);
});

// Print the second letter of each element of the array
names.forEach((name) => {
    console.log(name[1]);
});
//8
// Partie 1

let names = ["Bob", "Alice", "Charlie", "David", "Eve", "Frank", "Grace", "Harry", "Isabelle"];

// Affiche chaque élément dans un console log
names.forEach(function(name) {
    console.log(name);
});

// Affiche chaque premiere lettre de chaque élément dans un console log
names.forEach(function(name) {
    console.log(name[0]);
});

// Affiche chaque seconde lettre de chaque élément dans un console log
names.forEach(function(name) {
    console.log(name[1]);
});

// Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme
names.forEach(function(name) {
    console.log(name[1] + name);
});

// Affiche tous les prénoms dans un console log dont l'indice est pair
for (let i = 0; i < names.length; i++) {
    if (i % 2 === 0) {
        console.log(names[i]);
    }
}

// Partie 2

// Affiche tous les prénoms dont l'indice est impair en majuscule
for (let i = 0; i < names.length; i++) {
    if (i % 2 !== 0) {
        console.log(names[i].toUpperCase());
    }
}

// Affiche tous les prénoms dont l'indice est pair avec la premiere lettre en majuscule
for (let i = 0; i < names.length; i++) {
    if (i % 2 === 0) {
        console.log(names[i][0].toUpperCase() + names[i].slice(1));
    }
}

// Affiche les prénoms impair ET plus long que 4caractères
for (let i = 0; i < names.length; i++) {
    if (i % 2 !== 0 && names[i].length > 4) {
        console.log(names[i]);
    }
}

// Affiche les prénoms pair et plus long que 4caractères avec uniquement leur premiere lettre et en plus en majuscule
for (let i = 0; i < names.length; i++) {
    if (i % 2 === 0 && names[i].length > 4) {
        console.log(names[i][0].toUpperCase());
    }
}

// Affiche tous les prénoms commencant par (a,e,m,f,y,n) mais pas les autres !
let validLetters = ['a', 'e', 'm', 'f', 'y', 'n'];
names.forEach(function(name) {
    if (validLetters.indexOf(name[0]) !== -1) {
        console.log(name);
    }
});
//9
let prenoms = ["Lucas", "Julie", "Emma", "Thomas", "Paul", "Lea", "Gabriel", "Marie", "Hugo"];
for (let i = 0; i < prenoms.length; i++) {
    if (i % 2 != 0) {
      console.log(prenoms[i].toUpperCase());
    }
  }
  for (let i = 0; i < prenoms.length; i++) {
    if (i % 2 == 0) {
      let prenom = prenoms[i];
      let premiereLettre = prenom.charAt(0).toUpperCase();
      let resteDuPrenom = prenom.substring(1);
      console.log(premiereLettre + resteDuPrenom);
    }
  }
  for (let i = 0; i < prenoms.length; i++) {
    if (i % 2 != 0 && prenoms[i].length > 4) {
      console.log(prenoms[i]);
    }
  }
  for (let i = 0; i < prenoms.length; i++) {
    if (i % 2 == 0 && prenoms[i].length > 4) {
      console.log(prenoms[i].charAt(0).toUpperCase());
    }
  }
  let lettres = ["a", "e", "m", "f", "y", "n"];
  
          

