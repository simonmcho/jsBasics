//////////////////////////////////////////
//What not to do:

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
