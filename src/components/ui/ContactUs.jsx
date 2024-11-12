import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-us">
            <img
                src="https://framerusercontent.com/images/RcxpsRPrSJ4hgVuBYvC2R3EjVNI.jpg"
                alt="Contact Us"
                className="contact-image"
            />
            <h1>Contact Us</h1>
            <p>If you have any questions, please feel free to reach out to us. We’re here to help you!</p>
            <div className="contact-info">
                <h3>Email:</h3>
                <p>imparag2812@gmail.com</p>
                <h3>Phone:</h3>
                <p>+91 123-456-7890</p>
                <h3>Address:</h3>
                <p>28 Khau Galli, Food City, Pune - Maharashtra</p>
            </div>
            <p className="developer">Developed by Parag</p>
        </div>
    );
};

export default ContactUs;
