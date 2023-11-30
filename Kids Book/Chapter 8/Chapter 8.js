// Creating a Simple Function

// let ourFirstFunction = function () {
//     console.log("Hello world!");
//    };

// // Calling a Function

// ourFirstFunction();

//Passing Arguments into Functions

// let sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
//    };

// sayHelloTo("Anele");

//Printing Cat Faces

// let drawCats = function (howManyTimes) {
//     for (i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//     }
//    };

//    drawCats(20);

//Passing Multiple Arguments to a Function

// let printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatToDraw);
//     }
//    };

//    printMultipleTimes(5,"xx");

//Returning Values from Functions

// let double = function (number) {
//      return number * 2;
//     };

// // console.log(double(3));

// // //Using Function calls as values

// console.log(double(5) + double(6));
// console.log(double(double(3)));

//Using Functions to simplify code

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

//    let randomWords = ["Planet", "Worm", "Flower", "Computer"];

//    console.log(pickRandomWord(randomWords));

//Insult Generator

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// //Join all the random strings into a sentence:

// let randomString = "Your " + pickRandomWord(randomBodyParts) +
//     " is like a " + pickRandomWord(randomAdjectives) +
//     " " + pickRandomWord(randomWords) + "!!!";


// console.log(randomString);

//Insult Generator 2

// generateRandomInsult = function () {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//     // Join all the random strings into a sentence:

//     let randomString = "Your " + pickRandomWord(randomBodyParts) +
//     " is like a " + pickRandomWord(randomAdjectives) +
//     " " + pickRandomWord(randomWords) + "!!!";

//    return randomString;
//    };

//    console.log(generateRandomInsult());
//    console.log(generateRandomInsult());
//    console.log(generateRandomInsult());

//Leaving a Function early with return

// let fifthLetter = function(name) {
// if (name.length < 5){
//     return;
// }
// return "The fifth letter of your name is " + name[4] + ".";
// }

// console.log(fifthLetter("Nick"));

//Using return multiple times instead of if..else statements

// let medalForScore = function (score) {
//     if (score < 3) {
//    return "Bronze";
//     }
//    if (score < 7) {
//     return "Silver";
//     }
//    return "Gold";
//    };

//    console.log(medalForScore(2));

//Shorthand creation of functions

// function medalForScore(score){
//     if (score < 3) {
//    return "Bronze";
//     }
//    if (score < 7) {
//     return "Silver";
//     }
//    return "Gold";
//    };

//    console.log(medalForScore(2));

//Programming Challenges

//#1 Doing arithmetic with functions

// let add = function(num1,num2){

//     return num1 + num2;
// }

// let multiply = function(num1, num2){
//     return num1 * num2;
// }

// console.log(add(multiply(36325,9824),777));

//#2 Are the arrays the same

// let areArraysSame = function (array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }

//     for (i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areArraysSame([1, 2, 3], [1,2,3]));

//#3 Hangman using functions

