"use strict";
// step 4
var firstName = 'Simon';
// step 5
var numstates = 50;
//step 6
var four = 4;
var five = 5;
//step 7
var result = four + five;
//console.log(result);
// Step 8
function sayHello() {
    alert("Hello world!");
}
sayHello();
//if age < 21 >>> alert ("Sorry " + name + ", you aren't old enough to view this page!")
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    function getLength(sentence) {
        return sentence.length;
    }
    // Step 14
    var hwlength = getLength('Hello World!');
    if (hwlength % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var veggies = ['mushroom', 'avocado', 'tomato', 'sweet-potato'];
for (var i = 0; i < veggies.length; i++) {
    //  sayHello();
    //  checkAge();
    console.log(veggies[i]);
}
// step 11
var pet = [
    {
        name: 'Harry',
        breed: 'Cat',
    },
    {
        name: 'Nitro',
        breed: 'Dog',
    }
];
for (var i = 0; i < pet.length; i++) {
    console.log(pet[i]);
}
// Step 12
var person1 = {
    name: 'Billy',
    age: 30
};
var person2 = {
    name: 'Sally',
    age: 25
};
var person3 = {
    name: 'Johnny',
    age: 20
};
var person4 = {
    name: 'Curly',
    age: 15
};
var person5 = {
    name: 'Moe',
    age: 10
};
var people = [person1, person2, person3, person4, person5];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
    console.log(people.length);
}
