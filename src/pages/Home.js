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
  NewsLetterWrapper,
  NewsLetterImg, NewsLetterTitle, NewsLetterContent, OneRowContainer, ThreeColContainer, NewsLetterWriter
} from "./HomeStyle";
import Newsletter from "./Newsletter";

import placeholder from "../img/placeholder.png"
import placeholder2 from "../img/placeholder2.png"
import placeholder3 from "../img/placeholder3.png"
import placeholder4 from "../img/placeholder4.png"
import placeholder5 from "../img/placeholder5.png"
import placeholder6 from "../img/placeholder6.png"


const Home = () => {
  const [editorData, setEditorData] = useState([]);

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


  return (
    <>
      <NavbarMain/>
      <PageContainer>
        <BannerImg src={sitebanner}/>
        <PageDiv>
          {/*내가 구독한 에디터*/}
          <BannerDiv>내가 구독한 에디터</BannerDiv>
          {/*"EditorProfile" 태그 8개 생성*/}
          <EditorProfileWrapper>
            {editorData.map((editor) => (
              <FlexCol>
                <EditorProfileContainer>
                  <EditorProfile key={editor.id}>
                    <img src={editor.url} alt="Editor"/>
                  </EditorProfile>
                </EditorProfileContainer>
                <EditorName>에디터</EditorName>
              </FlexCol>
            ))}
          </EditorProfileWrapper>
          <ThinGrayLine/>

          {/*오늘의 금사빠 뉴스레터*/}
          <BannerDiv>오늘의 금사빠 뉴스레터</BannerDiv>
          <NewsletterContainer>
            <NewsletterLeft src={placeholder}></NewsletterLeft>
            <ContentContainer>
              <DateDiv>
                2023.08.17
              </DateDiv>
              <TitleDiv>
                “어쩌구 저쩌구 제목을 입력 ”
              </TitleDiv>
              <ContentDiv>
                간단한 설명 와라라랄랄 간단한 설명 와라라랄랄<br/>
                간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                간단한 설명 와라라랄랄 <br/>
                간단한 설명 와라라랄랄 <br/>
                간단한 설명 와라라랄랄 <br/>
              </ContentDiv>
              <MoreButton>
                <MoreDivText>
                  Read more
                </MoreDivText>
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
          <FlexRow>

            <NewsLetterWrapper>
              <NewsLetterImg src={placeholder}/>
              <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
              <NewsLetterWriter>
                edit: 명시은
              </NewsLetterWriter>
              <NewsLetterContent>
                {/*edit: 명시은*/}
                <MoreButton>
                  <MoreDivText>
                    Read more
                  </MoreDivText>
                </MoreButton>
              </NewsLetterContent>
            </NewsLetterWrapper>

            <div style={{width: 52}}></div>

            <NewsLetterWrapper>
              <NewsLetterImg src={placeholder}/>
              <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
              <NewsLetterWriter>
                edit: 명시은
              </NewsLetterWriter>
              <NewsLetterContent>
                {/*edit: 명시은*/}
                <MoreButton>
                  <MoreDivText>
                    Read more
                  </MoreDivText>
                </MoreButton>
              </NewsLetterContent>
            </NewsLetterWrapper>

            <div style={{width: 52}}></div>

            <NewsLetterWrapper>
              <NewsLetterImg src={placeholder}/>
              <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
              <NewsLetterWriter>
                edit: 명시은
              </NewsLetterWriter>
              <NewsLetterContent>
                {/*edit: 명시은*/}
                <MoreButton>
                  <MoreDivText>
                    Read more
                  </MoreDivText>
                </MoreButton>
              </NewsLetterContent>
            </NewsLetterWrapper>

          </FlexRow>

          {/*<div style={{height: 40}}></div>*/}
          <ThinGrayLine />

          {/*뉴스레터 모아보기 */}
          <BannerDiv>뉴스레터 모아보기 </BannerDiv>

          <ThreeColContainer>
            <OneRowContainer>
              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄
                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder2}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>

                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

            </OneRowContainer>

            <OneRowContainer>

              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder3}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder4}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>

                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

            </OneRowContainer>

            <OneRowContainer>

              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder5}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>
                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

              <NewsLetterWrapper>
                <NewsLetterImg src={placeholder6}/>
                <NewsLetterTitle>컨텐츠 제목 </NewsLetterTitle>
                <NewsLetterWriter>
                  edit: 명시은
                </NewsLetterWriter>
                <NewsLetterContent>
                  간단한 설명 와라라랄랄 <br/>
                  간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 간단한 설명 와라라랄랄 <br/>

                  <MoreButton>
                    <MoreDivText>
                      Read more
                    </MoreDivText>
                  </MoreButton>
                </NewsLetterContent>
              </NewsLetterWrapper>

            </OneRowContainer>
          </ThreeColContainer>


        </PageDiv>
      </PageContainer>

    </>
  );
};

export default Home;
