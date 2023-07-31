import React, { useEffect } from 'react';
import "./Landing.css";
import mainlogo from './mainlogo.png';

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

  return (
    <div className='fullpage'>
      <section className='first'>
        <header>
          <ul>
            <li><a href="#">맞춤형 지원금</a></li>
            < li><a href="#">맞춤형 재테크</a></li>
            <li><a href="#">맞춤형 금융지식</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>
        </header>
        <div className="content">
          <div className="textBox">
            <h1>
              <span>금</span>융정보를<br />
              <span>사</span>회초년생들에게<br />
              <span>빠</span>르게 찾아줄게요!
            </h1>
            <p>내용입력</p>
            <div className="button">
              <a href="#">로그인 하기</a>
            </div>
          </div>
          <div className="imgBox">
            <img src={mainlogo} className="guemsabba" alt="main logo" />
          </div>
        </div>
      </section>

      <section className='second'>
       <div className="content">
        <div className="imgBox">
          <img src={mainlogo} className="guemsabba" alt="main logo" />
        </div>
        <div className="textBox">
          <h1>
            지금 내가 받을 수 있는<br />
            <span>지원금 혜택</span>은?
          </h1>
          <div className="button">
            <a href="#">맞춤형 지원금 이동하기</a>
          </div>
        </div>
       </div>
      </section>

      <section className='third'>
      <div className="content">
          <div className="textBox">
            <h1>
              나에게 딱 맞는<br />
              <span>재테크 정보</span>는?
            </h1>
            <div className="button">
              <a href="#">맞춤형 재테크 이동하기</a>
            </div>
          </div>
          <div className="imgBox">
            <img src={mainlogo} className="guemsabba" alt="main logo" />
          </div>
        </div>
      </section>

      <section className='forth'>
      <div className="content">
        <div className="imgBox">
          <img src={mainlogo} className="guemsabba" alt="main logo" />
        </div>
        <div className="textBox">
          <h1>
            어려운 금융지식 !<br />
            <span>금.사.빠</span>가<br />
            도와줄게요 :)
          </h1>
          <div className="button">
            <a href="#">맞춤형 금융지식 이동하기</a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}