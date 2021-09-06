import React from 'react';
import './styles/PopupBox.css';

function PopupBox({togglePopupBox, setTogglePopupBox}) {

  const handleClosingPopup = () =>{
    setTogglePopupBox(!togglePopupBox);
  }

  return (
    <div className={(togglePopupBox)? 'popupBox popupBox-active' : 'popupBox'}>

      <div className="popupBox__close" onClick={handleClosingPopup}></div>

      {/* About me half */}
      <aside className={(togglePopupBox)? 'popupBox__top popupBox__top-active' : 'popupBox__top'}>
        <div className="popupBox__content popopBox__top">
          <h3>About Me</h3>
          <small>Web Developer.</small>
          <p>
            I'm Rogelio Lopez, a 24-year-old Web Developer born in Mexico and raised in Key West, Florida.
          </p>
          <p>
            I enjoy solving problems, learning new skills, and working on side projects to create rich web experiences & cool applications.
          </p>

          <ul>
            <li><i className="fab fa-html5"></i></li>
            <li><i className="fab fa-css3-alt"></i></li>
            <li><i className="fab fa-js"></i></li>
            <li><i className="fab fa-react"></i></li>
            <li><i className="fab fa-figma"></i></li>
          </ul>
        </div>
      </aside>

      {/* Contact Form  */}
      <aside className={(togglePopupBox)? 'popupBox__bottom popupBox__bottom-active' : 'popupBox__bottom'}>
        <div className="popupBox__content">
          <h3>Get in touch!</h3>
          <small>New projects, freelance inquiry or even a coffee.</small>
          <a href="mailto:rogejlopez@gmail.com">
            Email Me
            <i className="far fa-paper-plane"></i>
          </a>
        </div>
      </aside>
    </div>
  )
}

export default PopupBox;
