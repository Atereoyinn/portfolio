import { mobile } from "../responsive";
import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
  color: bisque;
  background: rgb(60, 58, 58);
  ${mobile({
    flexDirection: "column",
    height: "100vh",
  })}
`;

export const AboutLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({
    flex: "3"
  })}
  
`;

export const AboutRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({
    flex: "7"
  })}
`;
export const AboutCardBg = styled.div`
  height: 70vh;
  width: 60%;
  top: 40px;
  left: 40px;
  border-radius: 30px;
  overflow: hidden;
  background: rgb(25, 24, 24);
  position: absolute;
  ${mobile({
   display:"none"
  })}
`;
export const AboutCard = styled.div`
  height: 70vh;
  width: 60%;
  ${mobile({
    height: "50vh",
    width: "100%",
    marginBottom: "5px",
  })}
`;

export const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
  position: relative;
`;

export const AboutRightDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  height: 90%;
  ${mobile({
    height: "80%"
  })}
`;

export const AboutHeader = styled.h3`
  text-decoration: underline;
  font-size: 30px;
  margin: 0;
  ${mobile({
    fontSize: "20px",
    marginBottom: "5px"
  })}
`;

export const Paragraphing = styled.p`
  display: block;
  font-size: 15px;
  font-weight: lighter;
  height: 50px;
  ${mobile({
    fontSize: "9px",
    margin: "0px",
    padding: "0px 10px",
  })}
`;

export const AboutAnimationContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    margin: "0px",
  })}
`;

export const AboutAnimationWrapper = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-left: 35px;
  color: rgb(17, 224, 17);
  ${mobile({
    fontSize: "20px",
    margin: "auto",
  })}
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  ${mobile({
    fontSize: "20px",
    marginBottom: "0px",
    wordSpacing: "0.2em"
  })}
`;

export const ParagraphCont = styled.div`
  ${mobile({
    flexDirection:"column",
    marginBottom: "0px",
  })}
`;
