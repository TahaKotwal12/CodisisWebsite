const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const { log } = require('console');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: 'your-smtp-host',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: 'codisisofficial@gmail.com',
        pass: 'codisis@0987'
    }
});

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'your-email@example.com',
        to: 'recipient@example.com',
        subject: 'New Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
    };

    try {
   
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Thank you for your message! We will get back to you soon.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});