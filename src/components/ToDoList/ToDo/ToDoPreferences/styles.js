import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  text-align: left;
  overflow: scroll;

  h2 {
    padding-left: 8px;
  }
`;

export const CostumizationFields = styled.div`
  margin-bottom: 16px;
  span {
    display: block;
    font-size: 15px;
  }
  & > * {
    margin-bottom: 8px;
  }
`;

export const Fields = styled.div`
  padding: 8px;

  h3 {
    margin-bottom: 8px;
  }
`;

export const OptionsFields = styled.div`
  label {
    display: flex;
    align-items: center;
    input {
      order: -1;
      margin-right: 8px;
      accent-color: red;
    }
    font-size: 15px;
  }

  & > * {
    margin-bottom: 8px;
  }
`;

export const PreferencesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    padding: 10px 0;
    margin-right: 8px;
    font-size: 15px;
    cursor: pointer;
    text-align: right;
  }
`;

export const ColorCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`;

export const CardColors = styled.div`
  display: flex;
  gap: 16px;
`;
