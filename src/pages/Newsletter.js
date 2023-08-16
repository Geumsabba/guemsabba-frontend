import React, { useState, useEffect } from 'react';
import Navbarmain from './NavbarMain';
import landinglogo3 from './landinglogo3.png';
import landinglogo4 from './landinglogo4.png';
import { Link } from 'react-router-dom';
import './Newsletter.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import {
  NewsLetterWrapper,
  NewsLetterImg,
  NewsLetterTitle,
  NewsLetterContent,
  OneRowContainer,
  ThreeColContainer,
  NewsLetterWriter
} from "./NewsletterStyle";


import placeholder from "../img/placeholder.png"
import placeholder2 from "../img/placeholder2.png"
import placeholder3 from "../img/placeholder3.png"
import placeholder4 from "../img/placeholder4.png"
import placeholder5 from "../img/placeholder5.png"
import placeholder6 from "../img/placeholder6.png"



function Newsletter() {
  const [inputValue, setInputValue] = useState('');
/* 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const sectionElements = document.querySelectorAll('.NewsLetterWrapper');
    sectionElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []); */



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
        <div className={"blank2"}></div>
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
{/*         <div className='mainContainer'>
          <Link to='/NewsletterContents'><Pin pinSize = {'small'}/>
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
 */}

        <div className='NewsLetterStyle'>
          {/*뉴스레터 10개 생성 -> NewsletterStyle.js */}
          <ThreeColContainer>
            <OneRowContainer>
              <NewsLetterWrapper show={true}>
              <Link to="/NewsletterContents">
                <NewsLetterImg src={placeholder}/>
              </Link>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper show={true}>
                <Link to='/NewsletterContents'>
                <NewsLetterImg src={placeholder2}/>
                </Link>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                간단한 설명 와라라랄랄<br />
                간단한 설명  와라라랄랄간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder3}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄<br />
                </NewsLetterContent>
              </NewsLetterWrapper>
            </OneRowContainer>

            <OneRowContainer>
              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder4}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄간단한 설명 와라라랄랄간단한 설명 와라라랄랄

                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder5}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder6}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                간단한 설명 와라라랄랄간단한 설명 와라라랄랄<br />
                간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

            </OneRowContainer>

            <OneRowContainer>
              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper show={true}>
                <NewsLetterImg src={placeholder2}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>

              <div style={{width: 52}}></div>

              <NewsLetterWrapper  show={true}>
                <NewsLetterImg src={placeholder3}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                </NewsLetterContent>
              </NewsLetterWrapper>
            </OneRowContainer>
          </ThreeColContainer>
          
        </div> 
      </div>
    </div>   
  );
}

export default Newsletter;
