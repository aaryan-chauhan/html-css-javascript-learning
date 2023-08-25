//printing hello in function for first time
console.log("This is chapter 6 of js");

function hello() {
    console.log("hello");
}

hello();

//printing 1-5
function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);;
    }
}

print1to5();

//if else for adult or not
function isAdult() {
    let  age = 18
    if (age>=18) {
        console.log("Adult");
    } else {
        console.log("not Adult");
    }
}
isAdult();

//random number from 1-6
function rollDice() {
    let rand = Math.floor(Math.random() * 6 ) + 1;
console.log(rand);
}

rollDice();

//print name and age and the
function printInfo(Name , Age) {
    console.log(`${Name}'s age is ${Age}`);
}

printInfo("Aaryan",17);

//sum of 2 numbers
function Sum(num1 , num2) {
    console.log( num1 + num2);
}

Sum(20 , 2 )
Sum(625564 , 6516514981 )
Sum(2514654 , 652561 )
Sum(474 , 8478)

//avg of 3 numbers
function Avg( a,b,c ) {
    console.log(  (a+b+c)/3 );
}

Avg(20 , 20 , 20 )
Avg(62 , 65, 25  )
Avg(2  , 6 ,8 )
Avg(4  , 8 ,0)

//printing tables 
function Table(n) {
    for(let j = n ; j<=n*10 ; j+=n){
        console.log(j);
    }
}

Table(2);

//learning return
function add(a ,b , c) {
    return a+b+c;
}
console.log(add(2,3,4));