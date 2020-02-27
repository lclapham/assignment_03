//global variables
let userChoice1;
let userChoice2;
let operation;
let answer;
let check1, check2, check3;
let appRun;
let makeAnotherCalc;
let runAgain;


// Run the app
do {

    window.alert("Welcome to the JS basic calculator. This calculator can add, subtract, multiply or divide any two numbers of your choice");

    getUserInput();

    calculate(userChoice1, userChoice2, operation);

    window.alert("The answer is " + answer);

    do {
        makeAnotherCalc = window.prompt("Would you like to make another calculation y/n");
        if (makeAnotherCalc !== 'y' && makeAnotherCalc !== 'n') {
            window.alert("You must enter \"y or n\"");
            runAgain = true;
            appRun = true;
           
        } else if (makeAnotherCalc === 'y') {
            runAgain = false;
            appRun = true;
        } else {
            runAgain = false;
            appRun = false;
        }
    } while (runAgain);

} while (appRun)


function getUserInput() {
    // Get and validate the usersfirst number
    do {
        userChoice1 = parseFloat(window.prompt("Enter your first number"));
        if (isNaN(userChoice1)) {
            window.alert("You must enter a number")
            check1 = true;

        } else {
            check1 = false;
        }
    } while (check1);

    // get and validate the second user input
    do {
        userChoice2 = parseFloat(window.prompt("Enter your second number"));
        if (isNaN(userChoice2)) {
            window.alert("You must enter a number")
            check2 = true;

        } else {
            check2 = false;
        }
    } while (check2);

    // get and validate the operation
    do {
        operation = window.prompt("Enter the operation you would like to perform (i.e add, subtract, multiply or divide\)");
        if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide" && operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            window.alert("You must enter only add, subtract, multiply, divide or the symbols +, -, *, /")
            check3 = true;

        } else {
            check3 = false;
        }
    } while (check3);
   return
}

// calculate based on the user input
function calculate(userChoice1, userChoice2, operation) {

    userChoice2 = parseFloat(userChoice2);
    console.log(operation)

    switch (operation) {
        case "add":
            answer = userChoice1 + userChoice2;
            break;
        case "subtract":
            answer = userChoice1 - userChoice2
            break;
        case "multiply":
            answer = userChoice1 * userChoice2
            break;
        case "divide":
            answer = userChoice1 / userChoice2
            break;
        case "+":
            answer = userChoice1 + userChoice2;
            break;
        case "-":
            answer = userChoice1 - userChoice2
            break;
        case "*":
            answer = userChoice1 * userChoice2
            break;
        case "/":
            answer = userChoice1 / userChoice2
            break;
        default:
            window.alert("Something went terribly wrong");
    }
    return answer;

}
