'use strict';

// There is no need to define the args within a function.
// This is Javascript, not Java !! 
function funcWithoutArgs() { // arguments is an Array, so you can do Array ops on that.
    console.log(typeof arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1000]);
    console.log(typeof arguments);
    var args = Array.from(arguments);
    console.log(typeof args);
    console.log(args);
}
funcWithoutArgs(1, 2, 3);
let aVariable = funcWithoutArgs;
aVariable; //The function shall not be invoked
aVariable(); //Using a () will only invoke the function using the variable.
aVariable = {}; //Assign the variable to an Object
//aVariable(); //During code exec, if the variable gets overwritten by {}, it no longer can be executed !!
let aNewVariable = funcWithoutArgs;

//SCOPING::::::
{
    let aBlockFuncVar = funcWithoutArgs;
    aBlockFuncVar();
    let aNewBlockVar = aNewVariable; // It is possible to access a LET var defined outside the current block.
    aNewBlockVar();
}
//aNewBlockVar; //!!! A LET var defined in another block cannot be accessed outside of that block.
//aNewBlockVar(); //!!! A LET var defined in another block cannot be accessed outside of that block.
{
    //aNewBlockVar; //!!! A LET var defined in another block cannot be accessed outside of that block.
    //aNewBlockVar(); //A LET var defined in another block cannot be accessed outside of that block
}

//Back to functions::::::::

function funcWithArgs(myArg) {
    console.log(arguments);
    console.log(myArg);
    for (let index in arguments) { console.log(arguments[index]) }
}
funcWithArgs(1);
funcWithArgs(33, 44, 55);

function funcWithSpread(...myargs) { // myargs is an array. SO you can perform all Array Ops on that.
    console.log(typeof { ...myargs });
    console.log(typeof myargs);
    console.log(typeof myargs[0]);
    console.log(myargs[0]);
    myargs[5] = '5';
    console.log(myargs[5]);
    console.log(myargs.length);
    console.log(myargs);
    console.log(myargs.pop())
    console.log(myargs);
    console.log(myargs.pop())
    console.log(myargs.pop())
    console.log(myargs.pop())

    //myargs is almost an Array -> MDN apis docs claims its not !! I cud use Array pop() fn.

    var args = [...myargs];
    console.log(typeof args);
    args.reverse();
    console.log(args);
}
funcWithSpread(1, 2, 3);

function funcSpread(...args) {
    console.log(args);
    console.log(args.length);
    console.log(args.reverse());
    //for(let x in args){console.log(x); for(let i in x){console.log(x[i])}
}
funcSpread();

{
    let someObject = {
        fName: 'Rakesh',
        lName: 'Venkat'
    }
    let someAnotherObject = {
        fName: 'Veda',
        lName: 'Rakesh'
    }
    funcSpread(someObject, someAnotherObject);
}

// ???
function myConcat(seperator) {
    var myargs = Array.prototype.slice.call(arguments, 1); // arguments.slice(1);
    console.log(myargs);
    return myargs.join(seperator);
}

console.log(myConcat(',', 'red', 'green', 'blue'));
console.log(myConcat('|', 'orange', 'turquoise', 'violet'));
console.log(myConcat('.', 'yellow', 'cyan', 'magenta'));
console.log(myConcat('~', 'springgreen', 'ocean', 'raspberry'));

function list(type) {
    var result = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join('</li><li>');
    result += '</li></' + type + 'l>'; // end list

    return result;
}
console.log(list('u', 'a', 'b'));

// In non-strict mode, the rest default or destructured parameters dont work.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Closures...
var funcAsVar = function () {
    var hello = 'Hello, ';
    var innerFunc = function () {
        var inner = hello + 'Mr. Rakesh !!';
        console.log(inner);
        return hello;
    }
    return innerFunc;
}

var returnFromInner = funcAsVar()();
console.log(returnFromInner);

// NOTE:: Always add return when using Arrow functions
let func = () => { console.log('inside...'); return 'a' };
console.log(func());
let func2 = () => { 'a' };
console.log(func2());

() => { console.log(1 / 100) }; //How to invoke this function? Its ananymous !!

let funcWithProps = (props) => { console.log(props.a) }
console.log(funcWithProps({ a: 'a' }));
//console.log(funcWithProps()); //Error !! Cannont read a of undefined.

(function () { var a = 2; var b = a; console.log(b, a) })();
console.log("a defined? " + (typeof a === 'undefined'));
console.log("b defined? " + (typeof b === 'undefined'));
//console.log(a,b) // a is not defined

// var a=b=2 is short hand for b=2; var a=b;

//(function() {var a=b=2; console.log(a)})(); // b is not defined
//console.log(a,b) // b is not defined

//c=4; // c is undefined : error
//var d=c; // c is not defined : error


var testThis = { 
    a: '1', 
    func: function () { 
        var self = this;
        console.log(this.b); 
        (function() {console.log(self.a)})()
} };
testThis.func(); //this.b is undefined till here
testThis.b = 2;
testThis.func(); //this.b is now available.

let hello= async () => {
    await console.log('....')
}
hello()
