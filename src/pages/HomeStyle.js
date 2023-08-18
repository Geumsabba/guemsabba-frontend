//styled-components for Home.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


// banner img
export const BannerImg = styled.img`
  width: 100%;
  height: 440px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
`;


// page div
export const PageDiv = styled.div`
  width: 95%;
  //background-color: #cbcbcb;
`;


export const BannerDiv = styled.div`
  //width: 100%;
  //height: 540px;
  color: #4A55A2;
  font-size: 20px;
  font-weight: bold;
  font-family: 'TangsBudaeJjigae';
                                             
`;

export const EditorProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  //background-color: #2185d0;
  //border: 1px solid red;
  margin-top: 30px;
`;

export const EditorProfileContainer = styled.div`
  width: 138px;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #737373;
  border-radius: 15%;
  background-color: transparent;
`;

export const EditorProfile = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 15%;
  overflow: hidden;

  box-shadow: 0 0 0 2px #ccc; /* Add transparent inside and outline effect */
  transition: box-shadow 0.3s; /* Add transition effect for the box shadow */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 0 0 2px #4a4a4a; /* Change the box shadow on hover */
  }

  z-index: 2;
`;

export const ThinGrayLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 70px;
  margin-bottom: 40px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-items: center;
`;


export const EditorName = styled.div`
  color: #26231D;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;

export const NewsletterLeft = styled.img`
  width: 592px;
  height: 352px;
  object-fit: cover;
  margin-top: 30px;
  //margin-bottom: 30px;
  border-radius: 56px;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DateDiv = styled.div`
  width: 100%;
  height: 100%;
  //background-color: #4A55A2;
  //color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  //justify-content: center;
  //align-items: center;
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  margin-left: 87px;
  //background-color: #2185d0;
`;

export const TitleDiv = styled.div`
  color: black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-family: 'BMJua';
  weight: 400;
`;

export const ContentDiv = styled.div`
  display: flex;
  color: var(--ui-dark, #222);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-top: 33px;
  margin-bottom: 24px;
`;

export const MoreButton = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  position: absolute;
  right: 0;
  //bottom: 0;
  // margin-top: 28px;
  //margin-bottom: 48px;
  background-color: #ffffff;
  color: #4A55A2;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  gap: 12px;

  line-height: normal;
  border: 3px solid #C5DFF8;

  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #5ba9ee;
  }
`;

export const MoreDivText = styled.div`
  color: #C5DFF8;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

`;

//style for KnlgContainer and KnlgImg

export const KnlgContainer = styled.div`
  width: 100%;
  height: 100%;
  //background-color: #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;

  &:hover {
    transform: scale(1.1);
    transform-origin: center center;
    transition: all 0.2s ease-in-out;
  }
`;

export const KnlgImg = styled.img`
  width: 100%;
  height: 440px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
`;


//style for NewsLetterWrapper
export const NewsLetterWrapper = styled.div`
  position: relative;
  width: 400px;
  //background-color: #cbcbcb;
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  margin-top: 12px;

  &:hover {
    transform: scale(1.1);
    transform-origin: center center;
    transition: all 0.2s ease-in-out;
  }

`;

export const NewsLetterImg = styled.img`
  width: 100%;
  height: 265px;
  //object-fit: contain;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11px;

  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  opacity: 1;

`;

export const NewsLetterOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 267px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7895CB;
  color: #fff;
  font-size: 40px;
  font-family: 'SCoreDream';

  &:hover {
    opacity :0.93; }
  
  &:hover .overlay {
      opacity: 1;
  }
`;

export const NewsLetterTitle = styled.div`
  color: #26231D;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--ui-dark, #222);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  line-height: 36px; /* 112.5% */
  margin-top: 24px;
  font-family: 'BMJua';
`;


export const NewsLetterContent = styled.div`
  //text-align: center;
  font-style: normal;
  font-weight: 400;
  margin-top: 16px;
  color: #000000;
  /* Text sm/Semibold */
  font-family: Inter;
  font-size: 14px;
  line-height: 20px; /* 142.857% */
  margin-bottom: 58px;
`;

export const NewsLetterWriter = styled.div`
  margin-top: 16px;
  color: #6941C6;
  font-family: 'BMJua';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; 
`;


export const ThreeColContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 400px;
  //border: 1px solid #ccc;
`;

export const OneRowContainer = styled.div`
  //flex: 1;
  display: flex;
  //justify-content: center;
  align-items: center;
  //background-color: #f0f0f0;
  //border: 1px solid #ddd;
  flex-direction: column;
  margin: 0 26px ;
`;