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

if(testMarks>=33){
    console.log("pass");
    if(testMarks>=90){
        console.log("bahut zyada badhiya");
    }
    else if (testMarks>=80){
        console.log("bahut badhiya");
    }
    else if(testMarks>=33){
        console.log("ganda marks he lekin chalega");
    }
}
else{
    console.log("Better luck next time");
}

