import React, {useEffect, useState} from 'react';
import Navbarmain from './NavbarMain';
import landinglogo3 from './landinglogo3.png';
import landinglogo4 from './landinglogo4.png';
import {Link, useNavigate} from 'react-router-dom';
import './Newsletter.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  NewsLetterWrapper,
  NewsLetterImg,
  NewsLetterTitle,
  NewsLetterContent,
  OneRowContainer,
  ThreeColContainer,
  NewsLetterWriter,
  NewsLetterOverlay,
} from "./NewsletterStyle";


import placeholder from "../img/placeholder.png"
import placeholder2 from "../img/placeholder2.png"
import placeholder3 from "../img/placeholder3.png"
import placeholder4 from "../img/placeholder4.png"
import placeholder5 from "../img/placeholder5.png"
import placeholder6 from "../img/placeholder6.png"


function Newsletter() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with your actual API endpoint
    fetch('http://101.79.9.230:8080/geumsabba/newsletter/getall')
      // fetch('http://localhost:8080/geumsabba/newsletter/getall')
      .then(response => response.json())
      .then(data => {
          setData(data);
          console.log('Fetched data:', data);
          console.log('Fetched id:', data[0].id);
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log('Data state:', data);

  const navigate = useNavigate();

  const handleNewsletterClick = (index, item) => {
    navigate('/NewsletterContents', {state: {dataIndex: index, dataItem: item}});
  };

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
      <Navbarmain/>
      <div className='banner'>
        <div className='content'>
          {/* overlay */}
          <div className="imgBox">
            <img src={landinglogo3} className="guemsabba" alt="main logo"/>
            <img src={landinglogo4} className="guemsabba4" alt="main logo4"/>
          </div>
          <div className="textBox">
            <h1>
              금사빠 뉴스레터를<br/>
              더 보고싶다면!
            </h1>
            <div className='textBox2'>
              <a href="#">HOME</a>
              <FontAwesomeIcon icon={faChevronRight} style={{color: '#fff'}}/>
              <a href="#">맞춤형 금융지식</a>
              <FontAwesomeIcon icon={faChevronRight} style={{color: '#fff'}}/>
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
            <FontAwesomeIcon icon={faSearch}/></div>
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
            <a href="#"><FontAwesomeIcon icon={faChevronRight}/></a>
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
          {data.length > 0 ? (
            <ThreeColContainer>
              <OneRowContainer>
                {data.map((item, index) => (
                  (index) % 3 === 0 && (
                    <NewsLetterWrapper key={index}>
                      {/*<Link*/}
                      {/*  to={{*/}
                      {/*    pathname: '/NewsletterContents',*/}
                      {/*    state: { dataIndex: index, dataItem: item }*/}
                      {/*  }}>*/}
                      <NewsLetterImg src={`data:image/png;base64,${item.image1}`}
                                     onClick={() => handleNewsletterClick(index, item)}
                      />
                      <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>

                      {/*</Link>*/}
                      <link href="https://webfontworld.github.io/woowahan/BMJua.css" rel="stylesheet"/>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                      {console.log("Index:", index, "Item:", item)} {/* Add this line */}
                    </NewsLetterWrapper>
                  )
                ))}
              </OneRowContainer>

              <OneRowContainer>
                {data.map((item, index) => (
                  (index) % 3 === 1 && (
                    <NewsLetterWrapper key={index}>
                      <Link to="/NewsletterContents">
                        <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                        <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                      </Link>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                      {console.log("Index:", index, "Item:", item)} {/* Add this line */}
                    </NewsLetterWrapper>
                  )
                ))}
              </OneRowContainer>

              <OneRowContainer>
                {data.map((item, index) => (
                  (index) % 3 === 2 && (
                    <NewsLetterWrapper key={index}>
                      <Link to="/NewsletterContents">
                        <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                        <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                      </Link>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                      {console.log("Index:", index, "Item:", item)} {/* Add this line */}
                    </NewsLetterWrapper>
                  )
                ))}
              </OneRowContainer>
            </ThreeColContainer>
          ) : (
            <div>Loading data...</div>
          )}
            </div>
            </div>
            </div>
            );
          }

export default Newsletter;
