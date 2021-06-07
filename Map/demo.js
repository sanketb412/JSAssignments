let keyString = 'a string'
console.log(keyString)

let keyObj = {}
console.log(keyObj)

let keyFunc = function() {}
console.log(keyFunc)

//setting the Values
let myMap = new Map()
let x = myMap.set(keyString, "value associate with 'a String'")
console.log(x)

let y = myMap.set(keyObj, 'value associate with keyObj')
console.log(y)

let z = myMap.set(keyFunc, 'value associate with keyFunc')
console.log(z)

//getting the values
let size = myMap.size
console.log(size)

let valStr = myMap.get(keyString)
console.log(valStr)

let isKeyExist = myMap.has('a string')
console.log(isKeyExist)

for (let [key, value] of myMap){
    console.log("loop1: " +key + ' = ' + value)
} 

for (let [key, value] of myMap.entries()){
    console.log("loop2: " +key + ' = ' + value)
}

for (let key of myMap.keys()) {
    console.log("loo3: " +key)
}

for (let value of myMap.values()){
    console.log("loop4: " + value)
}

//Merrge two maps. The Last repeated key Wins.
// Spread Operator essentially converts a Map to an Array
let first = new Map([ [1, 'one'], [2, 'two'], [3, 'three']])
console.log(first)

let second = new Map([ [1, 'uno'], [2, 'dos']])
console.log(second)

let merged = new Map([...first, ...second, [3, 'eins']])
console.log(merged)

let hasKey = merged.has(1)
console.log(hasKey)

let delKey = merged.delete(1)
console.log(delKey)

if (merged.has(1)) { 
    console.log(merged.get(1)) //uno
} 
console.log("Pos2: " +merged.get(2)) //dos
merged.clear()
console.log(merged.size)