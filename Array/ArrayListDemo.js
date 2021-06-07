let originDogs = ["BullDog","Pug","Labradog"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array Copy Elements.
let sliceDogs = originDogs.slice(1,2);
console.log(sliceDogs);

let copyDogs = [...originDogs];
console.log(copyDogs);
let dogs = copyDogs.slice(0);
console.log(dogs);

// Stack Function (LIFO) push and pop
let pushDog = dogs.push("Golden Retriver");
console.log(dogs);
let popDog = dogs.pop();
console.log(dogs);
dogs[dogs.length] = "Poodle";
console.log(dogs);

//Add and Remove from First
let addFirst = dogs.unshift("Golden Retriver");
console.log(dogs);
let shiftDog = dogs.shift();
console.log(dogs);

//Atomic add and remove elements (Where, how many to remove, elements list)
dogs.splice(0,0, "Tommy", "Boxer");
console.log(dogs);

// Array Function - concat, slice and sort
let animals = dogs.concat(cats,birds);
console.log(animals);

let newAnimal = [...dogs, ...cats, ...birds].toString();
console.log(newAnimal);

console.log(dogs);

let sortDog = dogs.slice(0).sort();
console.log(sortDog);

let sortDog1 = dogs.slice(1).sort();
console.log(sortDog1);

function scanArray([first, second]) { 
    console.log("Scan: " +first + " " + second); 
}

scanArray(animals);

let joinAnimals = animals.join(" ");
console.log(joinAnimals);

let allAnimals = "";
console.log(allAnimals);

for (let animal of animals) allAnimals += animal + " ";
console.log("Animals : " + allAnimals);

// // let sliceDogs = originDogs(1,2);
// originDogs.push("Pomerian");
// console.log(originDogs);
// let rm = originDogs.slice(1);
// console.log(rm);

// let ad = originDogs.splice(2,0,"Rishii","one");
// console.log(ad);
// console.log(originDogs);

// const x = [34];
// console.log(x);
// const y = x.map(item => item * 2);
// console.log(y);