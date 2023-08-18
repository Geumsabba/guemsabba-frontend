import React, {useState} from 'react';
import Navbar from './Navbar';
import './Signup.css';
import logo from './mainlogo2.png';
import titleTextImg from './Title.png';
import Select from 'react-select';
import BirthDatePicker from "./BirthDatePicker";
import number1 from '../img/Group 3.png';
import number2 from '../img/Group 4.png';
import number3 from '../img/Group 5.png';

const SignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    userid: '',
    userpassword: '',
    confirmPassword: '',
    userbirth: new Date(),
    usergender: '',
    userlocal: '',
    useremail: '',
    city: '',
    userregion: '',
    neighborhood: '',
    interest: '',
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {
    console.log("Api Call start..")

    // Gather all the credentials and make the API call
    const userData = {...formData};

    // Make API call and handle signup
    // Example API call using fetch:
    fetch('https://101.79.9.230/geumsabba/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        console.log(data);
        // Redirect to another page after successful signup
        // For example: history.push('/dashboard');
        window.location.href = '/login'; // Redirect to /home

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="signup-page">
      <Navbar/>
      <div className="signup-container">
        <div className={"blank1"}></div>
        <div className="header">회원가입</div>
        <div className={"blank1"}></div>
        <div className={"flex-row"}>
          {/* 계정생성 */}
          {currentPage === 1 && (
            <div className="account-section">
              <span
                style={{height: '40px'}}
                className={"vmid"}>
                <img
                  //style width 10px
                  style={{width: '20px'}}
                  src={number1}></img>
                <span className="section-header">계정생성</span>
              </span>
              <div className="section-disc">계정을 만들어주세요:)</div>
              <div className={"blank1"}></div>
              <div className="sub-text">*닉네임</div>
              <input
                type="text"
                placeholder="닉네임"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
              <div className="sub-text">*아이디</div>
              <input
                type="text"
                placeholder="아이디를 입력해주세요."
                value={formData.userid}
                onChange={(e) => setFormData({...formData, userid: e.target.value})}
              />
              <div className="flex-row">
                <div className="flex-column">
                  <div className="sub-text">*비밀번호</div>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    value={formData.userpassword}
                    onChange={(e) => setFormData({...formData, userpassword: e.target.value})}
                  />
                </div>
                <div className="flex-column">
                  <div className="sub-text">*비밀번호 확인</div>
                  <input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
              <button
                className={`next-button ${formData.username && formData.userid && formData.userpassword && formData.confirmPassword ? 'next-active' : ''}`}
                onClick={() => {
                  if (!formData.userpassword || formData.userpassword !== formData.confirmPassword) {
                    console.log("Password and Confirm Password do not match!");
                    return;
                  }
                  handleNextPage();
                }}
                disabled={!formData.username || !formData.userid || !formData.userpassword || !formData.confirmPassword}
              >
                Next
              </button>
            </div>
          )}


          {/* 기본정보 */}
          {currentPage === 2 && (
            <div className="info-section">
                <span
                  style={{height: '40px'}}
                  className={"vmid"}>
                <img
                  //style width 10px
                  style={{width: '20px'}}
                  src={number2}></img>
                <span className="section-header">기본정보</span>
              </span>
              <div className={"blank2"}></div>
              <div className="sub-text">*생년월일</div>
              {/*<DatePicker*/}
              {/*  selected={formData.birthDate}*/}
              {/*  onChange={(date) => setFormData({ ...formData, birthDate: date })}*/}
              {/*  dateFormat="yyyy년 MM월 dd일"*/}
              {/*  showYearDropdown*/}
              {/*  yearDropdownItemNumber={100}*/}
              {/*  scrollableYearDropdown*/}
              {/*/>*/}
              <BirthDatePicker/>
              <div className={"blank2"}></div>
              <div className={"flex-row-just"}>
                <div className="flex-column">
                  <div className="sub-text">성별</div>
                  <div className="gender-container">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="남성"
                        checked={formData.usergender === '남성'}
                        onChange={(e) => setFormData({...formData, usergender: e.target.value})}
                      />
                      남성
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="여성"
                        checked={formData.usergender === '여성'}
                        onChange={(e) => setFormData({...formData, usergender: e.target.value})}
                      />
                      여성
                    </label>
                  </div>
                </div>
                <div className="flex-column">
                  <div className="sub-text">내/외국인</div>
                  <div className="citizenship-container">
                    <label>
                      <input
                        type="radio"
                        name="citizenship"
                        value="내국인"
                        checked={formData.userlocal === '내국인'}
                        onChange={(e) => setFormData({...formData, userlocal: e.target.value})}
                      />
                      내국인
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="citizenship"
                        value="외국인"
                        checked={formData.userlocal === '외국인'}
                        onChange={(e) => setFormData({...formData, userlocal: e.target.value})}
                      />
                      외국인
                    </label>
                  </div>
                </div>
              </div>
              <div className="sub-text">*이메일</div>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                value={formData.useremail}
                onChange={(e) => setFormData({...formData, useremail: e.target.value})}
              />
              <div className="sub-text">지역</div>
              <div className="location-container">
                <input
                  type="text"
                  placeholder="시/도"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="구"
                  value={formData.userregion}
                  onChange={(e) => setFormData({...formData, userregion: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="동"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                />
              </div>

              <button
                className={`next-button ${formData.usergender && formData.userlocal && formData.useremail && formData.userregion ? 'next-active' : ''}`}
                onClick={handleNextPage}>

                Next
              </button>
            </div>
          )}


          {/* 세부정보 */}
          {currentPage === 3 && (
            <div className="specific-section">
              <div className="section-header">세부정보</div>
              <div className="sub-text">관심있는 금융 정보</div>
              <div className="interest-container">
                <label>
                  <input
                    type="radio"
                    name="interest"
                    value="예금"
                    checked={formData.interest === '예금'}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  />
                  예금
                </label>
                <label>
                  <input
                    type="radio"
                    name="interest"
                    value="적금"
                    checked={formData.interest === '적금'}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  />
                  적금
                </label>
                <label>
                  <input
                    type="radio"
                    name="interest"
                    value="주식"
                    checked={formData.interest === '주식'}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  />
                  주식
                </label>
                <label>
                  <input
                    type="radio"
                    name="interest"
                    value="코인"
                    checked={formData.interest === '코인'}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  />
                  코인
                </label>
                <label>
                  <input
                    type="radio"
                    name="interest"
                    value="부동산"
                    checked={formData.interest === '부동산'}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  />
                  부동산
                </label>
              </div>
              <button
                className={`next-button ${formData.interest ? 'next-active' : ''}`}
                      onClick={() => {
                        handleSubmit();
                      }}
              >
                Submit
              < /button>
            </div>
          )}
          <div className={"flex-column"}>
            <img src={logo} alt="Site Logo" className="site-logo"/>
            <img src={titleTextImg} alt="Site Logo" className="site-title"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
