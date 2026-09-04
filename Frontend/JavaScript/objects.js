// Creating a Object
const person = {
  name: "Karthik",
  age: 21,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};


console.log(person.name);        
console.log(person["age"]);      


person.name = "Karthikeyen";
person.age = 22;

// To create andd delete a property 

person.city = "New York";        
delete person.city;              


person.sayHello();            