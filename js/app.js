const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
 event.preventDefault();

 const name = document.getElementById("name").value.trim();
 const email = document.getElementById("email").value.trim();
 const subject = document.getElementById("subject").value.trim();
 const message = document.getElementById("message").value.trim();

 const body = `Name: ${name}\nEmail: ${email}\nProject: ${subject}\n\n${message}`;

 const mailto = "yaswanthj70@gmail.com";
  + "?subject=" + encodeURIComponent("V-MAX Enquiry: " + subject)
  + "&body=" + encodeURIComponent(body);

 document.getElementById("formStatus").textContent =
  "Opening your email app to send the enquiry.";

 window.location.href = mailto;
});
