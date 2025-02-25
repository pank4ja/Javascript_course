const name = "pankaj";
const repocount = 5;

// console.log(name + repocount + " value");

console.log(`hello my name is ${name} my repo count is ${repocount}`); // string interpolation

const myname = new String("pankaj agarwal");
/* console.log(myname);

console.log(myname[0]);
console.log(myname.__proto__.length);


console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(4));

console.log(myname.indexOf('a')); */
console.log(myname.substring(0,4));

const another = myname.slice(0,-1); // reverse
console.log(another);


const teststr = "    pankaj    ";
console.log(teststr);
console.log(teststr.trim());

const url = "http://panakj.com/pankaj%20agarwal";
console.log(url.replace('%20','-'));
console.log(url.includes('pankaj'));
