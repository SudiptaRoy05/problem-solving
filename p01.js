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

var hour = toDay.getHours();
var minutes = toDay.getMinutes();
var second = toDay.getSeconds();

var prepend = (hour >= 12) ? "PM" : "AM";

// convert 24 hour into 12 
hour = (hour >= 12)? hour - 12 : hour;


// check special Case when hour is 0 
if(hour === 0 && prepend === "PM"){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepend = "noon";
    }else{
        hour = 12;
        prepend = "PM";
    }
}


// check special Case when hour is 0
if(hour === 0 && prepend === "AM"){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepend = "MidNight";
    }else{
        hour = 12;
        prepend = "AM";
    }
}

console.log("Current Time is: "+ hour + " : " + minutes + " : " + second + " " +prepend);