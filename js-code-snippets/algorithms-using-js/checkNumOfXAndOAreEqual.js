/*
 Function:: Check if the number of x and o are same.
*/
function checkIfNumberOfXandOareEqual(str){
    var x = 0,
       o = 0;
     var chars = str.split('');
     
     chars.forEach(char => {
       if (char.toLowerCase() === 'x') x++;
       if (char.toLowerCase() === 'o') o++;
     });
     
     return (x === o); 
     
   }
   
   console.log(checkIfNumberOfXandOareEqual('xooxxo'));