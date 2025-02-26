//while declaring variable make sure name is understandable
const accountId = 122287;
let accountEmail = "Rahul@gmail.com";
var accountPassword = "123455678";
accountCity = "Jaipur";
let accountState;


//accountId = 2 ; // const variable can't change
// Prefer not to use "var" because of issue in block scope and functional scope

accountEmail = "RD@gmail.com";
accountPassword = "090909090";
accountCity = "Bangaluru";

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
//console.table used to print multiple value at once

// let accountState;
// if you declare a variable in js and the value of the variable is empty than it store as undefined in JS