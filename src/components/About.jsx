function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span className="section-number">01</span>
        <h2>About Me</h2>

        <p className="about-description">
          I'm Archana, a CSE student passionate about the intersection 
          of web development and UI/UX design. I love turning complex problems into 
          simple, beautiful digital solutions. Beyond coding, I'm a curious learner 
          who enjoys exploring new tech stacks and building projects that make an impact.
        </p>

        {/*<a href="#contact" className="text-link">
          Learn More <span>→</span>
        </a>*/}
      </div>

      <div className="about-details">
        <div className="detail-row">
          <span>Education</span>
          <p>
            B.E. in Computer Science & Engineering
            <br />
            BMS Institute of Technology & Management
          </p>
        </div>

        <div className="detail-row">
          <span>Location</span>
          <p>Bengaluru, India</p>
        </div>

        <div className="detail-row">
          <span>Focus</span>
          <p>MERN Stack Development</p>
        </div>
      </div>
    </section>
  );
}

export default About;
