import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import logo from './mainlogo2.png';
import titleTextImg from './Title.png';
import Select from 'react-select';
import BirthDatePicker from "./BirthDatePicker";
import number1 from '../img/Group 3.png';
import number2 from '../img/Group 4.png';
import number3 from '../img/Group 5.png';

//import Group 116, 117, 118, 119, 120
import group116 from '../img/Group 116.png';
import group117 from '../img/Group 117.png';
import group118 from '../img/Group 118.png';
import group119 from '../img/Group 119.png';
import group120 from '../img/Group 120.png';

import sitebanner from '../img/Group 78.png';
import NavbarMain from "./NavbarMain";
import {
  BannerDiv,
  BannerImg,
  PageContainer,
  PageDiv,
  EditorProfileWrapper,
  EditorProfile,
  EditorProfileContainer,
  ThinGrayLine,
  FlexCol,
  EditorName,
  NewsletterLeft,
  NewsletterContainer,
  DateDiv,
  ContentContainer,
  TitleDiv,
  ContentDiv,
  MoreButton,
  MoreDivText,
  KnlgContainer,
  KnlgImg,
  FlexRow,
  NewsLetterWrapper, NewsLetterOverlay,
  NewsLetterImg, NewsLetterTitle, NewsLetterContent, OneRowContainer, ThreeColContainer, NewsLetterWriter, FlexRow2
} from "./HomeStyle";
import Newsletter from "./Newsletter";

import placeholder from "../img/placeholder.png"
import placeholder2 from "../img/placeholder2.png"
import placeholder3 from "../img/placeholder3.png"
import placeholder4 from "../img/placeholder4.png"
import placeholder5 from "../img/placeholder5.png"
import placeholder6 from "../img/placeholder6.png"
import {Link} from "react-router-dom";


