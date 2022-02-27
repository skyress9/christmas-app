import React from 'react';
import './_Footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <div className="footer-about">
          <div className="footer-about__year">2021</div>
          <a className="footer-about__author" href="https://github.com/skyress9" target="_blank" rel="noreferrer">
            skyress9
          </a>
        </div>
        <a className="footer-logo" href="https://rs.school/js/">
          RSS
        </a>
      </div>
    </footer>
  );
}

export default Footer;
