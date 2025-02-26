// objexct literals

// Object.create()

const mysym =  Symbol("key1");

const jsuser = {
    name: "pankaj",
    "full name": "pankaja agwral", // cant be accessed by dot 
    //mysym: "mykey1",
    age: 10,
    location: "delhi",
    email: "pankajagarwal@gmail.com",
    islogin: false,
    days: ["monday","saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
//console.log(jsuser["full name"]);
//console.log(jsuser.mysym);


jsuser.email = "ironman@gmail.com";
// Object.freeze(jsuser.email);
jsuser.email = "marvel@gmail.com";
jsuser.location= "jaipur";
console.log(jsuser);

//Object.freeze(jsuser);
jsuser.islogin=true;

console.log(jsuser);

jsuser.greeting = function()
{
    console.log("hellow js user");
    
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greeting2 = function()
{
    console.log(`hello js user, ${this.name}`); // khud ka hi object ka reference karne se this use kar sakte hai
    
}

console.log(jsuser.greeting2);
console.log(jsuser.greeting2());

