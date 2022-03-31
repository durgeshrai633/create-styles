import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <p style={{ textAlign: "center" }}>
          All rights reserved &copy;copyright 2022
        </p>
      </div>
      <div className='footer'>
        <div className='social-media'>
          <a
            href='http://www.linkedin.com/durgeshrai633/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-2x fa-linkedin'></i>
          </a>
          <a
            href='http://www.github.com/durgeshrai633/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-2x fa-github'></i>
          </a>
          <a
            href='http://www.facebook.com/durgeshrai633/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-2x fa-facebook'></i>
          </a>
        </div>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>
          Created By
          <a
            style={{ marginLeft: "5px" }}
            href='https://durgesh-rai.netlify.app'
            rel='noopener noreferrer'
            target={"_blank"}
          >
            Durgesh Kumar Rai
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
