import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>BiteBox One</p>
                        <p>Restro Dineout</p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Help & Support</p>
                        <p>Partner with Us</p>
                        <p>Ride with Us</p>
                    </div>

                    <div className="footer-section">
                        <h3>Legal</h3>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                        <p>Privacy Policy</p>
                        <p>Investor Relations</p>
                    </div>

                    <div className="footer-section">
                        <h3>Available in:</h3>
                        <p>Bangalore</p>
                        <p>Gurgaon</p>
                        <p>Hyderabad</p>
                        <p>Delhi</p>
                        <p>Mumbai</p>
                        <p>Pune</p>
                    </div>

                    <div className="footer-section">
                        <h3>Social Links</h3>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>For a better experience, download the Swiggy app now</p>
                    <div className="app-links">
                        <span>Download Android App</span> | <span>Download iOS App</span>
                    </div>
                    <p>&copy; 2024 BiteBox Limited</p>
                    <a href="https://www.linkedin.com/in/parag28" target="_blank" rel="noopener noreferrer">
                        <p>Developed by Parag</p>
                    </a>
                </div>
            </footer>

        </>
    );
}


export default Footer;