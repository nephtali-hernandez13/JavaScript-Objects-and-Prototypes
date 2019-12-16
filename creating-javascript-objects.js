'use strict';

/* First Example
var cat = {
    name: 'Fluffy',
    color: 'White',
    speak: () => { console.log("MeeeeoW") } 
} 
cat.age = 3;
cat.speak();
//console.log(cat); */

/*
Second Example
// Constructor
function Cat(name, color) {
    this.name = name
    this.color = color
}
var cat = new Cat("Fluffy XD", "Black");
console.log(cat); 
*/

/*
// Third Example
var cat = Object.create(Object.prototype, {
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true      
    }
});
console.log(cat);
*/

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    speak() {
        console.log("Meeeeeo")
    }
}

var cat = new Cat('Fluffy', 'White')
console.log(cat);
cat.speak();