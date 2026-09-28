// ================================
// MOBILE NAVIGATION
// ================================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});


// ================================
// PROJECT BUTTON
// ================================

function openProject(projectPath) {
    window.open(projectPath, "_blank");
}


// ================================
// CONTACT FORM
// ================================

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been sent.";

    formMessage.style.color = "#d994eb";

    // Clear form
    document.querySelector("form").reset();
}


// ================================
// GOTHIC FADE-IN EFFECT
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function(section) {
    observer.observe(section);
});


// ================================
// CURRENT YEAR
// ================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " + year + " Your Name. All Rights Reserved.";
}