const Home = () => {
  const [editorData, setEditorData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with your actual API endpoint
    fetch('http://101.79.9.230:8080/geumsabba/newsletter/getall')
    // fetch('http://localhost:8080/geumsabba/newsletter/getall')
      .then(response => response.json())
      .then(data => {
          setData(data);
          console.log('Fetched data:', data);
          console.log('Fetched id:', data[0].id);
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  useEffect(() => {
    // Fetch data from the API here
    // For demonstration purposes, I'm using a sample array of image URLs
    const fetchSampleData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
      const data = await response.json();
      setEditorData(data);
    };

    fetchSampleData();
  }, []);

  const firstItem = data[0] || {};

  return (
    <>
      <NavbarMain/>
      <PageContainer>
        <BannerImg src={sitebanner}/>
        <div className={"blank1"}></div>
        <PageDiv>
          {/*내가 구독한 에디터*/}
          <link href="https://webfontworld.github.io/DdangFonts/TangsBudaeJjigae.css" rel="stylesheet"/>
          <BannerDiv>내가 구독한 에디터</BannerDiv>
          {/*"EditorProfile" 태그 8개 생성*/}
          <EditorProfileWrapper>
            {editorData.map((editor) => (
              <FlexCol key={editor.id}>
                <EditorProfileContainer>
                  <EditorProfile>
                    <img src={editor.url} alt="Editor"/>
                  </EditorProfile>
                </EditorProfileContainer>
                <EditorName>에디터</EditorName>
              </FlexCol>
            ))}
          </EditorProfileWrapper>
          <ThinGrayLine/>

          <BannerDiv>오늘의 금사빠 뉴스레터</BannerDiv>
          <NewsletterContainer>
            {typeof firstItem === 'undefined' ? (
              <div>Loading...</div>
            ) : (
              <NewsletterLeft
                src={
                  firstItem.image1
                    ? `data:image/png;base64,${firstItem.image1}`
                    : placeholder
                }
              />
            )}
            <ContentContainer>
              <DateDiv>{firstItem.date || 'YYYY.MM.DD'}</DateDiv>
              <TitleDiv>{firstItem.title || '제목을 입력하세요'}</TitleDiv>
              <ContentDiv>{firstItem.header || '자세한 내용을 보려면 더보기를 눌러주세요!'}</ContentDiv>
              <MoreButton>
                <MoreDivText onClick={
          () => window.location.href = '/NewsletterContents'
           }>Read more</MoreDivText>
              </MoreButton>
            </ContentContainer>
          </NewsletterContainer>
          <ThinGrayLine/>

          {/*금사빠 기초 금융지식*/}
          <BannerDiv>금사빠 기초 금융지식</BannerDiv>
          <KnlgContainer>
            <FlexRow>
              <KnlgImg style={{width: 430, height: 181, marginRight: 14}} src={group116}/>
              <KnlgImg style={{width: 562, height: 181, marginRight: 14}} src={group117}/>
              <KnlgImg style={{width: 333, height: 181}} src={group118}/>
            </FlexRow>
            <FlexRow>
              <KnlgImg style={{width: 735, height: 181, marginRight: 14}} src={group120}/>
              <KnlgImg style={{width: 610, height: 181}} src={group119}/>
            </FlexRow>

          </KnlgContainer>
          <ThinGrayLine/>

          {/*오늘의 인기 뉴스레터*/}
          <BannerDiv>이번주 인기 뉴스레터 </BannerDiv>
          <FlexRow2>
            {data.slice(0, 3).map((item, index) => {
              const key = `${item.id}-${index}`;

              return (
                <FlexRow2 key={key}>
                  <NewsLetterWrapper>
                    <Link to="/NewsletterContents">
                      <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                      <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                    </Link>
                    <NewsLetterTitle>{item.title}</NewsLetterTitle>
                    <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                    <NewsLetterContent>{item.header}</NewsLetterContent>
                  </NewsLetterWrapper>
                  <div style={{width: 52 }}></div>
                </FlexRow2>

              );
            })}
          </FlexRow2>

          {/*<div style={{height: 40}}></div>*/}
          <ThinGrayLine/>

          {/*뉴스레터 모아보기 */}
          <BannerDiv>뉴스레터 모아보기 </BannerDiv>
          <ThreeColContainer>
            <OneRowContainer>
              {data.map((item, index) => {
                const key = `${item.id}-${index}`;
                // console.log('Generated key:', key);

                return (
                  (index) % 3 === 0 && (
                    <NewsLetterWrapper key={key}>
                      <Link to="/NewsletterContents">
                        <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                        <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                      </Link>
                      <link href="https://webfontworld.github.io/woowahan/BMJua.css" rel="stylesheet"/>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                    </NewsLetterWrapper>
                  )
                );
              })}
            </OneRowContainer>
            <OneRowContainer>
              {data.map((item, index) => {
                const key = `${item.id}-${index}`;
                // console.log('Generated key:', key);

                return (
                  (index) % 3 === 1 && (
                    <NewsLetterWrapper key={key}>
                      <Link to="/NewsletterContents">
                        <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                        <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                      </Link>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                    </NewsLetterWrapper>
                  )
                );
              })}
            </OneRowContainer>
            <OneRowContainer>
              {data.map((item, index) => {
                const key = `${item.id}-${index}`;
                // console.log('Generated key:', key);

                return (
                  (index) % 3 === 2 && (
                    <NewsLetterWrapper key={key}>
                      <Link to="/NewsletterContents">
                        <NewsLetterImg src={`data:image/png;base64,${item.image1}`}/>
                        <NewsLetterOverlay className="overlay">view more !</NewsLetterOverlay>
                      </Link>
                      <NewsLetterTitle>{item.title}</NewsLetterTitle>
                      <NewsLetterWriter>edit: {item.editor}</NewsLetterWriter>
                      <NewsLetterContent>{item.header}</NewsLetterContent>
                    </NewsLetterWrapper>
                  )
                );
              })}
            </OneRowContainer>
          </ThreeColContainer>


        </PageDiv>
      </PageContainer>

    </>
  );
};

export default Home;
