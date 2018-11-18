//let calculateMonthlyPayment = function (principal, years, rate) {
let calculateMonthlyPayment = (principal, years, rate) => {    
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    //return monthlyPayment;
    return {principal, years, rate, monthlyPayment, monthlyRate}; // Step 1: Creating Objects from Variables
};

let calculateAmortization = (principal, years, rate) => {
    console.log('calculateAmortization:',principal, years, rate);
    let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];
    for (let y=0; y<years; y++) {
        let interestY = 0;  //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        for (let m=0; m<12; m++) {
            let interestM = balance * monthlyRate;       //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
        amortization.push({principalY, interestY, balance});
    }
    return {monthlyPayment, monthlyRate, amortization};    
}

//document.getElementById('calcBtn').addEventListener('click', function () {
document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
        let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);
    //let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    // Step 2: Creating Variables from an Object using Destructuring
    let object = calculateMonthlyPayment(principal, years, rate);
    console.log("Principal ",object.principal); 
    console.log("monthlyPayment ",object.monthlyPayment); 
    console.log("monthlyRate ",object.monthlyRate); 
    console.log("rate ",object.rate);
    console.log("years ",object.years); 
    document.getElementById("monthlyPayment").innerHTML = object.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(month => console.log(month));
});
