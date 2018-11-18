'use strict';

(function getCurrentTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currDate = new Date();
    var day = days[currDate.getDay()];
    console.log(' Today is : ', day);
    var hours = getTimeIn12HrFormat(currDate);
    var timeOfTheDay = `${hours} : ${currDate.getMinutes()} : ${currDate.getSeconds()}`;
    console.log(' Current time is: ', timeOfTheDay);
})();

function getTimeIn12HrFormat(currDate) {
    var hours = currDate.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours} ${ampm}`;
}
