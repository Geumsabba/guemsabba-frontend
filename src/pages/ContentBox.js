import React from 'react';
import styled from 'styled-components';

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //padding: 34px;
  //border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 60px;
`;

const Thumbnail = styled.img`
  width: 384px;
  height: 240px;
  object-fit: cover;
  //margin-right: 10px;
`;

const ContentDetails = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
`;

const DDay = styled.div`
  font-weight: bold;
  text-align: right;
  font-size: 30px;
  color: #4A55A2;
`;

const Info = styled.div`
  display: flex;
  //align-items: center;
  margin-top: 5px;
  flex-direction: column;
`;

const Region = styled.div`
  margin-right: 10px;
`;

const Age = styled.div`
  margin-right: 10px;
`;

const Income = styled.div`
  margin-right: 10px;
`;

const HashtagContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Hashtag = styled.div`
  padding: 3px 12px;
  margin-right: 5px;
  background-color: #4a55a2;
  color: white;
  border-radius: 15px;
  margin-left: 6px;
`;

const ContentBox = ({thumbnail, title, dDay, region, age, income, hashtags}) => {
  return (
    <StyledContentBox>
      <Thumbnail src={thumbnail} alt="Thumbnail"/>
      <ContentDetails>
        <Title>{title}</Title>
        <DDay>{dDay}</DDay>
        <Info>
          <Region>{region}</Region>
          <Age>{age}</Age>
          <Income>{income}</Income>
        </Info>
        <HashtagContainer>
          {hashtags.map((tag, index) => (
            <Hashtag key={index}>{tag}</Hashtag>
          ))}
        </HashtagContainer>
      </ContentDetails>
    </StyledContentBox>
    // <StyledContentBox>
    //   <Thumbnail src={sampleImage} alt="Thumbnail" />
    //   <ContentDetails>
    //     <Title>경기도 청소년 교통비 지원 </Title>
    //     <DDay>D-7</DDay>
    //     <Info>
    //       <Region>지역: 경기도</Region>
    //       <Age>나이: 만 13세~만 23세 </Age>
    //     </Info>
    //     <HashtagContainer>
    //       {hashtags.map((tag, index) => (
    //         <Hashtag key={index}>{tag}</Hashtag>
    //       ))}
    //     </HashtagContainer>
    //   </ContentDetails>
    // </StyledContentBox>
  );
};

export default ContentBox;
