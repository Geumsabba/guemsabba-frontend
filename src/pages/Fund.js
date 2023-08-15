import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import NavbarMain from "./NavbarMain";
import {BannerImg} from "./HomeStyle";
import sitebanner from "../img/Group 79.png";
import ContentBox from "./ContentBox";
import sampleImage from '../img/Image.png';


const FundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 20px;
`;

const FilterDropdown = styled.select`
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;


const FundPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with your actual API endpoint
    fetch('https://api.example.com/funds')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <NavbarMain/>
      <BannerImg src={sitebanner}/>

      <FundPageContainer>
        <SearchBar placeholder="Search"/>
        <FilterContainer>
          <FilterDropdown>
            <option value="">지역</option>
            {/* Add other options */}
          </FilterDropdown>
          <FilterDropdown>
            <option value="">나이</option>
            {/* Add other options */}
          </FilterDropdown>
          <FilterDropdown>
            <option value="">성별</option>
            {/* Add other options */}
          </FilterDropdown>
        </FilterContainer>
        <ContentGrid>
          {/* Render 12 Content Boxes */}
          {/*{Array.from({length: 12}).map((_, index) => (*/}
          {/*  <ContentBox key={index}>qwerqwer</ContentBox>*/}
          {/*))}*/}
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          <ContentBox thumbnail={sampleImage}
                      title={"경기도 청소년 교통비 지원 "}
                      dDay={"2023. 9. 1 ~ 2023. 10. 15"} region={"지역: 경기도"}
                      age={"나이: 만 13세~만 23세 "}
                      income={"소득: 기준 중위 소득 70% 이하"}
                      hashtags={["#경기도", "#교통비 지원", "#청소년"]}/>
          {/*{data.map(item => (*/}
          {/*  <ContentBox*/}
          {/*    key={item.id}*/}
          {/*    thumbnail={item.thumbnail}*/}
          {/*    title={item.title}*/}
          {/*    dDay={item.dDay}*/}
          {/*    region={item.region}*/}
          {/*    age={item.age}*/}
          {/*    hashtags={item.hashtags}*/}
          {/*  />*/}
          {/*))}*/}
        </ContentGrid>
      </FundPageContainer>
    </>
  );
};

export default FundPage;
