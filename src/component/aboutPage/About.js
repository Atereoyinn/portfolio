import {AboutContainer,AboutLeft,AboutCardBg,AboutCard,AboutImage,AboutRight,AboutRightDesc,AboutHeader,Paragraphing,AboutAnimationContainer,AboutAnimationWrapper,Title,ParagraphCont} from "./aboutStyles";
import Typical from "react-typical";

const paragraph1 = (
  <Paragraphing>
    I have always had passion for design and innovation since my high school,
    this prompted me to study Electrical Engineering. I got introduce to
    designing and coding during my college days through Fortran programming
    language.
  </Paragraphing>
);

const paragraph2 = (
  <Paragraphing>
    However, I ventured into fulltime learning about web development in early
    2021 and since then, I have developed myself in HTML,CSS,Javascript and
    React Js. Having acquire these skills, overtime I have had the chance of
    demonstrated experience in web development, UI/UX design, project mangement
    and coordination.
  </Paragraphing>
);
const paragraph3 = (
  <Paragraphing>
    I am a strategic and innovative personality with a passion for driving brand
    awareness and product performance. I have an enormous interest in
    progressive sustainable technologies that promote financial inclusion and
    improve the African standard of living and the whole of humanity at large.
  </Paragraphing>
);
const paragraph4 = (
  <Paragraphing>
    I am skilled in bringing ideas and innovations to life by making use of the
    latest technologies and fruitful team collaboration.
  </Paragraphing>
);

const About = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <AboutCardBg></AboutCardBg>
        <AboutCard>
          <AboutImage src="Developer.jpg" alt="A Software Developer on duty" />
        </AboutCard>
      </AboutLeft>
      <AboutRight>
        <AboutRightDesc>
          <AboutHeader>About Me</AboutHeader>
            <AboutAnimationContainer>
              <Title>I'm Abiola and I am a  </Title>
              <AboutAnimationWrapper>
                <Typical
                  loop={Infinity}
                  steps={[
                    " Frontend Developer",
                    2500,
                    " UI/UX Designer",
                    2500,
                    " Product Manager",
                    2500,
                  ]}
                  wrapper="h4"
                />
              </AboutAnimationWrapper>
            </AboutAnimationContainer>
            
              <ParagraphCont>
              {paragraph1}
              {paragraph2}
              {paragraph3}
              {paragraph4}
              </ParagraphCont>
            
        </AboutRightDesc>
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
