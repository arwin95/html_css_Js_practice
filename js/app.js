let myArr = []
let myObj = {}

//Object
// firstName is the (KEY)
// 'Arwin' is the (VALUE)
var friend = {
    firstName: 'Arwin',
    lastName: 'Kumar'
}
console.log(friend)

//dot notation
console.log(friend.firstName)

//SAME AS ABOVE...
console.log(friend['firstName'])

friend.middleName = 'Cosmo'
console.log(friend)

friend.middleName = 'dog'
console.log(friend)

delete friend.middleName
// console.log(friend)

var friendFunc = {
    firstName: 'Arwin',
    lastName: 'Kumar',
    sayHello: function() {
        console.log('hi!')
    }
} 
console.log(friendFunc)

function sayHello() {
    console.log('Hello')
}

var sayHelloAgain = function () {
    console.log('hello again')
}

var sayHelloAThirdTime = () => {
    console.log('Hello 3')
}
sayHelloAThirdTime() //Calling the object

var firstProgrammer = {
    name: 'a',
    rank: '1',
    brag: function() {
        console.log(`I'm ${this.name} and I'm ${this.rank}`)
    }
}
console.log(firstProgrammer.brag())

//-------------------------------
var car = {
    wheel: '4',
    doors: '2',
    seats: '5'
}

//FOR (IN) LOOP (for object)
for (let key in car) {
    console.log(`My car has ${car[key]} ${key}`)
}