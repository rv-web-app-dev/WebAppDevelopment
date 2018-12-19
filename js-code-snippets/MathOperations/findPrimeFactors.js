import isPrime from './isPrime';

let findPrimeFactors = (number) => {
    let primeFactors = [];
    for (let index = 2; index <= number / 2; index++) {
        if (isPrime(index)) {
            if (number % index === 0) {
                primeFactors.push(index);
            }
        }
    }
    return primeFactors;
}

console.log(findPrimeFactors(12));
export default findPrimeFactors;