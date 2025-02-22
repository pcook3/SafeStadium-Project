document.addEventListener("DOMContentLoaded", function () {
    const statusText = document.getElementById("shift-status");
    const startTime = "02:00 PM";
    const endTime = "07:00 PM";
    statusText.innerText += ` Your shift is from ${startTime} to ${endTime}.`;


    // Hardcoded shift schedule 
    let isScheduled = true;

    // Update the UI
    if (isScheduled) {
        statusText.innerHTML = "You are scheduled for a shift today. <a href='shift-details.html' id='shift-link'>View Shift Details</a>";
        statusText.style.color = "green";
    } else {
        statusText.innerText = "You do not have a shift today.";
        statusText.style.color = "red";
    }
});
