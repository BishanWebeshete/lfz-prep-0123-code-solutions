var person = {
  firstName: 'Harry',
  lastName: 'Potter',
  hobby: 'Magic'
};
console.log(person);

var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Magician';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Muggle';
console.log("The person's previous job was: " + person.previousJob);

console.log(person);
