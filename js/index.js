console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Víctor";
console.log("The driver's name is " + hacker1);
let hacker2 = "Laura";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

const firstPossibility = hacker1Length === hacker2Length;
const secondPossibility = hacker1Length > hacker2Length;
const thirdPossibility = hacker1Length < hacker2Length;

if (firstPossibility) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} = ${hacker2Length}  characters!`);   
} else if (secondPossibility) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (thirdPossibility) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
}