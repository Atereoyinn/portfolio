import React from "react";
import { useState, useRef } from "react";
import { BsFillCursorFill, BsFillTelephoneOutboundFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Button, ContactBg, ContactContainer, ContactWrapper, FormStyle, InfoHeader, InfoItems, Input, Left, LeftHeader, PhoneIcon, PhoneSpan, Right, RightDesc, SocialHandle, SocialHandleLink, TextArea } from "./ContactStyle";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2q5g2vy",
        "template_34p3y1e",
        formRef.current,
        "hkj6UM0C8k2Le6pju"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert(
      `${inputValue.username} ${inputValue.user_subject} ${inputValue.user_email} ${inputValue.user_comment} submited`
    );
  };

  const formRef = useRef();
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <Left>
          <ContactBg></ContactBg>
          <LeftHeader>
            <InfoItems>
              <InfoHeader> Contact me, Let's discuss your work !</InfoHeader>
              <PhoneIcon>
                <p>
                  <BsFillTelephoneOutboundFill color="rgb(48, 202, 48)" />
                  <PhoneSpan>+2348115936467</PhoneSpan>
                </p>
              </PhoneIcon>
              <SocialHandle>
                <SocialHandleLink href="https://m.facebook.com/Atereoyin" target="_blank">
                  <FaFacebook />
                </SocialHandleLink>
                <SocialHandleLink href="https://www.instagram.com/atereoyin/" target="_blank">
                  <FaInstagram />
                </SocialHandleLink>
                <SocialHandleLink href="https://twitter.com/AtereOyin" target="_blank">
                  <FaTwitter />
                </SocialHandleLink>
                <SocialHandleLink href="https://github.com/Atereoyinn" target="_blank">
                  <FaGithub />
                </SocialHandleLink>
                <SocialHandleLink
                  href="https://www.linkedin.com/in/ayuba-abiola-332088161/"
                  target="_blank"
                >
                  <FaLinkedin />
                </SocialHandleLink>
              </SocialHandle>
            </InfoItems>
          </LeftHeader>
        </Left>

        <Right>
          <RightDesc>
            <p>
              {" "}
              <b>You've got an opportunity for me?</b> Please get in touch for
              any available opening or freelancing Job. Let's bring your
              imagination to live!
            </p>
          </RightDesc>
          <FormStyle ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="username"
              type="text"
              placeholder="Please enter your name"
              onChange={handleChange}
            />
            <Input
              name="user_subject"
              type="text"
              placeholder="Email Subject"
              onChange={handleChange}
            />
            <Input
              name="user_email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <TextArea
              rows={4}
              name="user_comment"
              type="text"
              placeholder="Comment"
              onChange={handleChange}
            />
            <Button type="submit">
              Send <BsFillCursorFill />
            </Button>
          </FormStyle>
        </Right>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
