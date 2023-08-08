import React, { useState } from 'react';
import Navbarmain from './NavbarMain';
import landinglogo3 from './landinglogo3.png';
import landinglogo4 from './landinglogo4.png';
import './Newsletter.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Pin from './Pin';

function Newsletter() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='Newsletter-page'>
      <Navbarmain />
      <div className='banner'>
        <div className='content'>
          {/* overlay */}
          <div className="imgBox">
            <img src={landinglogo3} className="guemsabba" alt="main logo" />
            <img src={landinglogo4} className="guemsabba4" alt="main logo4" />
          </div>
          <div className="textBox">
            <h1>
              금사빠 뉴스레터를<br />
              더 보고싶다면!
            </h1>
            <div className='textBox2'>
              <a href="#">HOME</a>
              <FontAwesomeIcon icon={faChevronRight} style={{ color: '#fff' }}/>
              <a href="#">맞춤형 금융지식</a>
              <FontAwesomeIcon icon={faChevronRight} style={{ color: '#fff' }}/>
              <a href="#">뉴스레터 모아보기</a>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className="search-box">
            <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} /></div>
        </div> 
        <div className='top-categorie'>
          <div className='categorie-item'>
            <a href="#">경제</a>
            <a href="#">주식</a>
            <a href="#">은행</a>
            <a href="#">증권</a>
            <a href="#">부동산</a>
            <a href="#">코인</a>          
            <a href="#">예금</a>
            <a href="#">적금</a>
            <a href="#">보험</a>     
            <a href="#"><FontAwesomeIcon icon={faChevronRight} /></a>       
          </div>
        </div>

        {/* mainContainer */}
        <div className='mainContainer'>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
        </div>
      </div>
    </div>   
  );
}

export default Newsletter;
