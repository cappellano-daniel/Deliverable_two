let n=50;

let x=rain;

var rain= prompt("How many inches of rain fell?");

var myString = "";
var i = 0;
while ( i < rain) {
    myString += "*";
    i++;
}
/*Based on the number that the user inputs, this writes an * in the html
For example: if the user wrote in 30 for the rainfall in inches, 30 asterisks 
would show up on the html page*/

document.getElementById("rain").innerHTML = "Rain=" + myString;
//Takes the information in the while loop and writes in the html

if (rain >= 20) {
    n*=.9;
}
else if (rain <= 10) {
    n*=.8;
}
// Decreases the value of n by 10 or 20% based on the amount of rainfall



let response =prompt ("Did you use fertilizer?");

if (response==="yes") {
   let type= prompt ("Did you use premium or regular fertilizer?"); {
       if (type==="premium") {
           n*=1.15
       }
       else if (type==="regular") {
           n*=1.1
       }
   }
}
/*If the user says yes to this question, the program follows up with
another question asking what type of fertilizer was used
The program adds 10 or 15% based on the users input*/

let crop_yield = n;

crop_yield = +crop_yield.toFixed(2);

console.log(crop_yield);
/*Rounds any decimal to two places. It won't change numbers with 2 or 
less decimal places. */ 

document.getElementById("type").innerHTML = "The yield should be " + crop_yield + " bushels per acre.";