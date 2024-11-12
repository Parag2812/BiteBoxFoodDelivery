import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <img 
                src="https://media.licdn.com/dms/image/v2/D5612AQFa97S4DR9PXg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701856660846?e=1736985600&v=beta&t=bWxKzBW08L92ealamSIlC-ZkDns2wc44RndX-Z1eLzk"
                alt="About Us"
                className="about-image-second"
            />
            <h1>About Us</h1>
            <p>Welcome to Swiggy! We are committed to providing delicious food from the best restaurants right to your doorstep. With our extensive network of partners and a seamless ordering experience, we strive to make your mealtime memorable.</p>
            <h2>Our Vision</h2>
            <p>To be the most preferred food delivery service across cities, bringing joy to people through the taste of great food.</p>
            


            <h2>Our Values</h2>
            <ul>
                <li>Quality: Ensuring top-notch service and food quality</li>
                <li>Customer Satisfaction: Prioritizing customer delight</li>
                <li>Innovation: Continuously improving our offerings</li>
                <li>Integrity: Maintaining transparency and trust</li>
            </ul>


        </div>
    );
};

export default AboutUs;
