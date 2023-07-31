import React from 'react';
import Navbar from './Navbar';
import './Signup.css';
import logo from './mainlogo2.png';
import BirthDatePicker from "./BirthDatePicker";

const SignUp = () => {
  return (
    <div className="signup-page">
      <Navbar/>
      <div className="signup-container">
        <div className={"blank1"}></div>
        <div className="header">회원가입</div>
        <img src={logo} alt="Site Logo" className="site-logo"/>
        <div className="account-section">
          <div className="section-header">계정생성</div>
          <div className="sub-text">*닉네임</div>
          <input type="text" placeholder="닉네임"/>
          <div className="sub-text">*아이디</div>
          <input type="text" placeholder="아이디를 입력해주세요."/>
          <div className="flex-row">
            <div className="flex-column">
              <div className="sub-text">*비밀번호</div>
              <input type="password" placeholder="비밀번호를 입력해주세요."/>
            </div>
            <div className="flex-column">
              <div className="sub-text">*비밀번호 확인</div>
              <input type="password" placeholder="비밀번호를 한번 더 입력해주세요."/>
            </div>
          </div>
        </div>
        <div className="info-section">
          <div className="section-header">기본정보</div>
          <div className="sub-text">*생년월일</div>
          <div className="dob-input-container">
            {/*<input type="text" placeholder="년도"/>*/}
            {/*<input type="text" placeholder="월"/>*/}
            {/*<input type="text" placeholder="일"/>*/}
            <BirthDatePicker/>
          </div>
          <div className="sub-text">성별</div>
          <div className="gender-container">
            <label>
              <input type="radio" name="gender" value="남성"/> 남성
            </label>
            <label>
              <input type="radio" name="gender" value="여성"/> 여성
            </label>
          </div>
          <div className="sub-text">내/외국인</div>
          <div className="citizenship-container">
            <label>
              <input type="radio" name="citizenship" value="내국인"/> 내국인
            </label>
            <label>
              <input type="radio" name="citizenship" value="외국인"/> 외국인
            </label>
          </div>
          <div className="sub-text">*이메일</div>
          <input type="email" placeholder="이메일을 입력해주세요."/>
          <div className="sub-text">지역</div>
          <div className="location-container">
            <input type="text" placeholder="시/도"/>
            <input type="text" placeholder="구"/>
            <input type="text" placeholder="동"/>
          </div>
        </div>
        <div className="specific-section">
          <div className="section-header">세부정보</div>
          <div className="sub-text">관심있는 금융 정보</div>
          <div className="interest-container">
            <label>
              <input type="radio" name="interest" value="예금"/> 예금
            </label>
            <label>
              <input type="radio" name="interest" value="적금"/> 적금
            </label>
            <label>
              <input type="radio" name="interest" value="주식"/> 주식
            </label>
            <label>
              <input type="radio" name="interest" value="코인"/> 코인
            </label>
            <label>
              <input type="radio" name="interest" value="부동산"/> 부동산
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
