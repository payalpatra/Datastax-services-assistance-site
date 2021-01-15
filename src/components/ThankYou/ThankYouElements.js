import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgb(235 108 52) 0%, rgb(237 122 40) 100%);
  background-color: #eb6c34;
  background-color: #eb6c34;
  background-color: #eb6c34;
  background-image: url("https://www.transparenttextures.com/patterns/diagonales-decalees.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */ ;
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const FormButton = styled.button`
  background: #eb6c34;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  } ;
`;
export const Form = styled.form`
  background: #010101;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
export const Link = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
`;
