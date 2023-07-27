//quesction 1
let num = 1128;

if (num % 10 == 0) {
    console.log("good");
}
else {
    console.log("bad");
}

//quesction 2
let name = prompt("pls enter your name")
let age = prompt("pls enter your age")
alert(`${name} is ${age} years old`)

//quesction 3
let quarter = 5;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;

    default: console.log("There are only 4 quarter");
        break;
}

//quesction 4
let str = "apple";

if (((str[0] = "A") || (str[0] = "A")) && (str.length > 5)) {
    console.log("this is a golden string");
}
else {
    console.log("this is not a golden string");
}

//quesction 5
let a = 1
let b = 2
let c = 3

if ((a > b) && (a > c)) {
    console.log(a ,"is the largest");
}
else if ((b>a) && (b>c)){
    console.log(b ,"is the largest");
}
else{
    console.log(c ,"is the largest");
}

//quesction 5

let e = 32;
let f = 47582;

if ((e%10 == 2) && (f%10 == 2)) {
    console.log("yes they end with", e%10);
} else {
    console.log("no they dont end with", f%10 );
}