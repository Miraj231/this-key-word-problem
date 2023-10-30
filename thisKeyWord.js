// implicit binding
// exlicit binding
// new binding
// window binding

// implicit binding example is here


// var sakib = {
//     name: 'sakib',
//     age: 35,
//     printPlayerName:function(){
//         console.log(this.name);
//     }
// }

// sakib.printPlayerName()

// var printPlayerFunction = function(obj){
//     obj.printPlayerName = function(){
//         console.log(this.name);
//     }
// }

// var sakib = {
//     name: 'sakib',
//     age: 35
// };

// var tamim = {
//     name: 'tamim',
//     age: 35
// };

// printPlayerFunction(sakib);
// printPlayerFunction(tamim);
// sakib.printPlayerName();
// tamim.printPlayerName()


// var person = function(name, age){
//     return{
//         name: name,
//         age: age,
//         printName: function(){
//             console.log(this.name);
//         }
//     }
// }
// let sakib = person('sakib', 36);
// sakib.printName();


// var person = function(name, age){
//     return{
//         name: name,
//         age: age,
//         printName: function(){
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr.xxx',
//             printName: function(){
//                 console.log(this.name);
//             }
//         }
//     }
// }
// let sakib = person('sakib', 36);
// sakib.printName();
// sakib.father.printName();

// implicit binding example ended here





// exlicit binding example is stard here
// function myFunctionObj(obj){
//     obj.printPlayerName = function(){
//         console.log(`The player name is ${this.name}. He is ${this.age} year old and the wold cup got on ${this.worldCoup}`);
//     };
//     obj.printPlayerName2 = function(){
//         console.log(`The player name is ${this.name}. He is ${this.age} year old and the wold cup got on ${this.worldCoup}`);
//     };
// };

// const massi = {
//     name:'mr. massi',
//     age: 50,
//     worldCoup: 2023,
// };
// const nymer = {
//     name: 'Nymar',
//     age: 50,
// }

// myFunctionObj(massi);
// myFunctionObj(nymer);
// massi.printPlayerName();
// nymer.printPlayerName2()



// exlicit binding example ended here


// let printName = function(v1,v2, v3){
//     console.log(`${this.name} is ${v1},${v2} & ${v3}`);
// }

// const sakib = {
//     name: 'sakib',
//     age: 35
// }
// let v1 = 'Handsome';
// let v2 = 'All-rounder';
// let v3 = 'Best player';
// let v = [v1, v2, v3]
// // printName.call(sakib, v1, v2, v3);// cell mathord can take single paramitars. not array
// // printName.apply(sakib, v);// apply mathord can take an array paramitars
// let result = printName.bind(sakib, v) // bind mathord return a function dafination
// result()

// new binding

// function person (name, age){
//     // let this = Object.create(null)
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is a ${this.age} years old`);
//     // return this
// }

// let sakib = new person('sakib', 35);

// window binding

"use strict"
let printName = function(){
    console.log(this.name);
}

let sakib = {
    name: 'sakib'
}
printName()