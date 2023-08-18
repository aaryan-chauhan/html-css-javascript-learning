const student = {
    name:"aaryan",
    marks: 77.7,
    age : 17,
}

const post = {
    username :"@aaryanchauhan",
    content: "this is #myfirstpost",
    tags: ["@apnacollege" , "@apnikaksha"],
    reposts:5,
    likes:150,
};

post.content;
post["content"];
let prop = "content";
post[prop];

post.content= "sorry this is my #secondpost"

post.features="@classmates"

post.features=["salma" , "javed" , "farhana" , "aaryan" , "aniq"]

//nested objects
const houseinfo = {
    salma:{
        age:70,
        gender:"female",
    },
    javed:{
        age:40,
        gender:"male",
    },
    farhana:{
        age:40,
        gender:"female",
    },
    aaryan:{
        age:17,
        gender:"male",
    },
    aniq:{
        age:9,
        gender:"male",
    },
}

//object in an array
const tuitionclass= [
    {
        age:"23",
        marks:"100",
    },
    {
        age:"25",
        marks:"30",
    },
    {
        age:"43",
        marks:"40",
    },
];

//random integer from 1-10
let randomnum = math.floor(math.random()*10)+1;

//max number game
const max = prompt("enter the max number");
const random = math.floor(math.random()*max)+1
