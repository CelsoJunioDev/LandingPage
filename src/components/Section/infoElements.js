import styled from 'styled-components';
import img1 from '../../assets/initial.svg'

export const InfoContainer = styled.div`
  color: #fff;
  background-color: ${({ lightBgColor }) => (lightBgColor ? '#fff' : '#121212')};
  /* background-image: url(${img1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2'; /* busca pelo id da div */
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1; /* id da div */

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2; /* id da div */

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #2d669d;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: bold;
  color: ${({ lightBgColor }) => (lightBgColor ? '#000' : '#fff')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  font-family: 'Roboto';
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 2;
  color: ${({ lightBgColor }) => (lightBgColor ? '#000' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

