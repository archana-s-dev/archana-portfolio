function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-intro">
        <span className="section-number">04</span>
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities,
          collaborations or just a friendly chat.
        </p>
      </div>

      <div className="contact-details">
        <a href="mailto:archanasbyse@gmail.com">
          <span>Email</span>
          archanasbyse@gmail.com
        </a>

        <a href="https://www.linkedin.com/in/archana-s643" target="_blank">
          <span>LinkedIn</span>
          linkedin.com/in/archana-s643
        </a>

        <a href="https://github.com/ArchanaSnaik" target="_blank">
          <span>GitHub</span>
          github.com/ArchanaSnaik
        </a>
      </div>

      <a
        href="mailto:archanasbyse@gmail.com"
        className="contact-button"
      >
        Say Hello <span>→</span>
      </a>
    </section>
  );
}

export default Contact;
