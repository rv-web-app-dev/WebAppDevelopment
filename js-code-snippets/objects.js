const example = {
  fname: 'Rakesh',
  lanme: 'Venkat',
  title: 'full stack developer',
  address: {
    housenum: 511,
    street: '10th Main',
    pincode: 560090,
    state: 'KA',
  },
  hasAusPR: true,
};

console.log(typeof example);
console.log(example.address.housenum);
console.log(typeof example.address.housenum);
console.log(typeof example.hasAusPR);
console.log(typeof example.fname);
console.log(typeof example.sex);

//console.log(typeof undeclaredYet); //refrence error
let undeclaredYet; // this happens for let, const, new Class
console.log(typeof undeclaredYet);
let nullObjectIsObject = null; 
console.log(typeof nullObjectIsObject);
let bar={}; let foo=bar;
console.log(typeof foo);

console.log(example.hasOwnProperty('fname'));
console.log(example.hasOwnProperty('sex'));
example.sex = 'Male';
console.log(example.hasOwnProperty('sex'));

let jsonString = JSON.stringify(example);
console.log(jsonString);
let backToJsonObject = JSON.parse(jsonString);
console.log(backToJsonObject.lanme);

// Object.keys -> instead of this we can iterate the key and values using the format below.
for (let key in example){
     console.log(key); 
     console.log(example[key])
    }

// NULL and undefined
var _undefined; // Soemthing that's not assigned , or value thats missing
console.log(_undefined);

var _null = null; // null is no Value clearly.
console.log(_null);

console.log(example.mobileNumber);


var clone = example; // The refrence has been copied. So both are now referring to the same section of memory.
console.log(clone);
console.log(clone.address.street);
clone.sex = 'Female';
console.log(example.sex);
var clone2 = clone;
clone2;
clone2 = {}; // Doing this, reassigned the object reference to a new one.
example;
clone;
clone2;
clone2.sex=''; // Any ops on the props of clone2 is now independent of example or clone.
console.log(example.sex);
var clone3 = example;
clone3;
clone3 = new Object();
clone3;
clone3.sex= '';
console.log(example.sex);


// Coersion - equivalent of type casting in C, C++, Java
var _num = 42;
var _numToStr = String(_num);
console.log(typeof(_num), typeof(_numToStr));

console.log(Boolean('1'));
console.log(Boolean('anystr'));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean());
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));

// Implicit coercion
console.log(typeof(1 + '1'));

console.log(Number(100));
console.log(Number(100.00010101010));
console.log(Number(-113747436437449712897893723897489237498374892374897238947389));
console.log(Number(23456.7332364747484940040404045465464646747474747474));
console.log(Number(100.00010101010));
console.log(Number('0x11'));
var biggestInt = 9007199254740991;
var smallestInt = -9007199254740991;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


// HOISTING
// Variable hoisting -> using a variable that not defined -> NOT ALLOWED.
// console.log(x1); --> You cant access a varaible that has not been defined !!
x1=100;
console.log(x1);

// Function hoisting -> invoking a function thats declared later -> ALLOWED
myfunc(100); 
function myfunc(a){ console.log(a)}
// NOTE:: invoking a function via a variable cant be hosited

// myFuncVar(-20); -> Not allowed as myFuncVar is a variable
var myFuncVar = myfunc;
myFuncVar(20);

// myFunc1(-20000); -> Not allowed as myFunc1 is a variable
var myFunc1 = function(a) {console.log(a)}
myFunc1(10000);
myFunc1(20000);

//Function definitions
var obj = {
  baz: '100',
  foo:'10',
  foo() {return 'bar'},
}
console.log(obj.foo(), obj.foo, obj.baz);

// Inheritence and prototype
var f = function(){this.a=1, this.b=2}; //f is created as a function
var o = new f(); // o is child of f
f.prototype.b=3;
f.prototype.c=4;
console.log(o.a);
// Prototype shawdowing, here it checks b in o, since it found that it wont check in o[[prototype]]
console.log(o.b);
// Check c in o, else check in o[[Prototype]]
console.log(o.c);
// Check d in o, else o[[Prototype]], else o[[Prototype]][[Prototype]]
console.log(o.d);

// You cant call the variable within f directly, as its a function ... and it needs to be invoked.
console.log(f.a);
// the below is also not possible as the current function doesnt return anything
//console.log(f().a);

// Always use new keyword with functions for prototypal inheritence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Summary_of_methods_for_extending_the_protoype_chain



// Inheritence of functions
var z={
  a:1,
  m:function(){return this.a+100;}
};
// y is inherited from z. Hence z becomes the [[Prototype]] of y
var y=Object.create(z);
console.log(z.m());
y.a=2;
console.log(y,z);
// the value of a is now 2 as the this refers to y and not z.
console.log(y.m());

let exIterator = Object.keys(example);
console.log(exIterator);
exIterator.forEach(key => {console.log(example[key])});


