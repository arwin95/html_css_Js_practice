// let myArr = []
// let myObj = {}

// //Object
// // firstName is the (KEY)
// // 'Arwin' is the (VALUE)
// var friend = {
//     firstName: 'Arwin',
//     lastName: 'Kumar'
// }
// console.log(friend)

// //dot notation
// console.log(friend.firstName)

// //SAME AS ABOVE...
// console.log(friend['firstName'])

// friend.middleName = 'Cosmo'
// console.log(friend)

// friend.middleName = 'dog'
// console.log(friend)

// delete friend.middleName
// // console.log(friend)

// var friendFunc = {
//     firstName: 'Arwin',
//     lastName: 'Kumar',
//     sayHello: function() {
//         console.log('hi!')
//     }
// } 
// console.log(friendFunc)

// function sayHello() {
//     console.log('Hello')
// }

// var sayHelloAgain = function () {
//     console.log('hello again')
// }

// var sayHelloAThirdTime = () => {
//     console.log('Hello 3')
// }
// sayHelloAThirdTime() //Calling the object

// var firstProgrammer = {
//     name: 'a',
//     rank: '1',
//     brag: function() {
//         console.log(`I'm ${this.name} and I'm ${this.rank}`)
//     }
// }
// console.log(firstProgrammer.brag())

// //-------------------------------
// var car = {
//     wheel: '4',
//     doors: '2',
//     seats: '5'
// }

// //FOR (IN) LOOP (for object)
// for (let key in car) {
//     console.log(`My car has ${car[key]} ${key}`)
// }

// //--------------------------------------------------------

// //Exercise

// //#1
// var exercise = {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: '36',
//         address: '1234 Park st'
//     }
// console.log(exercise)

// //#2
// exercise.address = '1234 Park ln'
// console.log(exercise)

// //#3
// // Create Array
// // Create Objects
// // Push Objects into Array
// // USe the Method BELOW

// let people = []

// var moe = {
//     firstName: '',
//     lastName: '',
//     age: '',
//     address: ''
// }

// var joe = {
//     firstName: '',
//     lastName: '',
//     age: '',
//     address: ''
// }

// people.push(moe)
// people,push(joe)

// //--------------------OR------------------------
// //Create array with objects inside

// let peopleOptTwo = [ //ARRAY
    
//     { //OBJECT #1
//         firstName: '',
//         lastName: '',
//         age: '',
//         address: ''
//     },
    
//     { //OBJECT #2
//         firstName: '',
//         lastName: '',
//         age: '',
//         address: ''
//     }
// ]

// //#4
// delete people[1].address

//-----------------------------------------------------------------------
// Exercise
// Conditionals 
// If/Else - Switch

var course = "wdi";
switch(course) {
  case "uxdi":
    console.log('Hello, User Experience Designer!');
    break;
  case "fewd":
    console.log('Hello, Front-End Developer');
    break;
    case "wdi":
    console.log('Hello, Immersed Developer');
    break;
  default:
    console.log('Who are you?');
    break;
}

//Loops
// Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log('fizz buzz')
    } else if (i%3 == 0) {
        console.log('fizz')
    } else if (i%5 == 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}

// Functions

var lightsabers = function(num) {
    console.log('I have ' + num + ' lightsabers.');
}

lightsabers(2);

//-----------------------------------------

var myLightsaberCollection = {
    blue: 1,
    green: 3
}

var lightsabers = function(lightsaberCollection) {
    //code here
    console.log(`I have ${myLightsaberCollection.blue} blue lightsabers`)
    console.log(`I have ${myLightsaberCollection.green} green lightsabers`)
}

lightsabers(myLightsaberCollection);

// Output
// I have 1 blue  
// I have 3 green lightsabers