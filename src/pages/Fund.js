import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import NavbarMain from "./NavbarMain";
import {BannerImg} from "./HomeStyle";
import sitebanner from "./Group 123.png";
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
  gap: 50px;
`; 


const StyledTitle = styled.h2`
  font-family: 'BMJua';
  font-weight: 500;
`;

/* &:hover {
  transform: scale(1.1);
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}
 */


const FundPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching data from API
    fetch('https://101.79.9.230:8080/geumsabba/supportfund/getall')
    // fetch('http://localhost:8080/geumsabba/supportfund/getall')
      .then(response => response.json())
      .then(data => {
          setData(data);
          console.log('Fetched data:', data);
          console.log('Fetched id:', data[0].id);
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
      <NavbarMain/>
      <BannerImg src={sitebanner}/>

      <link href="https://webfontworld.github.io/woowahan/BMJua.css" rel="stylesheet"/>

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
        <div className={"blank1"}></div>
        <ContentGrid>
          {/* <FundOverlay className="overlay">view more !</FundOverlay> */}
          {data.map((item, index) => (
            <ContentBox
              // key={item.id}
              key={index}
              thumbnail={`data:image/png;base64,${item.image}`}
              title={<StyledTitle>{item.title}</StyledTitle>}
              dDay={item.deadline}
              region={item.region}
              age={item.age}
              hashtags={[item.hashtag1, item.hashtag2, item.hashtag3]}
            />
          ))}
        </ContentGrid>
      </FundPageContainer>
    </>
  );
};

export default FundPage;
