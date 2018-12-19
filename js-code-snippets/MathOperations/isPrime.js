let isPrime = (number) => {
    for (let divisor = number - 1; divisor > 1; divisor--) {
        //if(Number.isInteger(number/divisor)) return false; 
        if(number % divisor === 0) return false;
    }
    return true;
}

console.log(isPrime(5));

export default isPrime;