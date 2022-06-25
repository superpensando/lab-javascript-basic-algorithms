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

// Bonus Time!
// Bonus1
const loremParagraph= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales mollis nunc. Suspendisse et erat erat. Curabitur quis consectetur justo. Etiam elementum rhoncus posuere. Donec non egestas metus. Cras gravida est velit, vitae sagittis sem commodo vitae. Sed at leo ac dolor laoreet semper id et elit. Nullam condimentum at dolor et euismod. Nulla hendrerit vehicula sollicitudin. Maecenas dapibus ante eros, a vestibulum nisl sodales eu. Fusce nec nunc sit amet urna ornare sagittis id ut erat. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin eget molestie nunc, in blandit eros. Mauris commodo blandit dui et posuere. Mauris nisi libero, luctus nec suscipit aliquam, rhoncus vitae mauris. Phasellus convallis nec est quis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dictum tellus id arcu aliquam cursus at in ante. 
Integer in lectus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus in mi quis tristique. Vestibulum non molestie leo. Quisque ac nisl eu mauris dignissim finibus at condimentum elit. Mauris tempor ligula id imperdiet viverra. Etiam in lacus et mi consectetur pharetra. Suspendisse congue purus quis eros ultricies, ut pellentesque nibh interdum. Ut mi eros, vulputate at augue quis, suscipit euismod lorem. Suspendisse potenti.`;

console.log(`The number of characters in loremParagraph is ${loremParagraph.length}`);

const loremParagraphLength=loremParagraph.split(" ").length;
console.log(`The number of words in loremParagraph is ${loremParagraphLength}`);

//way 1
const loremParagraphEtLength=loremParagraph.split(" et ").length - 1;
console.log(`the number of times the Latin word " et " appears in loremParagraph is ${loremParagraphEtLength}`);

//way 2
let count = 0 ;
for (let i = 0; i < loremParagraph.length; i++) { 
    if ((loremParagraph[i]=== " ") && (loremParagraph[i+1]=== "e") && (loremParagraph[i+2]=== "t") && (loremParagraph[i+3]=== " ")) {
          count = count + 1;       
    }    
}
console.log(`the number of times the Latin word " et " appears in loremParagraph is ${count}`);
  

// Bonus2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseToCheckReverse="";
for (let i=(phraseToCheck.length - 1); i >= 0 ; i-- ){
    phraseToCheckReverse += phraseToCheck[i];
}
console.log(phraseToCheckReverse);
 
if ( phraseToCheck.localeCompare(phraseToCheckReverse, 'en', {sensitivity:'base', ignorePunctuation: true}) === 0 ){
    console.log(`This phrase is a Palindrome!`);
} else {
    console.log(`This phrase isn't a Palindrome, try again`);
}