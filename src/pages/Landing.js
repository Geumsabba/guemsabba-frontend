import React from 'react';
import "./Landing.css";
import mainlogo from './mainlogo.png';

export default function Landing() {
  return (
    <div>
      <section>
        <header>
          <ul>
            <li><a href="#">맞춤형 지원금</a></li>
            <li><a href="#">맞춤형 재테크</a></li>
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
    </div>
  );
}

