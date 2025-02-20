studentName = "Katherine";
studentAge = 41;
isEnrolled = true;

document.write("<h2>Student Info</h2><br>");
document.write("Name: " + studentName + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br><br>");

let ageString = String(studentAge);
document.write("Age Type: " + typeof(ageString) + "<br><br>");

num1 = Number(prompt("Enter first number"));
num2 = Number(prompt("Enter second number"));
document.write("Sum: " + (num1 + num2) + "<br><br>");

// third part
userAge = Number(prompt("Enter your age"));
if (userAge >= 18) {
    document.write("You can vote!<br><br>");
} else {
    document.write("Sorry, you can't vote.<br><br>");
}

// for loop part
for (i = 1; i < 10; i++) {
    document.write(i + "<br>");
}

// while loop part
let num = 0;
while (num < 10) {
    num = Number(prompt("Enter a number greater than 10"));
    document.write("You entered: " + num + "<br>");
}
