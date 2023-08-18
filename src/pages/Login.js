import React, {useState} from 'react';
import Navbar from './Navbar';
import './Login.css';
import logo from './mainlogo2.png';
import titleTextImg from './Title.png';
import Select from 'react-select';
import BirthDatePicker from "./BirthDatePicker";
import number1 from '../img/Group 3.png';
import number2 from '../img/Group 4.png';
import number3 from '../img/Group 5.png';

const Login = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    nickname: '',
    username: '',
    password: '',
    confirmPassword: '',
    birthDate: new Date(),
    gender: '',
    citizenship: '',
    email: '',
    city: '',
    district: '',
    neighborhood: '',
    interest: '',
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {
    console.log("Api Call start..")
    // Gather all the credentials and make the API call
    const userData = {
      userid: formData.userid,
      userpassword: formData.password,
    };

    // Make API call and handle signup
    // Example API call using fetch:
    fetch('https://101.79.9.230/geumsabba/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // Successful response
          console.log('Login successful'); // Specific log for successful response
          return response.json();
        } else {
          // Handle error response
          console.log('Login failed'); // Specific log for failed response
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        // Handle API response
        console.log('API Response:', data); // Log API response
        // Redirect to another page after successful login
        console.log('Redirecting to /home'); // Log redirection
        window.location.href = '/home'; // Redirect to /home
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <div className="signup-page">
      <Navbar/>
      <div className="signup-container">
        {/* <div className={"blank1"}></div> */}
        {/* <div className="header">로그인</div>  */}
        <div className={"blank1"}></div>
        <div className={"flex-row"}>


          {/* 계정생성 */}
          {currentPage === 1 && (
            <div className="account-section">
              <span
                style={{height: '40px'}}
                className={"vmid"}>
                {/* <img
                  //style width 10px
                  style={{width: '20px'}}
                  src={number1}></img>
                <span className="section-header">로그인</span> */}
              </span>
              {/* <div className="section-disc">로그인 해주세요:)</div> */}
              <div className={"blank1"}></div>
              <button className='login-box'>
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
                      style={{width: 610}}
                      placeholder="비밀번호를 입력해주세요."
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, userpassword: e.target.value})}
                    />
                  </div>
                </div>
                <button
                  className={`next-button 
                ${formData.userid && formData.password ?
                    'next-active'
                    : ''}`}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  로그인하기
                </button>
                <div className={"blank1"}></div>
                <div className="find-text">아이디/비밀번호 찾기</div>
              </button>

              <div className={"blank1"}></div>
              <button className='BirthDatePicker-button'
                      onClick={
                        () => window.location.href = 'Signup'
                      }> 회원가입하기
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
                        checked={formData.gender === '남성'}
                        onChange={(e) => setFormData({...formData, usergender: e.target.value})}
                      />
                      남성
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="여성"
                        checked={formData.gender === '여성'}
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
                        checked={formData.citizenship === '내국인'}
                        onChange={(e) => setFormData({...formData, userlocal: e.target.value})}
                      />
                      내국인
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="citizenship"
                        value="외국인"
                        checked={formData.citizenship === '외국인'}
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
                value={formData.email}
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
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, userregion: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="동"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                />
              </div>
              <button className="next-button" onClick={handleNextPage}>
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
              <button className="next-button" onClick={
                () => window.location.href = '/Newsletter'
              }
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

export default Login;
