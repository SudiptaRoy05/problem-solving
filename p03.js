// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

var a = 5;
var b = 6;
var c = 7;

var parameter = (a+b+c)/2;

var area = Math.sqrt(parameter*((parameter-a)*(parameter-b)*(parameter-c)));
console.log(parseFloat(area.toFixed(3)));