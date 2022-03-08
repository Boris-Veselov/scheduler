var timeNow = document.querySelector("#currentDay");

var currentTime = moment()

timeNow.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a");


var workday = JSON.parse(localStorage.getItem("workday")) 

localStorage.setItem("workday", JSON.stringify(workday));
