import React, {useEffect} from 'react';
import Navbarmain from './NavbarMain';
import {Link, useLocation} from 'react-router-dom';
import './NewsletterContents.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faSubscript} from '@fortawesome/free-solid-svg-icons';

import newsgroup1 from './newsgroup1.png';
import newsgroup2 from './newsgroup2.png';
import newsgroup3 from './newsgroup3.png';
import Group77 from './Group77.png';
import Badge from './Badge.png';
import Tabs from './Tabs.png';
import Toolbar from './Toolbar.png';
import subscribe from './subscribe.png';

const NewsletterContents = () => {
  const location = useLocation();
  const {dataIndex, dataItem} = location.state || {};

  /* content에 fade-in */
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


    const sectionElements = document.querySelectorAll('.letter');
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='NewsletterContents'>
      <div>
        <h2>Newsletter Contents</h2>
        {dataIndex !== undefined && dataItem !== undefined ? (
          <div>
            <p>Data Index: {dataIndex}</p>
            <p>Title: {dataItem.title}</p>
            <p>Editor: {dataItem.editor}</p>
            <p>Header: {dataItem.header}</p>
            {/* Display other content as needed */}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>

      <Navbarmain/>
      <div className='banner'>
        <div className='content'>
          {/* overlay */}
          <div className="textBox">
            <h1>
              제목
            </h1>
            <div className={"blank1"}></div>
            <a href="#">HOME</a>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{color: '#fff', zIndex: 2, overflow: 'hidden', opacity: 0.8}}
            />
            <a href="#">맞춤형 금융지식</a>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{color: '#fff', zIndex: 2, overflow: 'hidden', opacity: 0.8}}
            />
            <a href="#">뉴스레터 모아보기</a>
          </div>
          <div className="imgBox1">
            <img src={newsgroup1} className="newsgroup1" alt="newsgroup1"/>
          </div>
        </div>
      </div>
      <div className='TabsImg'>
        <img src={Tabs} className="Tabs" alt="Tabs"/>
      </div>
      <div className='Toolbar'>
        <img src={Toolbar} className="Toolbar" alt="Toolbar"/>
      </div>
      <div className={"blank1"}></div>

      {/*widget*/}
      <div className='widget'>
        <div className='date'>
          날짜
        </div>
        <div className='editer'>
          BY: 에디터
        </div>
        <div className='subscribe'>
          <img src={subscribe} className="subscribe" alt="subscribe"/>
        </div>
      </div>
      <div className={"blank1"}></div>
      {/* 금사빠 뉴스레터 */}
      <div className='letter'>
        <div className='Title'>
          제목
        </div>
        <div className={"blank1"}></div>
        <div className='textbox1'>
          <div className='header'>
            머릿글
          </div>
          <div className={"blank1"}></div>
          <div className='subheading1'>
            소제목1
          </div>
          <div className={"blank1"}></div>
          <div className='maintext1'>
            본문
          </div>
        </div>
        <div className={"blank1"}></div>
        <div className="imgBox1">
          <div className='imgcontent'>
            <img src={newsgroup1} className="newsgroup1" alt="newsgroup1"/>
          </div>
        </div>
        <div className='textbox2'>
          <div className={"blank1"}></div>
          <div className={"blank1"}></div>
          <div className='subheading2'>
            소제목2
          </div>
          <div className={"blank1"}></div>
          <div className='maintext2'>
            본문2
          </div>
        </div>
        <div className="imgBox2">
          <div className={"blank1"}></div>
          <div className='imgcontent2'>
            <img src={newsgroup2} className="newsgroup2" alt="newsgroup2"/>
            <img src={newsgroup3} className="newsgroup3" alt="newsgroup3"/>
          </div>
          <div className='textbox3'>
            <div className={"blank1"}></div>
            <div className='subheading3'>
              소제목3
            </div>
            <div className={"blank1"}></div>
            <div className='maintext3'>
              본문3
            </div>
          </div>
          <div className={"blank1"}></div>
          <div className='commentBox'>
            <img src={Group77} className="Group77" alt="Group77"/>
          </div>
          <div className={"blank1"}></div>
          <div className={"blank1"}></div>
          <div className='Badge'>
            <Link to='/Newsletter'><img src={Badge} className="Badge" alt="Badge"/></Link>
          </div>
          <div className={"blank1"}></div>
          <div className={"blank1"}></div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterContents;
