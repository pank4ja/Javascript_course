// singleton

/* const tinderuser = new Object(); // this is a singleton object 
const tinderuser2 ={} // this is a non single ton object
console.log(tinderuser);
console.log(tinderuser2);

tinderuser.id = "123abs";
tinderuser.name = "pankaj";
tinderuser.islogin = false;

// console.log(tinderuser);

const reguaruser = {
    email : "sum@gmail.com",
    fullname:{
        userfullname:
        {
            firstname : "panaj",
            lastname: "agarwal"
        }
    }
}
console.log(reguaruser.fullname.userfullname.firstname);

const obj1 ={1: "a",2: "b"}
const obj2 = {3: "c", 4: " d"};

const obj3 = {obj1,obj2}; // combining objects

console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
const newobjs = Object.assign(obj1);
console.log(obj2);
console.log(obj1);


console.log(obj4);


const obj5 ={...obj1,...obj2};
console.log((obj5));


const users =[
    {
        id: "123b",
        email:"h@gmail.com"
    },
    {
        id: "122b",
        email:"cs@gmail.com"
    },
    {
        id: "31s",
        email:"ppls@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("islogin")); */ 


const course ={
    coursename : "js course",
    price: "999",
    courseinstructor :"hitesh"
}

const {courseinstructor: instutor} = course // destructuring the objects

console.log(instutor);

/* {       // json
    "name": "pankaj",
    "coursename": "js cocurse",
    "price": "free"
} */ 

[ // json
    {},
    {},
    {}
]