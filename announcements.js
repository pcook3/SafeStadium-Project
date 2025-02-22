document.addEventListener("DOMContentLoaded", function() {
    fetchAnnouncements();
});


function fetchAnnouncements() {
    fetch("announcements.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("announcements-container");
            container.innerHTML = ""; // Clear previous content


            if (data.length === 0) {
                container.innerHTML = "<p>No announcements at this time.</p>";
                return;
            }


            data.forEach(announcement => {
                const announcementElement = document.createElement("div");
                announcementElement.classList.add("announcement");
                announcementElement.innerHTML = `
                    <p><strong>${announcement.timestamp}</strong> - ${announcement.message}</p>
                `;
                container.appendChild(announcementElement);
            });
        })
        .catch(error => {
            console.error("Error fetching announcements:", error);
            document.getElementById("announcements-container").innerHTML = "<p>Error loading announcements.</p>";
        });
}
