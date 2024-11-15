// scripts.js
function loadSection(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadSection("about", "about.html");
    loadSection("resume", "resume.html");
    loadSection("projects", "projects.html");
    loadSection("recommendations", "recommendations.html");
    loadSection("contact", "contact.html");
});
