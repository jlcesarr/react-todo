import React from "react";
import StyledButton from "./styles";
import propTypes from "prop-types";

function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
};
