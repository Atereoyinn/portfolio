import styled from "styled-components";
import { mobile } from "../responsive";

//Style Components for Products

export const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border-radius: 2px solid white;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  ${mobile({
    width: "50%",
    margin: "12px 8px",
    border: "1px solid white",
    borderRadius: "7px 7px 0px 0px",
  })}
`;
export const BrowserClone = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  ${mobile({
    height: "10px",
  })}
`;

export const Circle = styled.p`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
  background-color: wheat;
`;
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
export const ImageStyle = styled.img`
  width: 100%;
  transition: all 15s ease;
  &:hover {
    transform: translateY(-100%);
  }
`;
export const Paragraph = styled.p`
  font-size: smaller;
  font-weight: bold;

  color: darkslategray;
  opacity: 0.5;
  ${mobile({
    margin: "10px",
    fontSize: "7px",
    fontWeight: "bold",
    color: "teal",
    opacity: "0.8",
  })}
`;

//Style Components for ProductList

export const Header = styled.h2`
  font-size: large;
  font-weight: bold;
  padding: 5px;
  ${mobile({
    fontSize: "15px",
  })}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${mobile({
   flexDirection: "column",
  })}
`;
export const MyProject = styled.h3`
  text-decoration: underline;
  font-size: 30px;
  margin: 10px;
  padding: 5px;
  ${mobile({
    fontSize: "20px",
  })}
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: rgb(60, 58, 58);
  color: bisque;
  justify-content: center;
  align-items: center;
  ${mobile({
    textAlign: "center",
    width: "100vw"
  })}
`;
