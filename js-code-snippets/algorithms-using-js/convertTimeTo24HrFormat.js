let time = '11:10:10 pm'; console.log(time.length)
let index = time.toUpperCase().lastIndexOf('PM'); console.log(index)
if (index + 2 === time.length) {
    let hour = time.substr(0, 2); console.log(hour);
    let hourChangedTo24HrFormat = 0
    if (hour !== '12') {
        hourChangedTo24HrFormat = Number(hour) + 12; console.log(hourChangedTo24HrFormat);
    }
    let newtext = time.replace(hour, hourChangedTo24HrFormat); console.log(newtext);
    let finalTime = newtext.substr(0, time.length - 3); console.log(finalTime);
}

// Minified version:
const convertTimeTo24HourFormat = (time = '') => {
    if (time.toUpperCase().lastIndexOf('PM') + 2 === time.length) {
        hour = time.substr(0, 2); let hourChangedTo24HrFormat = 00
        if (hour !== '12') { hourChangedTo24HrFormat = Number(hour) + 12}
        return time.replace(hour, hourChangedTo24HrFormat).substr(0, time.length - 3).trim();
    } else return time.substr(0, time.length - 3).trim();
}

//TESTS:
console.log(convertTimeTo24HourFormat('10:10:10 PM'))
console.log(convertTimeTo24HourFormat('10:10:10 AM'))
console.log(convertTimeTo24HourFormat('10:10:10 pm'))
console.log(convertTimeTo24HourFormat('10:10:10 am'))
console.log(convertTimeTo24HourFormat('12:10:10 am'))
console.log(convertTimeTo24HourFormat('12:10:10 pm'))