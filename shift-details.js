document.addEventListener("DOMContentLoaded", function () {
    const shiftDate = document.getElementById("shift-date");
    const shiftTime = document.getElementById("shift-time");
    const shiftLocation = document.getElementById("shift-location");
    const responsibilities = document.getElementById("shift-responsibilities");
    const timelineContainer = document.getElementById("timeline-container");

    // Hardcoded shift schedule
    const isScheduled = true; 

    // Hardcoded shift details
    const shiftDetails = {
        date: new Date().toDateString(), 
        time: "2:00 PM - 7:00 PM",
        location: "Stillwell Baseball Stadium",
        tasks: "\nSet up vendor tents, \nRetrieve foul balls, \nBreak down vendor tents, \nSite cleanup."
    };

    // Get saved completion status from localStorage (or default to all false)
    const savedCompletion = JSON.parse(localStorage.getItem("taskCompletion")) || {};

     // Hardcoded shift timeline
     const timeline = [
        { time: "2:00 PM", task: "Start Shift", completed: false },
        { time: "2:10 PM", task: "Vendor Tent Setup", completed: false },
        { time: "3:00PM", task: "Game Starts", completed: false },
        { time: "3:10PM", task: "Retrieve Foul Balls", completed: false },
        { time: "4:00PM", task: "Meal Break", completed: false },
        { time: "5:00 PM", task: "Game Ends", completed: false },
        { time: "5:10 PM", task: "Site Cleanup", completed: false },
        { time: "7:00 PM", task: "End Shift", completed: false }
    ];

    // Display shift details if scheduled, otherwise show "No shift today" message
    if (isScheduled) {
        shiftDate.innerText = `${shiftDetails.date}`;
        shiftTime.innerText = `${shiftDetails.time}`;
        shiftLocation.innerText = `${shiftDetails.location}`;
        responsibilities.innerText = `${shiftDetails.tasks}`;

        // Generate timeline events
    timeline.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("timeline-event");

        // Check if this task was completed before
        if (savedCompletion[event.id]) {
            eventDiv.classList.add("completed");
        }

        eventDiv.innerHTML = `
            <div class="dot" data-id="${event.id}"></div>
            <p><strong>${event.time}</strong></p>
            <p>${event.task}</p>
        `;

        timelineContainer.appendChild(eventDiv);
    });


        // Add click event to toggle completion status
    document.querySelectorAll(".dot").forEach(dot => {
        dot.addEventListener("click", function () {
            const taskId = this.getAttribute("data-id");
            const parentEvent = this.parentElement;

            // Toggle completed class
            if (parentEvent.classList.contains("completed")) {
                parentEvent.classList.remove("completed");
                savedCompletion[taskId] = false; // Update state
            } else {
                parentEvent.classList.add("completed");
                savedCompletion[taskId] = true; // Update state
            }

            // Save updated completion state
            localStorage.setItem("taskCompletion", JSON.stringify(savedCompletion));
        });
    });
} 
    else {
        document.getElementById("shift-container").innerHTML = `
            <h2>You do not have a shift today.</h2>
            <a href='my-shifts.html'>Back to My Shifts</a>
        `;
    }
});
