//answer 1 and 2
let arr = [7, 9, 0, -2];
let n = 3;

let ans1 = arr.slice(0, n);
console.log(ans1);

let ans2 = arr.slice(0. - n);
console.log(ans2);

//answer 3
let str = prompt("please enter your string")
if (str.length == 0) {
    console.log("the string is empty");
} else {
    console.log("the string is not empty");
}

//answer 4
let pro = prompt("pls write something that has lower and upper case")
console.log(pro);
let char = prompt("write the number of the wrod you want to know")
if (pro[char - 1] == pro[char - 1].toLowerCase) {
    console.log("this letter is lower case");
} else {
    console.log("this letter is not lower case, it is upper case");
}

//answer 5
let strip = prompt("enter your strip")
console.log(`your strip is ${strip}`);
console.log(`your strip without space is ${strip.trim()}`);

//answer 6
let array = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (array.indexOf(item) != -1) {
    console.log("element exists in array");
}
else {
    console.log("element doesn't exist in array");
}