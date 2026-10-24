function Education() {
  const educationList = [
    {
      degree: 'B.E. in Computer Science & Engineering',
      college: 'BMS Institute of Technology & Management, Bangalore',
      duration: '2024 - 2028',
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      college: 'SDM Polytechnic, Ujire',
      duration: '2021 - 2024',
      CGPA: '9',
    },
  ];

  return (
    <section className="section education" id="education">
      <span className="section-number">03</span>
      <h2>Education</h2>

      <div className="education-layout">
        <div className="education-timeline">
          {educationList.map((item) => (
            <article className="education-item" key={item.degree}>
              <span className="timeline-dot"></span>

              <div>
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
                <span className="education-duration">
                  {item.duration}
                </span>
                <p>{item.CGPA && `CGPA: ${item.CGPA}/10`}</p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="education-quote">
          <span className="quote-mark">“</span>
          <p>
            Technology is not just about solving problems,
            it's about building a better future.
          </p>
          <span className="quote-line"></span>
        </blockquote>
      </div>
    </section>
  );
}

export default Education;
