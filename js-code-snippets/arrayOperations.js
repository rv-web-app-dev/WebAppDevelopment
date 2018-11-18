let elements = [1,-1, NaN, Infinity, 'hello', 'a', true, false ];
let myList = ['B','C','D','E','F'];

myList.push('G');
console.log(myList);
myList.pop()
console.log(myList);

myList.unshift('A');
console.log(myList);
myList.shift();
console.log(myList);

let myNewList = myList.slice(0,2);
console.log(myNewList)
myList.splice(0,2);
console.log(myList);

myList.sort();
console.log(myList);

let myBigList = myList.concat('G','H','I','J','K');
console.log(myList);
console.log(myBigList);

myList.copyWithin(1,0,2);
console.log(myList);

var myListIter = myList.entries();
console.log(myListIter.next().value);
console.log(myListIter.next().value);
console.log(myListIter.next().value);

myList.fill('A',0,2);
console.log(myList);

let myFilteredList = myList.filter((el, index, list)=> {
    return (index % 2 === 0);
});
console.log(myFilteredList);


let myFilteredList1 = myList.filter((el,index)=> {
    return (index % 2 === 0);
});
console.log(myFilteredList1);

let myFoundlist = myList.find((value, index, array)=>{return index % 2 === 0 });
console.log(myFoundlist);

let index = myList.findIndex((value, index, array) => { return index % 2 === 0} );
console.log(index);

let myForEachList = [];
myList.forEach((value) => { myForEachList.push(`${value}XXX`)} );
console.log(myForEachList);

console.log(myList.includes('A',0));

console.log(myList.indexOf('A',1));

console.log(myList.join('&'));

console.log(myList.keys().next().value);

console.log(myList.lastIndexOf('E'));

console.log(myList.length);

let myMapList = myList.map((val,index, arr)=> {return `${val}YYY`});
console.log(myMapList);

myMapList = myList.map((val)=> {return `${val}ZZZZ....`});
console.log(myMapList);

let myReducedList = myList.reduce((prevVal, currVal, currIndex, arr) => {
    return prevVal + currVal;});
console.log(myReducedList);

console.log(myList.reverse());
console.log(myList);
myList.reverse();
console.log(myList);

console.log(myList.toString());

console.log(myList.toLocaleString());

console.log(myList.values);
