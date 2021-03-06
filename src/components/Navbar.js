import { Link } from 'react-router-dom';
import '../styles.css';

function Navbar() {
    return (
        <header className="header container">
        <nav className="nav-bar">
            <li className="nav-link"><a href="https://github.com/SauravKhare" target="_blank" rel="noreferrer"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"/></svg></a></li>
            <li className="nav-link"><a href="https://www.linkedin.com/in/sauravkhare" target="_blank" rel="noreferrer"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"/></svg></a></li>
            <li className="nav-link"><a href="https://twitter.com/ErahkSaurav" target="_blank" rel="noreferrer"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z"/></svg></a></li>
            <li className="nav-link"><a href="https://trakt.tv/users/sauravkhare" target="_blank" rel="noreferrer"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 144.8 144.8" width="24px" height="24px" enableBackground="new 0 0 144.8 144.8" xmlSpace="preserve"><g><circle fill="#FFFFFF" cx="72.4" cy="72.4" r="72.4"/><path fill="#ED2224" d="M29.5,111.8c10.6,11.6,25.9,18.8,42.9,18.8c8.7,0,16.9-1.9,24.3-5.3L56.3,85L29.5,111.8z"/><path fill="#ED2224" d="M56.1,60.6L25.5,91.1L21.4,87l32.2-32.2h0l37.6-37.6c-5.9-2-12.2-3.1-18.8-3.1c-32.2,0-58.3,26.1-58.3,58.3 c0,13.1,4.3,25.2,11.7,35l30.5-30.5l2.1,2l43.7,43.7c0.9-0.5,1.7-1,2.5-1.6L56.3,72.7L27,102l-4.1-4.1l33.4-33.4l2.1,2l51,50.9 c0.8-0.6,1.5-1.3,2.2-1.9l-55-55L56.1,60.6z"/><path fill="#ED1C24" d="M115.7,111.4c9.3-10.3,15-24,15-39c0-23.4-13.8-43.5-33.6-52.8L60.4,56.2L115.7,111.4z M74.5,66.8l-4.1-4.1 l28.9-28.9l4.1,4.1L74.5,66.8z M101.9,27.1L68.6,60.4l-4.1-4.1L97.8,23L101.9,27.1z"/><g><g><path fill="#ED2224" d="M72.4,144.8C32.5,144.8,0,112.3,0,72.4C0,32.5,32.5,0,72.4,0s72.4,32.5,72.4,72.4 C144.8,112.3,112.3,144.8,72.4,144.8z M72.4,7.3C36.5,7.3,7.3,36.5,7.3,72.4s29.2,65.1,65.1,65.1s65.1-29.2,65.1-65.1 S108.3,7.3,72.4,7.3z"/></g></g></g></svg></a></li>
            <li className="nav-link"><a href="https://letterboxd.com/SauravKhare/" target="_blank" rel="noreferrer">
            <svg width="24px" height="24px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <rect id="path-1" x="0" y="0" width="129.847328" height="141.389313"></rect>
                    <rect id="path-3" x="0" y="0" width="129.847328" height="141.389313"></rect>
                </defs>
                <g id="letterboxd-decal-dots-pos-rgb" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle id="Circle" fill="#202830" cx="250" cy="250" r="250"></circle>
                    <g id="dots-neg" transform="translate(61.000000, 180.000000)">
                        <g id="Dots">
                            <ellipse id="Green" fill="#00E054" cx="189" cy="69.9732824" rx="70.0786517" ry="69.9732824"></ellipse>
                            <g id="Blue" transform="translate(248.152672, 0.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <ellipse fill="#40BCF4" mask="url(#mask-2)" cx="59.7686766" cy="69.9732824" rx="70.0786517" ry="69.9732824"></ellipse>
                            </g>
                            <g id="Orange">
                                <mask id="mask-4" fill="white">
                                    <use xlinkHref="#path-3"></use>
                                </mask>
                                <g id="Mask"></g>
                                <ellipse fill="#FF8000" mask="url(#mask-4)" cx="70.0786517" cy="69.9732824" rx="70.0786517" ry="69.9732824"></ellipse>
                            </g>
                            <path d="M129.539326,107.022244 C122.810493,96.2781677 118.921348,83.5792213 118.921348,69.9732824 C118.921348,56.3673435 122.810493,43.6683972 129.539326,32.9243209 C136.268159,43.6683972 140.157303,56.3673435 140.157303,69.9732824 C140.157303,83.5792213 136.268159,96.2781677 129.539326,107.022244 Z" id="Overlap" fill="#FFFFFF"></path>
                            <path d="M248.460674,32.9243209 C255.189507,43.6683972 259.078652,56.3673435 259.078652,69.9732824 C259.078652,83.5792213 255.189507,96.2781677 248.460674,107.022244 C241.731841,96.2781677 237.842697,83.5792213 237.842697,69.9732824 C237.842697,56.3673435 241.731841,43.6683972 248.460674,32.9243209 Z" id="Overlap" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </svg>
             </a>
            </li>
            <li className="nav-link"><a href="./assets/Resume 14-02-2022.pdf">Resume</a></li>
            <li className="nav-link"><Link to='/uses'>Uses</Link></li>
        </nav>
    </header>
    );
}

export default Navbar;