import React, { useState } from "react";
import axios from 'axios'
import './EmailBanner.css'

function EmailBanner() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page.

        if (email) {
            if (validateEmail(email)) {
                setMessage(null); // Clear the error message if the email is valid
                axios
                    .post("http://localhost:5000/emailer", {
                        email,
                    })
                    .then((response) => {
                        console.log(response.data); // Log the response data
                        alert("Message sent successfully");
                    })
                    .catch((error) => alert("Error while sending: " + error.message));
            } else {
                setMessage("Please enter a valid email address");
            }
        } else {
            setMessage("Please enter your email address");
        }
    };

    const validateEmail = (email) => {
        // A simple email validation function
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    return (
        <div className="emailbox">
            <div className="emailbox-form">
                <h1>SIGN UP FOR OUR DAILY INSIDER</h1>

                <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Enter Your Email"
                    required="required"
                    onChange={(e) => setEmail(e.target.value)}
                />

                {message && <div className="error-message">{message}</div>}

                <div className="emailbutton" onClick={sendEmail}>
                    SUBSCRIBE
                </div>
            </div>
        </div>
    );
}

export default EmailBanner;
