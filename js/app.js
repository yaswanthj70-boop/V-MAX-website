
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const get = id =>
            document.getElementById(id)?.value.trim() || "Not provided";

        const name = get("name");
        const email = get("email");
        const business = get("businessName");
        const service = get("subject");
        const duration = get("duration");
        const budget = get("budget");
        const deadline = get("deadline");
        const reference = get("referenceLink");
        const message = get("message");

        const body = [
            "NEW V-MAX PROJECT ENQUIRY",
            "",
            "Customer: " + name,
            "Email: " + email,
            "Business: " + business,
            "Service: " + service,
            "Video duration: " + duration,
            "Budget: " + budget,
            "Deadline: " + deadline,
            "Reference link: " + reference,
            "",
            "Project details:",
            message
        ].join("\\n");

        const mailto = "mailto:" + "yaswanthj70@gmail.com" +
            "?subject=" + encodeURIComponent("V-MAX Project Enquiry - " + service) +
            "&body=" + encodeURIComponent(body);

        document.getElementById("formStatus").textContent =
            "Opening your email app...";

        window.location.href = mailto;
    });
}
