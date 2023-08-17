const favMovie = "avatar";

let guess = prompt("enter the favMovie");

while ((guess != favMovie) && (guess != "quit")) {
    console.log("wrong guess");
    guess = prompt("guess again");
}
if (guess === favMovie) {
    console.log("correct guess");
} else {
    console.log("you quit");
}