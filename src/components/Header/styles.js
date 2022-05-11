import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 24px auto;
  padding: 24px 16px;
  background: #3c3d43;
  border-radius: 8px;

  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 90vw;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  flex: 1 1 auto;
`;

export const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #4d4d4d;
  border-radius: 8px;
  box-shadow: 11px 13px 15px -3px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 32px;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;
