import { useRouteError } from "react-router-dom";
import './Error.css';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <h1>Oops!</h1>
            <h2>Something went wrong</h2>
            <p>{err.status + ": " + err.statusText}</p>
            {/* <a href="/" className="home-link">Go Back Home</a> */}
        </div>
    );
};

export default Error;
