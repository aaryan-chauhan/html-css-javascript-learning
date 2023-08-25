const range = prompt("enter your range");

let random = Math.floor(Math.random() * range) + 1;
console.log(random);
let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("you quit");
        break;
    }
    console.log("the range of numbers is 1-", range); 
    if (guess == random) {
        console.log("your guess is correct!! the random number was", random);
        break;
    } else if (guess > random) {
        guess = prompt("your guess is larger than the number associated");
    } else {
        guess = prompt("your guess is smaller than the number associated");
    }
}