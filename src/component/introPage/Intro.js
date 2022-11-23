import React from "react";
import {
  Bio,
  Image,
  BioContainer,
  Desc,
  Hello,
  ImageContainer,
  IntroContainer,
  LeftContainer,
  LeftWrapper,
  Name,
  RightContainer,
  TitleContainer,
  TitleWrapper,
  ButtonGroup,
  HireButton,
  HireLink,
  DownloadCv,
  CvLink,
} from "./IntroStyles";

const About = () => {
  return (
    <IntroContainer>
      <LeftContainer>
        <LeftWrapper>
          <div>
            <Hello> Hello, My name is </Hello>
            <Name> AYUBA Abiola </Name>
          </div>
          <TitleContainer>
            <TitleWrapper>
              <Desc>Web Developer</Desc>
              <Desc> React Js Developer</Desc>
              <Desc> Javascript Developer</Desc>
              <Desc> UI/UX Designer</Desc>
            </TitleWrapper>
          </TitleContainer>

          <BioContainer>
            <Bio>
              I am a graduate of Electrical and Electronics Engineering, as a
              result of my academic background, I have always enjoy bringing
              imagination to reality, hence my passion for Web Development. I
              make use of HTML, CSS, Javascript and React Js to design Awesome
              web Applications.
            </Bio>
          </BioContainer>
        </LeftWrapper>
        <ButtonGroup>
            <HireLink href="#contact">
              <HireButton>
                 Hire Me
              </HireButton>
            </HireLink>
            <CvLink href="Resume.pdf" download="Ayuba Abiola.pdf">
              <DownloadCv>
                 Get Resume
              </DownloadCv>
            </CvLink>
          </ButtonGroup>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image src="abiola.png" alt="Profile Picture" />
        </ImageContainer>
      </RightContainer>
    </IntroContainer>
  );
};

export default About;
