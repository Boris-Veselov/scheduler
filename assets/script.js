$(document).ready(function(){

    // current day on top
    var currentDay = moment().format('dddd') + " " + moment().format("MMM DD, YYYY - hh:mm:ss a");

    var hour = moment().format('h:mm:ss a');

    var textareaFill;

    var hourSpan; 

    // var for each hour
    var hour9 = $("9am");
    var hour10 = $("10am");
    var hour11 = $("11am");
    var hour12 = $("2pm");
    var hour1 = $("1pm");
    var hour2 = $("2pm");
    var hour3 = $("3pm");
    var hour4 = $("4pm");
    var hour5 = $("5pm");

    var everyHour = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];
    $("#currentDay").text(currentDay);

    // background change for past, present and future
    function colorChange () {
        $(".textarea").each(function () {
                var timeCheck = parseInt($(this).attr("id"));
                hour = parseInt(hour);
                if (hour > timeCheck) {
                    $(this).addClass("past");
                } else if (hour < timeCheck) {
                    $(this).addClass("future");
                } else {
                    $(this).addClass("present");
                }
            });
    }
    // button for saving task
    textInput()
    colorChange()
    // Save button
    $(".saveBtn").on("click", function(){
        console.log(this)
    textareaFill = $(this).siblings(".textarea").val();
    hourSpan = $(this).siblings(".hour").text();
    localStorage.setItem(hourSpan, textareaFill);
    })



    // local storage functions
    function textInput() {
        var event9 = JSON.parse(localStorage.getItem("9:00am"));
        hour9.val(event9);
        var event10 = JSON.parse(localStorage.getItem("10:00am"));
        hour10.val(event10);
        var event11 = JSON.parse(localStorage.getItem("11:00am"));
        hour11.val(event11);
        var event12 = JSON.parse(localStorage.getItem("12:00pm"));
        hour12.val(event12);
        var event1 = JSON.parse(localStorage.getItem("1:00pm"));
        hour1.val(event1);
        var event2 = JSON.parse(localStorage.getItem("2:00pm"));
        hour2.val(event2);
        var event3 = JSON.parse(localStorage.getItem("3:00pm"));
        hour3.val(event3);
        var event4 = JSON.parse(localStorage.getItem("4:00pm"));
        hour4.val(event4);
        var event5 = JSON.parse(localStorage.getItem("5:00pm"));
        hour5.val(event5);
    }

    var workday = JSON.parse(localStorage.getItem("workday")); 

    // localStorage.setItem("workday", JSON.stringify(workday));

})
