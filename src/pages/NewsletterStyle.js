//styled-components for Newletter.js
import styled, { css } from 'styled-components'

//style for NewsLetterWrapper 
export const ThreeColContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  height: 400px;
`;

export const OneRowContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
`;


export const NewsLetterWrapper  = styled.div.attrs(props => ({
  className: props.show ? 'show' : ''
}))`


  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;


  //opacity: 0;
  //transition: opacity 1s ease-in-out;
  //&.show {
  //  opacity: 1;
  //}
`;


//NewsletterImg 
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

  &:hover {
    transform: scale(1.1);
  }
`;

//Newslettertext 
export const NewsLetterTitle = styled.div`
  color: #26231D;
  font-family: 'SBAggro';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--ui-dark, #222);
  font-family: S-Core Dream;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  margin-top: 24px;

`;

export const NewsLetterContent = styled.div`
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
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; 
`;

