import styled from "styled-components";
import StyledButton from "../Button/styles";

export const Log = styled.p`
  margin-bottom: 8px;

  span {
    color: ${({ action }) =>
      action === "Created" || action === "Completed" ? "limegreen" : "red"};
  }
`;
export const ClearLogsButton = styled(StyledButton)`
  margin-top: 16px;
  width: 150px;
`;
