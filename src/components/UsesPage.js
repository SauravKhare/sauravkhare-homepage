import { useEffect } from 'react';
import '../styles.css';

function UsesPage(props) {
    useEffect(() => {
        document.title = props.location.state.title;
    });

    return (
        <section>
        <h1 className="hero-text">Uses.</h1>
        <div>
            <p className="mb-4rem">
            <span className="hero-text">PC</span>
            <span className="sub-text">- Dell Inspiron 3537 with Pop!_OS.</span>
            </p>
            <p className="mb-4rem">
            <span className="hero-text">Phone</span>
            <span className="sub-text">- Asus Zenfone Max Pro M1 with Pixel Experiance Android 12.</span>
            </p>
            <p className="mb-4rem">
                <span className="hero-text">Code Editor</span>
                <span className="sub-text">- VS Code (Cobalt2 Theme by Wes Bos)</span>
            </p>
            <p className="mb-4rem">
                <span className="hero-text">Browser</span>
                <span className="sub-text">- Brave (Current)</span>
            </p>
        </div>
        </section>
    );
}

export default UsesPage;