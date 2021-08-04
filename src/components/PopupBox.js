import React from 'react';
import './styles/PopupBox.css';

function PopupBox() {

  return (
    <div className="popupBox">

      <div className="popupBox__close"></div>

      {/* About me half */}
      <aside>
        <div className="popupBox__content popopBox__top">
          <h3>About Me</h3>
          <small>Web Developer.</small>
          <p>
            I'm Rogelio Lopez, a 24-year-old Web Developer born in Mexico and raised in Key West, Florida.
          </p>
          <p>
            I enjoy solving problems and constantly learning new things on side projects to create rich web experiences, applications, and overall cool things with web technologies. 
          </p>
          <p>
            I enjoy solving problems and constantly learning new things on side projects to create rich web experiences.
          </p>

          <ul>
            <li><i class="fab fa-html5"></i></li>
            <li><i class="fab fa-css3-alt"></i></li>
            <li><i class="fab fa-js"></i></li>
            <li><i class="fab fa-react"></i></li>
            <li><i class="fab fa-figma"></i></li>
          </ul>
        </div>
      </aside>

      {/* Contact Form  */}
      <aside>
        <div className="popupBox__content">
          <h3>Get in touch!</h3>
          <small>New projects, freelance inquiry or even a coffee.</small>
          <a href="mailto:rogejlopez@gmail.com">
            Email Me
            <i class="far fa-paper-plane"></i>
          </a>
        </div>
      </aside>
    </div>
  )
}

export default PopupBox;
