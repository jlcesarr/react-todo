import styled, { css } from "styled-components";

export const TodoHeader = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;

  & > div {
    justify-self: end;

    & > button {
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
      display: block;
    }
  }
`;

export const ToDoCard = styled.article`
  background-color: ${(props) => props.color};
  overflow: hidden;
  position: relative;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  height: 380px;
  border-radius: 8px;
  box-shadow: 8px 10px 13px -3px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.done
      ? css`
          filter: brightness(0.7);
          background: #aedfe866;
        `
      : ""};
`;

export const TaskName = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  max-width: 200px;
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;

export const TaskDescription = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  background: transparent;
  flex: 1 1 100px;
`;

export const TaskDate = styled.span`
  font-size: 15px;
  opacity: 0.7;
`;
