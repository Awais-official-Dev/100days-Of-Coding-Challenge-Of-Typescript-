// Day 1 Challenge: Start Coding!
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Awais, would you like to learn some TypeScript today?”
var personName = "AWAIS";
console.log("Hello ".concat(personName, ", would you like to learn some TypeScript today?"));
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//  lowercase:
var lowerCase = personName.toLowerCase();
console.log(lowerCase);
// upperCase:
var upperCase = personName.toUpperCase();
console.log(upperCase);
// titleCase:
var titleCase = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(titleCase);
