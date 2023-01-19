function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hoursToMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise: ', hoursToMinutes);

function getGreeting(name) {
  return ('Hello ' + name + '!');
}
var greeting = getGreeting('Bishan');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addedAndMultipliedBy5 = addAndMultiplyBy5(10, 5);
console.log(addedAndMultipliedBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multipliedAndDividedBy5 = multiplyAndDivideBy5(35, 10);
console.log(multipliedAndDividedBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractedNumbers = subtractTwoNumbers(22, 7);
console.log(subtractedNumbers);

function getCircleCircumference(radius) {
  return radius * 2 * 3.141592653589793;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var cubedNumber = cube(5);
console.log(cubedNumber);
