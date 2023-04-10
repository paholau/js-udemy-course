// mine
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random(); 
const arrayNumbers = [5,2,12,13,06,1,33,54,7,4,2,22];

console.log('randomNumber ' + randomNumber);
console.log('anotherRandomNumber ' + anotherRandomNumber);


if(randomNumber > 0.7) {
    alert("Is greater than 0.7");
}

if(
    (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
    (randomNumber < 0.2 || anotherRandomNumber < 0.2)
) {
    alert("Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.");
}


for (const num of arrayNumbers) {
    console.log(num);
}


for (let i = arrayNumbers.length; i > 0; i--) {
    console.log(arrayNumbers[i-1]);
}


// instructor
