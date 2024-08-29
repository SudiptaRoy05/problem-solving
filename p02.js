// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var toDay = new Date();

var dd = toDay.getDate();
var mm = toDay.getMonth();
var yyyy = toDay.getFullYear();

if(dd<10){
    dd = "0" + dd;
}

if(mm<10){
    mm = "0" + mm;
}

toDay = mm + "-" + dd +"-"+ yyyy;
console.log(toDay)

toDay = mm + "/" + dd +"/"+ yyyy;
console.log(toDay)


toDay = dd + "/" + mm +"/"+ yyyy;
console.log(toDay)