document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.className = "error";
            formMessage.classList.remove("hidden");
            return;
        }

        formMessage.textContent = "Your message has been sent!";
        formMessage.className = "success";
        formMessage.classList.remove("hidden");

        form.reset();
    });
});