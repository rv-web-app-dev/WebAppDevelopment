let _number = 125;
let _float = 14.2456666;
console.log(_number);
console.log(_float);
console.log(_number.valueOf());

let expression = 1 * 8 + 90 + (-90) / 8 + -100;
console.log(expression);

let _boolean = false;
console.log(_boolean);
_boolean = true;
console.log(_boolean);
if(_boolean * 10){
    console.log('Can you do boolean and number expression? Yes!!');
} else {
    console.log('Whooooo.. It didnt get into the else.');
}

if(_number){
    console.log('If of a variable gets you true. Ha ha .. thats why javascript is tricky!!')
} 

console.log(_boolean.valueOf());
// For expressions, true is taken as 1 and false is 0. 
let _divideByBoolean = true/true;
console.log(_divideByBoolean);
_divideByBoolean = false/true;
console.log(_divideByBoolean);
_divideByBoolean = false/false;
console.log(_divideByBoolean);
_divideByBoolean = true/false;
console.log(_divideByBoolean);

//Truthy values ...
let _someValue ='Hello world';
console.log(Boolean(_someValue));
let _true = true;
console.log(Boolean(_true));
let _number1 = 1;
console.log(Boolean(_number1));
let _anyNumber = 100;
console.log(Boolean(_anyNumber));
let _negNumber = -20;
console.log(Boolean(_negNumber));
let _Infinity = Infinity;
console.log(Boolean(_Infinity));
let _NegInfinity = -Infinity;
console.log(Boolean(_NegInfinity));

//Falsy values ...
let _emptyVal = '';
console.log(Boolean(_emptyVal));
let _false = false;
console.log(Boolean(_false));
let _number0 = 0;
console.log(Boolean(_number0));
let _null = null;
console.log(Boolean(_null));
let _undefined = undefined;
console.log(Boolean(_undefined));
let _NaN = NaN;
console.log(Boolean(_NaN));
