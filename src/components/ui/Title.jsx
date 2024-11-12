import { LOGO_CDN } from "../../config";
import '../../../src/index.css'


export const Title = () => (
        <a href="/">
            <img
                className="logo"
                alt="logo"
                src = {LOGO_CDN}
            />
        </a>
    );
 
