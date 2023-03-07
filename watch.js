let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(()=>{
const date = new Date();
let hour = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let getDay = date.getDay();
let getDate = date.getDate();
let getMonth = date.getMonth();
let getYear = date.getFullYear();
    
if(hour < 10){
    hour = "0"+ date.getHours();
}
else if(mins < 10){
    mins = "0"+ date.getMinutes();
}
if(secs < 10){
    secs = "0"+ date.getSeconds();
}
if(getDate < 10){
    getDate = "0" + date.getDate();
}

const fullTime = document.getElementById("full-times");
fullTime.innerText = `${hour} : ${mins} : ${secs} `;

const fullDate = document.getElementById("full-date");
fullDate.innerText = `${days[getDay]} ${getDate} ${months[getMonth]} ${getYear}`;

},1000);