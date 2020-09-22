import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const Header = (props) => {
  return (
    <header className="siteHeader">
      <h1 className="titleName">Aoyama Yumeto</h1>
      <nav className="nav">
        <ul className="navMenu">
            <li className="navMenuItem"><a href="">About</a></li>
            <li className="navMenuItem"><a href="">Works</a></li>
            <li className="navMenuItem"><a href="">Contact</a></li>
            <li className="twitterIcon">
              <a href="https://twitter.com/Yumeto05682483">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header
