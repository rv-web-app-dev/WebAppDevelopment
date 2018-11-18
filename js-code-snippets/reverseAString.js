var strToReverse = 'w3resource';
var charsInStr = strToReverse.split('');

charsInStr.reverse();
console.log(charsInStr);

var reverseStr = '';
charsInStr.forEach(c => {
    reverseStr = reverseStr.concat(c);
});
console.log(reverseStr);