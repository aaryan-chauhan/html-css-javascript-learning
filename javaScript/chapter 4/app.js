for (let a = 1; a <= 6; a++) {
    console.log(a);
}

//odd numbers from 1-15
console.log("odd numbers from 1-15");

for (let b = 1; b <= 15; b = b + 2) {
    console.log(b);
}

//backwards
console.log("backwards");
for (let b = 15; b >= 1; b = b - 2) {
    console.log(b);
}

//even numbers from 1-10
console.log("even numbers from 1-10");

for (let c = 2; c <= 10; c = c + 2) {
    console.log(c);
}

//backwards
console.log("backwards");
for (let c = 10; c >= 2; c = c - 2) {
    console.log(c);
}

//50 multiplication table
console.log("50 multiplication table");

for (let d = 5; d <= 50; d = d + 5) {
    console.log(d);
}

// isko comment kar diya kyuki promt pure code ko ruin karta he



// // promt multiplication table generater
// let n = prompt("write your number");
// parseInt(n);
// for (let e = n; e <= n * 10; e = e + n) {
//     console.log(e);
// }




//nested loops
console.log("nested loops");

for (let f = 1; f <= 3; f++) {
    console.log(`outer loop ${f}`);
    for (let g = 1; g <= 3; g++) {
        console.log(g);
    }
}

//while loop
console.log("while loop");

let h = 0
while (h <= 25) {
    console.log(h);
    h++;
}

//backwards while loop
console.log("backwards while loop");

let i = 25
while (i >= 0) {
    console.log(i);
    i--;
}

//guess favorite movie game 
console.log("guess favorite movie game ");

let favorite = "mi7"

let guess = prompt("enter movie name here")

while (guess != favorite) {
    if (guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt(" wrong guess. please try again")

}
if (guess == favorite) {
    console.log("your guess is correct");
}

// while loop break

let k = 0
while (k <= 10) {
    console.log(k);
    if (k == 5) {
        break
    }
    k++;
}

//loops with arrays

let fruits = ["apple", "mango", "banana", " plum", "grape"]
for (let j = 0; j < fruits.length; j++) {
    console.log(j, fruits[j]);

}

//loops with arrays (backwards)

for (let j = fruits.length; j >= 0; j--) {
    console.log(j, fruits[j]);

}

// nested loops with arrays (backwards)

let heros = [["iron man", "loki", "thor"], ["superman", "batman", "flash"]]

for (let k = 0; k < heros.length; k++) {
    console.log(heros[k]);
    for (let l = 0; l < heros[k].length; l++) {
        console.log(`l=${l} , ${heros[k][l]}`);
    }
}

//nested loops for students marks individual list 

let students = [["aman", 70], ["shraddha", 90], ["soham", 80], ["aaryan", 100]]
for (let m = 0; m < students.length; m++) {
    console.log(`marks of student number #${m + 1}`)
    for (let n = 0; n < students[m].length; n++) {
        console.log(`${students[m][n]}`);
    }
}

//for of loops

let vegetable=["carrot","tomato","gavar"]
for (veges of vegetable) {
    console.log(veges);
}