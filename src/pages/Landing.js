import React, { useEffect } from 'react';
import "./Landing.css";
import { Link } from 'react-router-dom';
import mainlogo from './mainlogo.png';
import landinglogo1 from './landinglogo1.png';
import landinglogo2 from './landinglogo2.png';
import landinglogo3 from './landinglogo3.png';
import landinglogo4 from './landinglogo4.png';
import Group5678 from './Group5678.png';
import landingmain from './landingmain.png';
import Scroll from './Scroll.png';
/* 
import fullpage from 'fullpage.js';
 */

export default function Landing() {
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
    

    const sectionElements = document.querySelectorAll('.content');
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);  


/* fullpage */
/* window.onload = () => { */
useEffect(() => {
  const Slider = function(fullpage) {
    let slides = [],
      count = 0,
      current = 0,
      touchstart = 0,
      animation_state = false;

    const init = () => {
      slides = fullpage.children;
      count = slides.length;
      for (let i = 0; i < count; i++) {
        slides[i].style.bottom = -(i * 100) + '%';
      }
    }

    const gotoNum = (index) => {
      if ((index !== current) && !animation_state) {
        animation_state = true;
        setTimeout(() => (animation_state = false), 500);
        current = index;
        for (let i = 0; i < count; i++) {
          slides[i].style.bottom = (current - i) * 100 + '%';
        }
      }
    }

    const gotoNext = () => (current < count - 1 ? gotoNum(current + 1) : false);
    const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : false);

    if (fullpage) {
      fullpage.ontouchstart = (e) => (touchstart = e.touches[0].screenY);
      fullpage.ontouchend = (e) =>
        touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
      fullpage.onmousewheel = fullpage.onwheel = (e) =>
        e.deltaY < 0 ? gotoPrev() : gotoNext();
    }

    init();
  }

   let fullpage = document.querySelector('.fullpage');
    if (fullpage) {
      let slider = new Slider(fullpage);
    }
  }, []);  



  return (
    <div className='fullpage'>
      <section className='first'>
        <div className='small-logo'>
{/*           <img src={Group5678} className="Group5678" alt="Group5678"/> */}
        </div>
        <header>
          <ul>
            <li><a href="/fund">맞춤형 지원금</a></li>
            <li><a href="/home">오늘의 뉴스레터</a></li>
            <li><a href='/Newsletter'>뉴스레터 모아보기</a></li>
            <li><a href="/Signup">회원가입</a></li>
          </ul>
        </header>
        <div className='imgBox-full'>
        <div className="imgBox">
          <img src={landingmain} className="landingmain" alt="landingmain" />
        </div>
         <div className="content">
          <div className="textBox">
            <div className="button">
              <a href="/login">금사빠 로그인 하기</a>
            </div>
          </div>
        </div> 
        <div className='scroll'>
        <img src={Scroll} className="Scroll" alt="Scroll" />
        </div>
        </div>
      </section>

      <section className='second'>
       <div className="content">
       <div className='imgBox-back'></div>
        <div className="imgBox">
          <img src={landinglogo1} className="guemsabba" alt="main logo" />
        </div>
        <div className="textBox">
          <div className='overlay'>
          <h1>
            지금 내가 받을 수 있는<br />
            <span className='highlight'>지원금 혜택</span>은?
          </h1>
          </div>
          <div className="button">
            <a href="/Fund">맞춤형 지원금 이동하기</a>
          </div>
        </div>
       </div>
      </section>

      <section className='third'>
      <div className="content">
          <div className="textBox">
            <h1>
              나에게 딱 맞는<br />
              <span className='highlight'>재테크 정보</span>는?
            </h1>
            <div className="button">
              <a href="/Home">오늘의 뉴스레터 이동하기</a>
            </div>
          </div>
          <div className="imgBox">
            <img src={landinglogo2} className="guemsabba" alt="main logo" />
          </div>
          <div className='imgBox-back'></div>
        </div>
      </section>

      <section className='forth'>
      <div className="content">
      <div className='imgBox-back'></div>
        <div className="imgBox">
          <img src={landinglogo3} className="guemsabba" alt="main logo" />
          <img src={landinglogo4} className="guemsabba4" alt="main logo4" />
        </div>
        <div className="textBox">
          <h1>
            어려운 금융지식 !<br />
            <span className='highlight'>금.사.빠</span>가<br />
            도와줄게요 :)
          </h1>
          <div className="button">
            <a href="/NewsletterContents">뉴스레터 모아보기</a>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
}

