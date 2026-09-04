const person={
    name:"Karthik",
    age: 21,
    country:"India"
};

const {name, age}= person

console.log(`Destructured Name: ${name},Age:${age}`) 

const fruits=["apple", "mango", "banana"];
// old method :const apple=fruits[0];

const[firstFruit,secondFruit] =fruits;
console.log(`Fruits: ${firstFruit}, ${secondFruit}`); 

const score=85
const result= score>=50 ? "pass":"fail"
console.log(result) 

const arr1 =[1,2,3];
const arr2 =[4,5,6];
const combined=[...arr1,...arr2]

console.log("Combined Arrar: ",combined)

const student={
    id:78,
    name:"Karthik"   
};

const marks={
    Math:80,
    science:90
};

const FullDetails={...student,...marks};
console.log("Full Details of Student: ", FullDetails) 

//Traditional Functions
function addnum(a, b){
    return a+b
}

console.log("Addition of num:", addnum(3,9)) 

 const newArrow=(a,b) => a + b ;
console.log ("Arrow function for addition",newArrow(9,17))

const square= c => c*c ;
console.log ("Square of Number",square(21)) 

const numbers =[1,2,3,4];
const doubled = numbers.map(num=>num*2)
console.log("Doubled values of array: ",doubled)
