import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-container">
        <button className="back-button" onClick={
          () => window.location.href = '/'
        }>
          {/*<span className="left-arrow-icon"></span>*/}
          <FontAwesomeIcon icon={faArrowLeft} className="left-arrow-icon"/>
          <div>&nbsp;HOME</div>
        </button>
      </div>
      <div className="right-container">
        <button>맞춤형 지원금</button>
        <button>맞춤형 재테크</button>
        <button>맞춤형 금융지식</button>
        <button onClick={
          () => window.location.href = '/Login'
        }>로그인</button>
      </div>
    </nav>
  );
};

export default Navbar;
