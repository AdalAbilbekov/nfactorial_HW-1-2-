'use strict';

const a = 'ABC'
let b = 4
b = 3
let c = true
let d = null
let f = undefined

// Task-2
const vehicl = {}

vehicl.brand_name = `BMW`
vehicl.model = `X5`
console.log(vehicl.brand_name, vehicl.model)

if (vehicl["model"] == `X5`){
    vehicl["model"] = `M1`
}
console.log(vehicl.model)

delete vehicl.model
console.log(vehicl)

// Task-3

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum = 0;

for (let salary in salaries){
    sum += salaries[salary]
}

console.log(`Total salary is : ` + sum)