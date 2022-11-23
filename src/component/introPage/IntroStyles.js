import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";

export const IntroContainer = styled.div`
  display: flex;
  padding: 10px;
  margin: auto;
  height: 100vh;
  width: 100vw;
  background-color: rgb(60, 58, 58);
  color: bisque;
  ${mobile({
    flexDirection: "column",
    padding: "5px",
  })}
`;
export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const RightContainer = styled.div`
  flex: 1;
`;
export const LeftWrapper = styled.div`
  flex: 4;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "10px",
  })}
`;
export const Hello = styled.h3`
  font-size: 20px;
  font-weight: bold;
  ${mobile({
    fontSize: "20px",
  })}
`;

export const Name = styled.h3`
  font-weight: bolder;
`;
export const TitleContainer = styled.div`
  height: 50px;
  overflow: hidden;
  ${mobile({
    height: "25px",
  })}
`;
const Move = keyframes`
33.33% {
    transform: translateY(-50px);
}

66.66% {
    transform: translateY(-100px);
}

99.99% {
    transform: translateY(-150px);
}
`;

export const TitleWrapper = styled.div`
  height: 100%;
  animation: ${Move} 10s ease-in-out infinite alternate;
`;

export const Desc = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(22, 214, 22);
  align-items: center;
  ${mobile({
    height: "25px",
    fontSize: "15px",
  })}
`;
export const BioContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
`;
export const Bio = styled.p`
  font-size: 15px;
  font-weight: 100;
  ${mobile({
    fontSize: "15px",
    fontWeight: "100",
  })}
`;
export const ImageContainer = styled.div`
  clip-path: polygon(100% 0%, 100% 56%, 100% 100%, 35% 100%, 0% 50%, 33% 0);
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

export const ButtonGroup = styled.div`
flex: 1;
margin: 0px 300px 50px 0px;
display: flex;
justify-content: space-around;
padding: 40px;
${mobile({
  margin: "0px 150px 0px 0px",
  padding: "0px 0px 20px 0px"
})}
`

export const HireButton = styled.button`
width: 100px;
height: 30px;
border-radius: 25px;
font-weight: 400;
font-size: 15px;
background-color: rgb(22, 214, 22);
color: bisque;
border: none;
padding: 5px;
margin: 10px;
${mobile({
  fontSize:"12px"
})}
`

export const HireLink = styled.a`
text-decoration: none;
`

export const DownloadCv= styled.button`
width: 100px;
height: 30px;
border-radius: 25px;
font-weight: 500;
font-size: 15px;
background-color: rgb(253, 62, 48);
color: bisque;
border: none;
padding: 5px;
margin: 10px;
${mobile({
  fontSize:"12px"
})}
`
export const CvLink = styled.a`
text-decoration: none;
`