var year = 1992;

function checkIfItsLeapYear(year) {
    if (!isNaN(year)) {
        let yearIs = ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) ? 
            'Leap year' : 'Not a Leap year';
        console.log(yearIs);
    }
}

//x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

checkIfItsLeapYear(year);

//https://support.microsoft.com/en-in/help/214019/method-to-determine-whether-a-year-is-a-leap-year