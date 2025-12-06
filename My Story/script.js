// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message) {
        alert("Thanks for reaching out, " + name + "! I'll get back to you soon.");
        this.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});