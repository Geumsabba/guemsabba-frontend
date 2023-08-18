import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './NavbarMain.css';
import logo_white from './logo_white.png';
import Group567 from './Group567.png';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavbarMain = () => {   

  const [ inputValue, setInputValue ] = useState('');

  /* const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if(window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if(window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
 */



  return (
    <nav className="navbar-main">
      <div className="left-container"> 
        <button className="main-button" onClick={
          () => window.location.href = '/'
        }>
        </button>   
        <button className="imgBox" onClick={
          () => window.location.href = '/'
        }>
          <img src={Group567} className="Group567" alt="main logo" /></button>
        <div className='dropdown-container'> 
          <ul>
            <li><a href="/Fund">맞춤형 지원금</a></li>
            <li><a href="/Home">오늘의 뉴스레터</a></li>
            <li><a href="/Newsletter">뉴스레터 모아보기</a></li>
          </ul>
        </div>
      </div>
      <div className="right-container"> 
        <div className="search-box">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} /></div>
            <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div> 
        <div className='right-icon'>
          <button><FontAwesomeIcon icon={faBell} className="home-icon"/></button>
          <button><FontAwesomeIcon icon={faCircleQuestion} className="home-icon"/></button>
          <button><FontAwesomeIcon icon={faGear} className="home-icon"/></button></div>
        <div className='mypage'>
        <ul><li><a href="#">로그아웃</a></li></ul></div>
      </div>
    </nav>
  );
};

export default NavbarMain;