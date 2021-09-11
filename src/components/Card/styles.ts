import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 130px;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  margin: 15px;
  border-radius: 15px;
  background: #ccc;
  cursor: pointer;
  box-shadow: 0 0 20px 0 #fff;
  will-change: box-shadow, transform;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 5px rgba(23, 23, 27, 0.3);
  }
  @media (min-width: 1024px) {
    height: 250px;
  }
`;

export const ID = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: rgba(23, 23, 27, 0.3);
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Name = styled.p`
  margin-bottom: 5px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 2;
`;

export const Character = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  right: 0px;
  bottom: 5px;
  border-radius: 50%;
  @media (min-width: 1024px) {
    font-size: 44px;
    border-radius: 0%;
    height: 100%;
    width: 250px;
    bottom: 0px;
  }
`;

export const LOGO = styled.img`
  opacity: 0.15;
  width: 150px;
  height: 150px;
  position: absolute;
  right: -15px;
  bottom: -15px;
  tint-color: #fff;
`;
