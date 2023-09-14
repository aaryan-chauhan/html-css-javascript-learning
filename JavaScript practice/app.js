console.log("hi");
let a = null;
let b = 69;
let c = false;
let d = BigInt(145) + BigInt(145);
let e = "i am aaryan";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);

//object

let list = {
    "aaryan": 95,
    "mj": 100,
    "aman": 40,
    "shraddha": 30,
}
console.log(list);
console.log(list["aaryan"]);
console.log(list["mj"]);
console.log(list["aman"]);
console.log(list["shraddha"]);

//chapter 1 practice set

let string1 = "0"
let string2 = "aaryan"
console.log(string1 + string2);
console.log(typeof (string1 + string2));

const obj = {
    name: "aaryan",
    section: 1,
    isprincipal: false,
}
obj["name"] = "shubham";
obj["relation"] = "mj";

const dict = {
    sartorial: "of or relating to clothing or style or manner of dress.",
    grandiloquent: "speaking or expressed in a lofty style, often to the point of being pompous.",
    jolabokaflod: "an Icelandic tradition in which books are given as Christmas presents and opened on December 24, after which the evening is spent reading the books.",
}
console.log(dict.sartorial);
console.log(dict["grandiloquent"]);

//operators in js
console.log("Arithmetic operatrs in JavaScript");
let A = 10;

console.log("++A=", ++A);
console.log("A++=", A++);

console.log("--A=", --A);
console.log("A--=", A--);
console.log("A=", A);
console.log("A++=", A++);

//Assignment operators in js
console.log("Assignment operatrs in JavaScript");
let assignment = 2;
console.log(assignment);
console.log("assignment + 5 =", assignment += 5);
console.log("assignment - 1 =", assignment -= 1);
console.log("assignment * 5 =", assignment *= 5);
console.log("assignment / 2 =", assignment /= 2);

//conditional statement
let age = prompt("pls enter you age");
age = parseInt(age)
if (age < 0) {
    console.log("this is invalid age")
} else if (age < 15) {
    console.log("you can't think of start learning to drive")
}
else if (age >= 15 && age < 18) {
    console.log("you can think of start learning to drive")
}
else if (age >= 18) {
    console.log("you can drive")
}

//eranary oprater
let num = prompt("enter your age")
num = parseInt(num)
console.log("you can ", num > 18 ? "drive" : "not drive");