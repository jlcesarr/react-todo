import React, { createContext } from "react";
import propTypes from "prop-types";

export const ToDoContext = createContext();

function ToDoProvider(props) {
  return (
    <ToDoContext.Provider value={{ ...props.value }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;

ToDoProvider.propTypes = {
  value: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
};
