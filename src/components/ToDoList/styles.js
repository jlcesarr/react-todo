import styled from "styled-components";
import StyledButton from "../Button/styles";

export const MainContainer = styled.div`
  display: flex;
  text-align: center;
  max-width: 1200px;
  margin: 48px auto;
  padding: 24px 16px;

  flex-direction: column;
`;

export const Container = styled.section`
  column-gap: 36px;
  row-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 264px));
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const MainContainerHeader = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderCounters = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const AddTaskButton = styled(StyledButton)`
  padding: 15px;
  max-width: 200px;
  flex: 1;
  align-self: flex-end;

  @media screen and (max-width: 700px) {
    align-self: center;
    max-width: 250px;
    width: 100%;
  }
`;

export const ChangeLogButton = styled(StyledButton)`
  padding: 15px;
  max-width: 200px;
  flex: 1;
  align-self: flex-end;

  @media screen and (max-width: 700px) {
    align-self: center;
    max-width: 250px;
    width: 100%;
  }
`;
