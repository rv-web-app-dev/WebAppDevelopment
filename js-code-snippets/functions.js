'use strict';

function funcWithoutArgs(){
    console.log(arguments[0]);
    console.log(arguments[1000]);
    console.log(typeof arguments); 
    var args = Array.from(arguments);
    console.log(typeof args); 
}
funcWithoutArgs(1,2,3);

function funcWithSpread(...myargs){
    console.log(typeof {...myargs});
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
funcWithSpread(1,2,3);

function funcSpread(...args){
    console.log(args);
    console.log(args.length);
    console.log(args.reverse());
}
funcSpread();

// ???
function myConcat(seperator){
    var myargs = Array.prototype.slice.call(arguments, 1);
    return myargs.join(seperator);
}

console.log(myConcat(',','red','blue','green'));
console.log(myConcat('. ','red','blue','violet'));

function list(type) {
    var result = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join('</li><li>');
    result += '</li></' + type + 'l>'; // end list
  
    return result;
  }
console.log(list('u','a','b'));

// In non-strict mode, the rest default or destructured parameters dont work.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Closures...
var funcAsVar = function () {
    var hello ='Hello, ';
    var innerFunc = function(){
        var inner = hello + 'Mr. Rakesh !!';
        console.log(inner);
        return hello;
    }
    return innerFunc;
}

var returnFromInner = funcAsVar()();
console.log(returnFromInner);

