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