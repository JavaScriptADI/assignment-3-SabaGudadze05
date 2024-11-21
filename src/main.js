console.log("1.");
for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("2.");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("3.");
let sum = 0;

console.log("4.");
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

console.log("5.");
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

let sumOfEvenNumbers = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumOfEvenNumbers += i;
    }
}
console.log(sumOfEvenNumbers);

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
let pasword = "";
for (let i = 0; i < 16; i++) {
    randomIndex = Math.floor(Math.random() * 94);
    forASCII += randomIndex;
    pasword += String.fromCharCode(forASCII);
    forASCII = 33;
}
console.log(`Here is your strong pasword: ${pasword}`);

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
let mysteryBox = false;

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
