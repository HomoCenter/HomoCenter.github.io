// Set the date we're counting down to
var countDownDates = [
    new Date("May 23, 2024 08:56:00").getTime(),
    new Date("May 30, 2024 08:56:00").getTime(),
    new Date("June 30, 2024 08:56:00").getTime(),
    new Date("May 23, 2025 08:56:00").getTime(),
    new Date("May 10, 2024 08:56:00").getTime(),
]

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
    for (i in countDownDates) {
        // Find the distance between now and the count down date
        var distance = countDownDates[i] - now;

        if (distance > 0) {
            // Time calculations for hours, minutes and seconds
            var hours = Math.floor(distance / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id=""
            document.getElementById("timer_" + i.toString()).innerHTML = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
        } else {
            // If the count down is finished
            document.getElementById("timer_"+ i.toString()).classList.add("invisible");
        }
    }

}, 1000);
