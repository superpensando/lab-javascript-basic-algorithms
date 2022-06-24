console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Joe";
console.log("The driver's name is " + hacker1);
let hacker2 = "Scarlett";
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

// Iteration 3: Loops
let hacker1Loop="";
for (let i=0; i < hacker1Length; i++ ){
    hacker1Loop += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Loop); 

let hacker2Loop="";
for (let i=(hacker2Length - 1); i >= 0 ; i-- ){
    hacker2Loop += hacker2[i] + " ";
}
console.log(hacker2Loop);

switch (hacker1Loop.localeCompare(hacker2Loop)) {
    case 0: 
        console.log("What?! You both have the same name?"); 
        break;
    case -1:
        console.log("The driver's name goes first");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely");
        break;
}
