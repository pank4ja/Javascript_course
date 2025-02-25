let mydate =new Date();

console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log((mydate.toLocaleDateString()));
console.log(typeof Date);
console.log(typeof mydate);

let anodate =new Date(2025, 0,25);
console.log(anodate.toDateString());

let anodate2 =new Date(2025, 0,25,5,3);
console.log(anodate2.toString());

let createdate = new Date("2025-02-25");
console.log(createdate.toLocaleString());

let timestamp =Date.now();

console.log(timestamp); // milisecond
console.log(createdate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());
console.log(newdate.getDate());
