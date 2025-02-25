const accountId = 14452;
let accountemail = "panakjagarwal@gmail.com";
var accountpassword ="128324";
accontcity = "jaipur";
let accountstate; // declarations
// accountId =2; not allowed

console.log(accountId);

accountemail ="ironman@gmail.com";
accountpassword= 123456;
accontcity ="delhi";

/*
prefer not to use var becoz of issue in block scope and funcitonal scope
*/ 
console.log([accountId, accountemail , accountpassword,accontcity, accountstate]);
