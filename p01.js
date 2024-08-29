/**
 * 1. Write a JavaScript program to display the current day and time in the following format. 
 * Sample Output : Today is : Tuesday.
 * Current time is : 10 PM : 30 : 38
*/

var toDay = new Date();

var day = toDay.getDay();
// console.log(day)

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is : " + dayList[day]);