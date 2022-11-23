import styled from "styled-components";
import { mobile } from "../responsive";


export const ContactContainer = styled.div`
  color: bisque;
  background: rgb(60, 58, 58);
  width: 100vw;
`;
export const ContactWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: auto;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactBg = styled.div`
  height: 100%;
  width: 70px;
  background: rgb(239, 205, 121);
  ${mobile({
    width: "100%",
  })}
`;

export const LeftHeader = styled.div`
  padding: 0 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${mobile({
    padding: "0 5px",
    margin: "2px",
  })}
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const InfoHeader = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  padding: 5px;
  ${mobile({
    textAlign: "center"
  })}
`;

export const PhoneIcon = styled.div`
  margin: 0;
  padding: 5px;
  font-size: 40px;
  font-weight: bold;
  ${mobile({
    textAlign: "center"
  })}
`;

export const PhoneSpan = styled.span`
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
`;

export const SocialHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: auto;
  ${mobile({
    fontSize: "25px",
    margin:  "0px",
    flexDirection: "column",
  })}
`;

export const SocialHandleLink = styled.a`
  padding: 5px;
  margin: auto;
  color: bisque;
  ${mobile({
    padding: "5px",
  })}
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  ${mobile({
    margin: "auto",
    padding: "10px",
  })}
`;

export const RightDesc = styled.div`
  font-size: 20px;
  font-weight: lighter;
  padding: 10px;
  margin: 10px;
  ${mobile({
    fontSize: "15px",
    padding: "5px",
    margin: "0px 10px",
    textAlign:"center"
  })}
`;
export const FormStyle = styled.form`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    padding: "10px",
  })}
`;

export const Input = styled.input`
  width: 40vw;
  height: 10px;
  padding: 10px;
  margin: 5px;
  border: none;
  background: rgb(209, 192, 192);
  border-bottom: 5px solid rgb(162, 132, 132);
  ${mobile({
    width: "70vw",
    padding: "5px",
    margin: "3px",
    borderBottom: "2px solid",
  })}
`;

export const TextArea = styled.textarea`
  width: 40vw;
  padding: 10px;
  margin: 10px;
  background: rgb(213, 192, 192);
  border-bottom: 5px solid rgb(162, 132, 132);
  ${mobile({
    width: "70vw",
    padding: "5px",
    margin: "3px",
    borderBottom: "2px solid",
  })}
`;

export const Button = styled.button`
  font-size: medium;
  font-weight: bold;
  border: none;
  margin: auto;
  padding: 5px;
  color: bisque;
  background: rgb(48, 202, 48);
  width: 120px;
  height: 40px;
  cursor: pointer;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  ${mobile({
    padding: "2px",
    margin: "5px",
    width: "120px",
    height: "30px",
  })}
`;
