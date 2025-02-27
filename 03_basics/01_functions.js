/*                   function saymyname()
{
    console.log("pankaj");
    console.log("agarwal");
}
saymyname(); // execution
saymyname; // reference                        */
/* function addtwono(number1,number2)
{
    console.log(number1 +number2);
} */ 
/* addtwono();
addtwono(2,3);
addtwono(3,"4");
addtwono(3,"a"); */ 

/* const result = addtwono(4,4);
console.log("my result is ",result); */ 

/* function addtwonum(number1,number2)
{
    let result = number1 +number2;
    return result;
    console.log("unreacable code");
    
}
const newres = addtwonum(4,3);
console.log(newres); */

/* function userlogin(username ="sam") // passing the default value if the user did not put any value
{ 
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

userlogin("pankaj");
console.log(userlogin("pankaja agarwal"));
console.log(userlogin(""));
console.log(userlogin()); */ 


function calculatecartprice(val1,val2, ...num1){  // taking large input in function when we don't know the number of parameters
    return num1;
}

console.log(calculatecartprice(2,200,399,500));

const user ={
    username:"pankaj",
    price: 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username}, and price is ${anyobject.price}`);
    
}

handleobject(user);
handleobject({
    username:"sam",
    price: 222
})

const mynewarr =[222,334,55,67,90];

function returnsecondvalue(getarray)
{
    return getarray[2];
}
console.log(returnsecondvalue(mynewarr));
console.log(returnsecondvalue([23,55,677,34]));
