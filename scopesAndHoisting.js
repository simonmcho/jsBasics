//////////////////////////////////////////
//Global Variables
/////////////////////////////////////////
//What not to do:
console.log("-----------------------------------------");
console.log("Global variables");
console.log("-----------------------------------------");

var firstName, lastName;

function fullName() {
    firstName = "simon";
    lastName = "cho";
    console.log(firstName, lastName);//no use of keyword var makes these global variables
    return firstName + ' ' + lastName;
}

fullName();
//console.log(fullName());
console.log(firstName);//notice because we executed the function fullName(), we will see firstName value as "simon" in the console

//Why don't we pollute global namespace
//1. global namespace will be cluttered, too messy
//2. slower to look up than local variables
//3. Easy to forget about global variable declarations
//4. The messiness and clutteringg can lead to coupling, where functions and methods might depend on these variables that are open to manipulation

//Instead, we want this:

function getFullName() {
    var firstName = "sandra";
    var lastName = "yoo";
    return firstName + ' ' + lastName;
}

console.log(getFullName());

//important to declare variables locally as much as possible.



//////////////////////////////////////////
//Hoisting
/////////////////////////////////////////
//Variable declarations hoisted (lifed and declared) at top before program execution
//if these variables are declared in a function, it gets hoisted to top of function
//if global, hoisted to top of global context
console.log("-----------------------------------------");
console.log("Hoisting");
console.log("-----------------------------------------");
function showName(){
    console.log("Printing name after hoisting: " + name);
    var name = "Simmonson";
    console.log("Printing name after hoisting and initializing: " + name);
}

showName();

//Function declaration overrides variable declaration when hoisted
//But Variable Assignments take precedence over Function declarations


function testHoist() {
    console.log("hoist!");
}

var hoist = "hoist";//takes precedence over testHoist()

console.log("typeof hoist prints out", typeof hoist);

console.log("Note that function expressions (eg. var testName = function(){}) is not hoisted");

console.log("-----------------------------------------");
console.log("Use Strict");
console.log("-----------------------------------------");

//'use strict';
//Catches common problems and enforces rules

//1. Variables
function useStrict() {
    'use strict';
    foo = "bar";//the use strict will make this fail, as it prevents assignment to foo without a declaration
    console.log(foo);
}

//useStrict();

function useStrictProper() {
    'use strict';
    var foo = "bar";//this will work.
    console.log(foo);
}

useStrictProper();
//note foo = "bar" will work if `var foo` exists in the global namespace

