//Closures Example

function addNumbers(firstNumber){
    var addSecondNumber = function(secondNumber){
        return firstNumber + secondNumber;
    }

    return addSecondNumber; //this is returning function(secondNumber), as we are not calling this function, but getting the 'value' of addSecond Number
}

var first = addNumbers(5);//now we have passed in `5` as the firstNumber parameter to the addNumber function.
var second = first(10);//Because addNumbers returns the function `addSecondNumber`, now we can pass in the value `10` in as the parameter value for `secondNumber`

console.log(second); //logs 15.

//Below is the same:

addNumbers(5)(10)
console.log(addNumbers(5)(10));//logs 15.