const world = 'world';
const ex = '  !!      ';
let example = `Hello ${world} ${ex}`; // ES6 has instroduced interpolation using ``, so we can use ${} to do that as shown here
console.log(example);

// Strings have length prop
console.log(example.length);
// Upper case conversion 
console.log(example.toUpperCase());
// Strings can be trimmed, the space on either side is taken away !!
console.log(ex + '.');
console.log(`${ex.trim()} .`);
console.log(ex.length);
console.log(ex.trim().length);
// String has the split() function
console.log(example.split(' '));
console.log(example.trim().split(' '));
console.log();

let checkStr = '';
console.log(''.toUpperCase())
