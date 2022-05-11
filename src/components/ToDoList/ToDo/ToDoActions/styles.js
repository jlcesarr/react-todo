import styled from "styled-components";

export const TodoActions = styled.div`
  display: flex;
  gap: 8px;

  button {
    background-color: #3c3d43;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #ffffff;
    text-transform: uppercase;
    width: 100%;

    transition: 0.3s ease;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
