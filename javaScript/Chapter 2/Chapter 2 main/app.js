// traffic light system

let color = "blue";

if (color === "red") {
    console.log("Stop, The traffic light has red color");
}
else if (color === "yellow") {
    console.log("Slow down, The traffic light has yellow color");
}
else if (color === "green") {
    console.log("Go, The traffic light has green color");
}
else {
    console.log("The traffic lights are glitched");
}

// 18+ or not?

let age = 19
if (age >= 18) {
    console.log("you are free");
}
else if (age < 18) {
    console.log("jake pogo dekh beta");
}

//marks grade system

let marks = 75

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 75) {
    console.log("B");
}
else if (marks >= 40) {
    console.log("C");
}
else if (marks >= 35) {
    console.log("Bad");
}
else if (marks < 35) {
    console.log("F");
}

//popcorn price system

let popPrice = 200;

if (popPrice = 250) {
    console.log("XL");
}

else if (popPrice = 200) {
    console.log("L");
}

else if (popPrice = 100) {
    console.log("M");
}

else if (popPrice = 50) {
    console.log("S");
}
else {
    console.log("dont buy popcorn");
}

//upar wala sahi nai he niche wala sahi he

let popType = "L";

if (popType === "XL") {
    console.log("The price is 250 rupees");
}

else if (popType === "L") {
    console.log("The price is 200 rupees");
}

else if (popType === "M") {
    console.log("The price is 100 rupees");
}

else {
    console.log("The price is 50 rupees");
}

// marks grading system with nesting

let testMarks = 70;

if (testMarks >= 33) {
    console.log("pass");
    if (testMarks >= 90) {
        console.log("bahut zyada badhiya");
    }
    else if (testMarks >= 80) {
        console.log("bahut badhiya");
    }
    else if (testMarks >= 33) {
        console.log("ganda marks he lekin chalega");
    }
}
else {
    console.log("Better luck next time");
}

//logical opraters

let grade = 89
if (!(grade <= 30 && grade <= 90)) {
    console.log("pass");
    console.log("A+");
}

//good string or not?

let str = "apppleRun"
if ((str[0] === "a") && (str.length > 3)) {
    console.log("good string");
}
else {
    console.log("not a good string");
}

//long logical oprators

let num = 15
if ((num % 3 == 0) && ((num - 0 == 15) || (num - 1 == 15))) {
    console.log("safe");
}
else {
    console.log("unsafe");
}

//truthy and falsy

let anyThing = "a"
if (anyThing) {
    console.log("the string is not empty");
}
else {
    console.log("the string is  empty");
}

// traffic light with swtich method

let colour = "yellow"

switch (colour) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("go");
        break;

    default: console.log("switch is glitched");
        break;
}

//switch system for days name in a week

let day =4

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:console.log("a week only has 7 days");
        break;
}

function value(valu){
    if (valu===7){
        return "equal"
    }
    return "not equal"
}
console.log(value(7));