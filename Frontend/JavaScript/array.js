
let fruits = ["Banana", "Orange"];
console.log("Starting Array:", fruits);


fruits.push("Apple", "Mango");
console.log("after push:", fruits);


let removedEnd = fruits.pop();
console.log("After pop ): ", fruits);


let removedStart = fruits.shift();
console.log("After shift : ", fruits);



fruits.unshift("Strawberry", "Grapes");
console.log("After unshift:", fruits);


for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}