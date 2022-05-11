import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3c3d43;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  text-transform: uppercase;
  transition: 0.3s ease;
  &:hover {
    filter: brightness(0.7);
  }
`;

export default StyledButton;
