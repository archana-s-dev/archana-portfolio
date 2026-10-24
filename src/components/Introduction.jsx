import heroImage from '../assets/hero.png';

function Introduction() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">HELLO, I'M</span>

        <h1>
          Archana <span>S</span>
        </h1>

        <h2>Aspiring MERN Stack Developer</h2>

        <p>
          I'm a Computer Science student focused on building clean, user-centric web applications.
          Currently exploring full-stack development with MongoDB, Express.js, React, and Node.js.
        </p>

        <a href="#projects" className="text-link">
          View My Work <span>→</span>
        </a>
      </div>

      <div className="hero-visual">
        <div className="portrait">
          <img src={heroImage} alt="Archana's portrait" />
        </div>

        <div className="portrait-label">
          <span>Design</span>
          <span>Code</span>
          <span>Create</span>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
