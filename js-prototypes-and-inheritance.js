'use strict';

/* var arr = ['red', 'blue', 'green']
Object.defineProperty(Array.prototype, 'last', { get: function() {
    return this[this.length-1]
} })

var last = arr.last
var arr2 = ['one', 'two', 'three']
console.log(arr.last);
console.log(arr2.last); */

/* var myFunc = function() {}
console.log( myFunc.prototype )

var cat = { name: 'Fluffy' }
console.log( cat.__proto__ ) */

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }
    speak() {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White');
console.log(fluffy.constructor);
//fluffy.speak();

/*
// Multiple levels on inheritance
Cat.prototype.age = 4;
var fluffy = new Cat('Fluffy', 'White');
console.log(fluffy.__proto__);
console.log(fluffy.__proto__.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__);
*/

/*
//  Changin a Function's Prototypes
var fluffy = new Cat('Fluffy','White')
var muffin = new Cat('Muffin','Brown')
Cat.prototype = { age:5 };
var snowbell = new Cat('Snowbell', 'White');
console.log(fluffy.age);
console.log(muffin.age);
console.log(snowbell.age)
console.log(Cat.prototype.age); 
*/

/* fluffy.age = 5;
console.log(fluffy.age);
console.log(fluffy.__proto__.age);
console.log(fluffy.hasOwnProperty('age')); */

/* console.log(Cat.prototype);
console.log(fluffy.__proto__)
console.log(Cat.prototype === fluffy.__proto__)
console.log(Cat.prototype);
console.log(fluffy.__proto__)
console.log(muffin.__proto__) */

