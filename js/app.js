//arrays
let myVar = 'anything'
let friends = ['Moe', 'Larry', 'Curly']

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

// console.log('There are ' + friends.length + ' in my array..')
// Same as above
console.log(`There are ${friends.length} in my array..`)

let faourites = 'noodles,bread,chesse,filet mignon'
let favArr = faourites.split(',')
console.log(favArr)

let subtotals = [2.99, 3.00, 2.75, 14.99]

let total = 0

// FOR LOOP
// for (itorator Var; conditional; incremental)

for (let i = 0; i < subtotals.length; i++) {
    // console.log(`i is: ${i}`)
    total = total + subtotals[i]
}
console.log(total)

var a1 = [];
var a2 = [14];
var a3 = [29, 32];
var a4 = [16, 99, -40];
var a5 = [12, 28, 92, 23, 94, 23, 99, 99, 99, 92];

// a1
let a1Total = 0

for (let i = 0; i < a1.length; i++) {
    a1Total = a1Total + a1[i]
}

let a1Avg = a1Total/a1.length

console.log(a1Avg)

// a2
let a2Total = 0

for (let i = 0; i < a2.length; i++) {
    a2Total = a2Total + a2[i]
}

let a2Avg = a2Total/a2.length

console.log(a2Avg)

// a3
let a3Total = 0

for (let i = 0; i < a3.length; i++) {
    a3Total = a3Total + a3[i]
}

let a3Avg = a3Total/a3.length

console.log(a3Avg)

// a4
let a4Total = 0

for (let i = 0; i < a4.length; i++) {
    a4Total = a4Total + a4[i]
}

let a4Avg = a4Total/a4.length

console.log(a4Avg)

// a5
let a5Total = 0

for (let i = 0; i < a5.length; i++) {
    a5Total = a5Total + a5[i]
}

let a5Avg = a5Total/a5.length

console.log(a5Avg)