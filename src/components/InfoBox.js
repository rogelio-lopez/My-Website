import React from 'react';
import './styles/InfoBox.css';

function InfoBox() {
  return (
    <div className="infobox">

      <div className="infobox__close"></div>

      {/* About me half */}
      <aside className="infobox__about">
        <div className="infobox__content">
          <h3>About Me</h3>
          <small>Web Developer</small>
          <p>
            I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
          </p>
          <p>
            I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
          </p>
          <p>
            I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
          </p>

          <div className="infobox__tech">
            <p>Some technologies I work with:</p>
            <ul>
              <li><i class="fab fa-html5"></i></li>
              <li><i class="fab fa-css3-alt"></i></li>
              <li><i class="fab fa-js"></i></li>
              <li><i class="fab fa-react"></i></li>
              <li><i class="fab fa-figma"></i></li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Contact Form  */}
      <aside className="infobox__contact">
        <form className="infobox__content">
          <h3>Get in touch!</h3>
          <small>Job Opportunities, freelance Inquiry or even a cup of coffee </small>

          <label>Name *</label>
          <input/>

          <label>E-mail *</label>
          <input/>

          <label>Message *</label>
          <input/>
          
          <button>Send Message</button>
        </form>
      </aside>
    </div>
  )
}

export default InfoBox;
