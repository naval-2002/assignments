/*1. Take any two number and a variable as operation and depending upon the operation do the following
    * Print result of num1+num2 if operation is "add"
    * Print result of num1-num2 if operation is "subtract"
    * Print result of num1*num2 if operation is "multiply"
    * Print result of num1/num2 if operation is "divide"
    * Print result of num1%num2 if operation is "modulus"
    * Else print "Invalid operation"*/

const num1 = 21;
const num2 = 10;
let operation = "m";

if (operation==="add") {
    console.log(num1+num2)
}
else if (operation==='subtract') {
    console.log(num1-num2)
}
else if (operation==='multiply') {
    console.log(num1*num2)
}
else if (operation==='divide') {
    console.log(num1/num2)
}
else if (operation==='modulus') {
    console.log(num1%num2)
}
else {
    console.log("invalidOperation")
}

/**
 * 3. Find the grade for input marks
    * Print "S grade" if marks is between 90 and 100.
    * Print "A grade" if marks is between 80 and 90.
    * Print "B grade" if marks is between 70 and 80.
    * Print "C grade" if marks is between 60 and 70.
    * Print "D grade" if marks is between 50 and 60.
    * Print "E grade" if marks is between 40 and 50.
    * Print "Student has failed" if marks is between 0 and 40.
    * Else print "Invalid marks".
 */
 
const marks = 30;

if (marks>=90 && marks<=100) {
    console.log("s Grade")
}
else if (marks>=80 && marks<=89) {
    console.log("A grade")
}
else if (marks>=70 && marks<=79) {
    console.log("B grade")
}
else if (marks>=60 && marks<=69) {
    console.log("C grade")
}
else if (marks>=50 && marks<=59) {
    console.log("D grade")
}
else if (marks>=40 && marks<=49) {
    console.log("E grade")
}
else if (marks>=0 && marks<=39) {
    console.log("student Has Failed")
}
else {
    console.log("InvalidMarks")
}

/*
4. Find number of days in a given month
    * If month is outside the range of 1 and 12 print "Invalid month".
    * If month is equal to 2 ie, February print "29 days" if leap year else print "28 days" 
    * Else if month is equal to 4, 6, 9 or 11 print "30 days".
    * Else print "31 days".
 */
let months ;
months = january, february, march, april, may, june, july, august, september,october, november, december;




