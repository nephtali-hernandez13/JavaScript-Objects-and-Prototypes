'use strict';
/*
// Using Bracket Notation to Access JS Properties
var cat = {
    name: 'Fluffy',
    color: 'White'
}
cat['Eye color'] - 'Green'
console.log(cat['Eye color']);
*/
/*

// Using JS Property Descriptors 
var cat = {
    name: 'Fluffy', 
    color: 'White'
}
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
*/

/*
// Using the writable attribute
var cat = {
    name: { first: 'Fluffy', last: 'LaBeouf' }, 
    color: 'White'
}
Object.defineProperty(cat, 'name', { writable: false})
Object.freeze(cat.name)
cat.name.first = 'Scratchy'
//console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
console.log(cat.name);
*/

var cat = {
    name: { first: 'Fluffy', last: 'LaBeouf' }, 
    color: 'White'
}

//Object.defineProperty(cat, 'name', {configurable: false});
//delete cat.name;
//console.log(cat.name);
//console.log(JSON.stringify(cat));
//console.log(cat['name'])
// For .. in
/*for( var propertyName in cat ) {
    console.log(propertyName + ": " + cat[propertyName]);
}
console.log(Object.keys(cat));*/

//Getters and Setters

var cat = {
    name: { first: 'Fluffy', last: 'LaBeouf' },
    color: 'White'
}

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
});

cat.fullName = 'Muffin Top'
console.log( cat.fullName );