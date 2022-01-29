import '../styles.css';

function Home() {
    return(
        <section className="hero">
            <div className="part-one">
                <h1 className="hero-text"><div className="hey"><span className="wave">👋</span></div><div className="me"><p className="whoami">Hello, <br/>I'm Saurav Khare</p><p className="sub-text">I'm a Software Engineer & Frontend Developer.</p></div></h1>
            </div>
            <div className="part-two">
                <img src="./assets/me_grayscale.jpg" className="hero-svg" alt=""/>
            </div>
        </section>
    );
}

export default Home;