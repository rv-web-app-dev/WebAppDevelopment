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

/* 
slice(): Returns new array, Original not affected. 
    :slice(begin,end): slice from begin to end (end not included). 
    :begin: Optional. Array starts from 0 if Undefined
    :end: Optional (if not specified, end=arr.length)
*/
    let myNewList = myList.slice(0,2);
    console.log(myNewList);
    let startIndex; // If undefined, begin=0
    let getFirstThreeValues = myList.slice(startIndex,3);
    console.log(getFirstThreeValues);
    let endIndex; // If undefined, end=EndofArray.
    let sliceFrom2Index = myList.slice(1,endIndex);
    console.log(sliceFrom2Index);
    let sameAsOriginal = myList.slice(); //If not specified, begin=0,end=EndofArray
    console.log(sameAsOriginal);
/*
splice(): Changes original array. Remove/Add
    :array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    :start:Position to start; If -ve (ex: -n, position=arrlength-n); 
    :deleteCount:No. of elements to delete; If 0/-ve no elements will be deleted. Only Addition
    :items: The items to add (if deleteCount=0/-ve, then this is mandatory)
*/
    console.log(myList);
    myList.splice(0,2);
    console.log(myList);
    myList.splice(0,0,'B','C');
    console.log(myList);
    myList.splice(0,6); //deleteCount > arr.length
    console.log(myList);
    myList.splice(0,0,'B','C','D','E','F'); // Add elements.
    myList.splice(-1,1); //Start: negative
    console.log(myList);
    myList.splice(-1,0); // No effect
    console.log(myList);
    myList.splice(-1,0,'X'); // Start: negative
    console.log(myList);

let allChars = ['a','A','','1','$'];
console.log(allChars.sort());

myList.sort();
console.log(myList);

let myBigList = myList.concat('G','H','I','J','K');
console.log(myList);
console.log(myBigList);


/*
copyWithin(): shallow copy within same array without change of size of the array.
    :arr.copyWithin(target[, start[, end]])
    :target: +ve[position to copy(0 index based)];-ve[count from end];>arr.length[no copy];<>0content will be trimmed.
    :start:Optional(default=0);+ve[where to start],-ve[count from end]
    :end:Optional(default=arr.length);+ve[copy till index];-ve[counted from end]:end not included!!
*/
myList.copyWithin(1,0,2);
console.log(myList);
myList.copyWithin(2,-2,3);
console.log(myList);

var myListIter = myList.entries();
console.log(myListIter.next().value);
console.log(myListIter.next().value);
console.log(myListIter.next().value);

/*
fill(): Fills the value with targetValue in original Array 
    :arr.fill(value[, start[, end]])
    :value: Value to fill an array.
    :start : Defaults to 0
    :end: Defaults to arr.length
*/
myList.fill('A',0,2);
console.log(myList);
myList.fill('$');
console.log(myList);
myList.fill('*',2);
console.log(myList);


/*
filter: Returns a subset of array for callback returning True.
    :arr.filter(callback(element[, index[, array]])[, thisArg])
    :returns: Array (new array with the elements that pass the test)
*/
myList=['1','2','3','4'];
let myFilteredList = myList.filter((el, index, list)=> {
    return (index % 2 === 0);
});
console.log(myFilteredList);
let myFilteredList1 = myList.filter((el,index)=> {
    return (index % 1 === 0);
});
console.log(myFilteredList1);

/*
find():returns the value of the first element in the array that satisfies the provided testing function.
    :arr.find(callback(element[, index[, array]])[, thisArg])
*/
let myFoundlist = myList.find((value, index, array)=>{return index % 2 === 0 });
console.log(myFoundlist);
/*
findIndex():
    :arr.findIndex(callback(element[, index[, array]])[, thisArg])
*/
let index = myList.findIndex((value, index, array) => { return index % 2 === 0} );
console.log(index);

/*
forEach(): calls callback for each element of array. 
    :Returns:undefined
*/
let myForEachList = [];
myList.forEach((value) => { myForEachList.push(`${value}XXX`)} );
console.log(myForEachList);

/*
includes():
    :arr.includes(searchElement[, fromIndex])
*/
console.log(myList.includes('A',0));

/*
indexOf():
    :Search array based on search clause within array.
    :Return: index
*/
console.log(myList.indexOf('A',1));
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));//Start searching from index=2
console.log(beasts.indexOf('giraffe'));//Index to search is empty, defaults to 0,search entire array.

/*
join(): returns new string by concatenating all array values based on join string.
*/
console.log(myList.join('&'));
let array=['Fire','Wind','Water'];
console.log(array.join('='));

/*
keys(): method returns a new Array Iterator object that contains the keys for each index in the array.
    :returns:index of each element.
*/
console.log(myList.keys().next().value);
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();
for (let key of iterator) {
    console.log(key); 
}
/*
lastIndexOf(): returns the last index at which a given element can be found in the array, or -1 if it is not present. 
    :fromIndex:The array is searched backwards, starting at fromIndex.
*/
console.log(myList.lastIndexOf('E'));
/*
length(): size of array
*/
console.log(myList.length);

/* 
map(): callback to be called for each array element. Used for converting one array to another.
    :
 */
let myMapList = myList.map((val,index, arr)=> {return `${val}YYY`});
console.log(myMapList);

myMapList = myList.map((val)=> {return `${val}ZZZZ....`});
console.log(myMapList);

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
function square(el){return el*el}
let rootSq=roots.map(square);
console.log(rootSq);

/*
reduce(): executes a reducer function (that you provide) on each member of the array
    Returns: Single value.
*/
console.log(myList);
let myReducedValue = myList.reduce((prevVal, currVal, currIndex, arr) => {
    return prevVal + currVal});
console.log(myReducedValue);
/*
 reduceRight(): applies a function against an accumulator and each value of the array (from right-to-left)
    :accumulator:The value previously returned in the last invocation of the callback, or initialValue, if supplied.
    :currentValue:The current element being processed in the array.
     Returns: Single value.
*/
const array2 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
  console.log(array2);


console.log(array1);
console.log(myList.reverse());
console.log(myList);
myList.reverse();
console.log(myList);

console.log(myList.toString());

console.log(myList.toLocaleString());

/* 
values(): returns a new Array Iterator object that contains the values for each index in the array.
  :Return:value of each element.
 */
console.log(myList.values);

/*
values() -> not working!!
var arr = ['w', 'y', 'k', 'o', 'p'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}
*/

// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array