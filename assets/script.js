var timeNow = document.querySelector("#currentDay");

var currentTime = moment()

timeNow.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a");



$(".saveBtn").on("click", function() {
    var $parent = $(this).closest("[data-hour]");

    var hour = $parent.data("hour");
    
    var value = $parent.find("textarea").val().trim();

    schedule[hour] = value;

    localStorage.setItem("schedule", JSON.stringify(schedule));
});