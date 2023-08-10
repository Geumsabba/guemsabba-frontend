import React, { useEffect } from 'react';
import "./Landing.css";
import { Link } from 'react-router-dom';
import mainlogo from './mainlogo.png';
import landinglogo1 from './landinglogo1.png';
import landinglogo2 from './landinglogo2.png';
import landinglogo3 from './landinglogo3.png';
import landinglogo4 from './landinglogo4.png';

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
            <li><a href="/home">맞춤형 지원금</a></li>
            <li><a href="#">맞춤형 재테크</a></li>
            <li><Link to='/Newsletter'>맞춤형 금융지식</Link></li>
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
              <a href="/signup">로그인 하기</a>
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
          <img src={landinglogo1} className="guemsabba" alt="main logo" />
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
            <img src={landinglogo2} className="guemsabba" alt="main logo" />
          </div>
        </div>
      </section>

      <section className='forth'>
      <div className="content">
        <div className="imgBox">
          <img src={landinglogo3} className="guemsabba" alt="main logo" />
          <img src={landinglogo4} className="guemsabba4" alt="main logo4" />
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