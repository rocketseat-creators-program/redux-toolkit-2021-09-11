import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 25px;
  padding-top: 25px;
  padding-bottom: 0;
  background: #fff;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
`;

export const List = styled.div`
  margin-top: 45px;
  display: grid;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
`;
