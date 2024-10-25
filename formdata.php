<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = htmlspecialchars($_POST['personname']);
    $email = htmlspecialchars($_POST['personemail']);
    $phone = htmlspecialchars($_POST['personphone']);
    $message = htmlspecialchars($_POST['personmessage']);

    // Recipient email address
    $to = "juliarobinek@hotmail.com";  // Replace with your email address

    // Email subject and message
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>