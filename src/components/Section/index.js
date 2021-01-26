import React from 'react';
import { Button } from '../Button';
import { BtnWrap,  Heading, TextWrapper, TopLine, Subtitle, InfoWrapper, InfoRow, InfoContainer, Column1, Column2, ImgWrap, Img } from './infoElements';

const Section = ({ id, imgStart, topLine, headLine, description, buttonLabel, alt, buttonDirection, lightBgColor, img }) => {
  return (
    <>
      <InfoContainer id={id} lightBgColor={lightBgColor}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
             <Column1>  {/* no style vai definir se a col1 ou a 2 vem primeiro */}
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBgColor={lightBgColor}>{headLine}</Heading>
                <Subtitle lightBgColor={lightBgColor}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={buttonDirection}
                    smooth={true}
                    duration={500}
                    exact="true"
                  >
                    {buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Section;