document.addEventListener("DOMContentLoaded", function () {
    const statusText = document.getElementById("shift-status");


    // Hardcoded shift schedule 
    const isScheduled = true;

    // Update the UI
    if (isScheduled) {
        statusText.innerHTML = "You are scheduled for a shift today. <a href='shift-details.html' id='shift-link'>View Shift Details</a>";
        statusText.style.color = "green";
    } else {
        statusText.innerText = "You do not have a shift today.";
        statusText.style.color = "red";
    }

});
