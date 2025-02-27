const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // current context
        console.log(this);
        
    }

}

/* user.welcomeMessage();
user.username ="sam";
user.welcomeMessage(); */

//console.log(this);

function chai()
{
    console.log(this);
    
}
chai();

const sayhello = () => {   // arrow function
    console.log('heyy');
    
}

const add= (a,b) => {
    return a+b;
}
add(2,3);
console.log(add(2,4));

const addv2 = (a,b) => a+b; // one liner function only return the line 

sayhello();

// arguments