
  // Open Login Modal
  function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }
  
  // Close Login Modal
  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  // Open Contact Form
  function openContactForm() {
    document.getElementById('contactForm').style.display = 'flex';
  }
  
  // Close Contact Form
  function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
  }

  function handleContactForm(event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Prepare the email content
    const emailContent = `
      Name: ${name}\n
      Email: ${email}\n
      Message: ${message}
    `;
  
    // Send email using SMTP.js (or connect to a backend server)
    Email.send({
      SecureToken: "YOUR_SMTPJS_SECURE_TOKEN", // Replace with your Secure Token from SMTP.js
      To: "bannakuldeepsingh68@gmail.com", // Replace with your Gmail address
      From: email,
      Subject: "New Contact Form Submission",
      Body: emailContent,
    }).then((response) => {
      alert("Email sent successfully!");
    }).catch((error) => {
      alert("Failed to send email. Please try again.");
      console.error(error);
    });
  
    // Forward to WhatsApp
    const whatsappNumber = "7073582368"; // Replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent(
      `New Contact Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  
    // Close the contact form
    closeContactForm();
  }
  