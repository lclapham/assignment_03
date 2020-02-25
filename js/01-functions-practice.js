//STEP 1

function halfNumber(num1) {
    return console.log ("Half of " + num1 + " is " + (num1/2));
}

halfNumber(10);

//STEP 2

function squareNumber(num1) {
    return console.log ("The result of squaring the " + num1 + " is " + Math.pow(num1, 2));
}

squareNumber(12);

//STEP 3

function percentOf(num1, num2){
    return console.log (num1 + " is "+ (num1/num2)*100 + "%" + " of " + num2);
}

percentOf(30, 100);

//STEP 4
function findModulus(num1, num2){
    return console.log (num2%num1 + " Is the modulus of " + num1 + " and " + num2);
}

findModulus(4, 10);

//STEP 5

let num = [];
num  = window.prompt("Enter some numbers delineated by , ").split(','); // Clean out the commas

addNumbers(num);

function addNumbers(num) {
   let totalSum = 0;
   let objToNumber;
   for (i = 0; i < num.length; i++) {  // iterate through the array and convert the string to int
       objToNumber = parseInt(num[i]);
       totalSum += objToNumber; //Add the values to make the total
   }
 console.log("Your numbers add up to " +totalSum);
}
