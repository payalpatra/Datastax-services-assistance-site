import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 860px;
  /* height: 1024px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    /* height: 1300px; */
    height: 200px;
  }
  @media screen and (max-width: 813px) {
    /* height: 1300px; */
    height: 100px;
    margin-top: 50px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 2fr;
    padding: 0 2px;
  }
  @media screen and (max-width: 813px) {
    margin-top: 340px;
    margin-top: 300px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 0px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    max-height: 250px;
    height: 200px;
  }
`;
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    height: 50px;
    width: 160px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 813px) {
    height: 40px;
    width: 160px;
    margin-bottom: 10px;
  }
`;

export const ServiceH1 = styled.h1`
  margin-top: -20px;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
