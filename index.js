document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.querySelector("input[type='text']").value;
            const email = document.querySelector("input[type='email']").value;
            const message = document.querySelector("textarea").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                form.reset();
            } else {
                alert("Please fill out all fields before submitting.");
            }
        });
    }

    // Mobile menu toggle (for future enhancements)
    const navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
        navToggle.addEventListener("click", function() {
            document.querySelector("nav ul").classList.toggle("show-nav");
        });
    }
});
