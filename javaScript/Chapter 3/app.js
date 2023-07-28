let msg = " helloworld    "
console.log(msg.trim())
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
msg.repeat(3)

let name = "aaryan"
console.log(name.replace("aaryan", "chauhan"))


let students = ["aaryan","marjana","javed","farhana"]
students[1]="salma"
students[5]="aniq"

let followers= ["aaryan","soham", "mit", "amin", "umar", "nehan", "danish", "xyz"]
let blocked = followers.pop()
followers.unshift("farhana")
followers.shift()

//practice quesction
let start = ["january", "july","march","august"];
start.shift();
start.shift();
start.unshift("july");
start.unshift("june");

start.includes("january")
start.indexOf("january")

//concatenation
let primary = ["red","blue","green"]
let secondary=["violet","indigo","orange"]
let allColors= primary.concat(secondary)