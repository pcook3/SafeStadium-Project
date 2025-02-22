document.addEventListener("DOMContentLoaded", function() {
    const reportForm = document.getElementById("report-form");
    const clearButton = document.getElementById("clear-button");
    const reportTrackingContainer = document.getElementById("report-tracking-container");


    // Handle form submission
    reportForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload


        const shift = document.getElementById("shift").value;
        const reportTo = document.getElementById("reportTo").value;
        const reportDescription = document.getElementById("reportDescription").value;


        const report = {
            shift: shift,
            reportTo: reportTo,
            reportDescription: reportDescription,
            timestamp: new Date().toLocaleString()
        };


        // Add report to tracking section (real-time updates)
        displayReport(report);


        // Clear the form
        reportForm.reset();
    });


    // Handle the "Clear" button click
    clearButton.addEventListener("click", function() {
        reportForm.reset();
    });


    // Display report in the tracking section
    function displayReport(report) {
        const reportElement = document.createElement("div");
        reportElement.classList.add("report");


        reportElement.innerHTML = `
            <p><strong>Shift:</strong> ${report.shift}</p>
            <p><strong>Send Report To:</strong> ${report.reportTo}</p>
            <p><strong>Description:</strong> ${report.reportDescription}</p>
            <p><strong>Timestamp:</strong> ${report.timestamp}</p>
        `;


        reportTrackingContainer.appendChild(reportElement);
    }
});
