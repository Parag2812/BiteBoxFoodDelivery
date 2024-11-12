// DevelopmentCard.jsx

import './DevelopmentCard.css';
import { FaTools } from 'react-icons/fa';

const UnderDevelopment = () => {
    return (
        <div className="development-card">
            <FaTools className="icon" />
            <h2> Payment Under Development</h2>
            <p>We're working hard to bring this feature to you soon!</p>
        </div>
    );
};

export default UnderDevelopment ;
