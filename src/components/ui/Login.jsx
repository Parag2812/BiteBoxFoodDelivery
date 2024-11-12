import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

    function handleLogin(e) {
        e.preventDefault(); // Prevent form from reloading the page
        if (email === "" || password === "") {
            setError("Please fill in all fields");
        } else if (email === "guest@food.com" && password === "guestPassword") {
            setIsLoggedIn(true); // Set login state to true
            setError("");
            console.log("Login successful");
        } else {
            setError("Invalid email or password");
        }
    }

    // Redirect to home if logged in
    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back!</h2>
                <p>Login with your details to continue</p>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="guest-login">
                        <h3>Guest Login</h3>
                        <p>Email: guest@food.com</p>
                        <p>Password: guestPassword</p>
                    </div>
            </div>
        </div>
    );
}

export default Login;
