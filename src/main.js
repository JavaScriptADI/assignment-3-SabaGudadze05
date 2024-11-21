// write your code in this directory

console.log("1.");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log("2.");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("3.");
let sum = 0; /*Initialize variable "sum". Store 0 into it.  */

console.log("4.");
for (let i = 1; i <= 50; i++) {
  /*Starting a for loop. At first, i = 1 and will get higher while for ends one loop. It will run until i reaches 50 */
  sum += i; /* Will be added value of i to sum */
}
console.log(sum); /*This is output of SUM after for loop */

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
// There will be 5 iterations. First time i = 0, i can  become 9. The step is +2, so There is 10 number, from 0 through, so 10 divideb by 2(step) is 5

console.log("5.");
// 5.The break statment exit loop(for,while, do-while) immediatell. It stops execution while break happens. Eaxmple here:
let fifthChallenge = 5;

for (let i = 0; i < 55; i++) {
  console.log(i);
  if (i === 5) {
    console.log(
      `Break here. Because i(${i}) = fifthChallenge(${fifthChallenge}) `
    );
    break;
  }
}

console.log("6.");
// 6.Continue skips current iteration in loop. Here is example :
let sixthChallenge = 5;

for (let i = 0; i < 25; i++) {
  console.log(i);
  if (i === sixthChallenge) {
    console.log(
      `Skip here. Because i(${i}) = sixthChallenge(${sixthChallenge})`
    );
  }
}
console.log("7.");
let randomNumber = 0;
while (randomNumber !== 27) {
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
}

console.log("8.");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("9.");

for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 100));
}

console.log("10.");

// first method
let sumOfEvenNumbers = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    sumOfEvenNumbers += i;
  }
}
console.log(sumOfEvenNumbers);

// second method
let sumOfEvenNumbersSecond = 0;

for (let i = 2; i <= 1000; i += 2) {
  sumOfEvenNumbersSecond += i;
}
console.log(sumOfEvenNumbersSecond);

console.log("11.");
let sumOfNumbersEleven = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumOfNumbersEleven += i;
  }
}
console.log(sumOfNumbersEleven);

console.log("12.");
let sumOfNumbersTwelve = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sumOfNumbersTwelve += i;
  }
}
console.log(sumOfNumbersTwelve);

console.log("12.");

let forASCII = 33;
let randomIndex = 0;
pasword = "";
for (let i = 0; i < 16; i++) {
  randomIndex = Math.floor(Math.random() * 94);
  forASCII += randomIndex;
  pasword += String.fromCharCode(forASCII);
  forASCII = 33;
}
console.log(`Here is your strong pasword: ${pasword}`);
// ფუნქცია აღარ ავაწყე სადაც მომხარებელი თვითნ მიუთითებდა პაროლის სიგრძეს, რადგან ჯერ არ გვაქვს გავლილი <3

console.log("13.");
let str = "";
for (let i = 0; i < 10; i++) {
  str += Math.random() > 0.5 ? " " : "?";
}
console.log(str);

console.log("14.");
let indexOfSymbol;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "?") {
    indexOfSymbol = i;
    console.log(`OH. Find it, Here is position: ${indexOfSymbol}`);
  }
}

console.log("15.");

const sizeOfWalls = 10;
let walls = "";
mysteryBox = false;

for (let i = 0; i < sizeOfWalls; i++) {
  for (let j = 0; j < sizeOfWalls; j++) {
    if (i === 0 || i === sizeOfWalls - 1) {
      walls += "🧱";
    } else if (j === 0 || j === sizeOfWalls - 1) {
      walls += "🧱";
    } else {
      if (mysteryBox === false && Math.random() < 0.1) {
        walls += "🗝️";
        mysteryBox = true;
      } else {
        walls += "⬜";
      }
    }
  }
  walls += "\n";
}
console.log(walls);
