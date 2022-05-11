import React, { useContext } from "react";
import { ToDoContext } from "../.././../../context/ToDoContext";
import { TodoActions } from "./styles";
import Button from "../../../Button";
import propTypes from "prop-types";

function ToDoActions(props) {
  const { onTodoRemove, onTodoComplete } = useContext(ToDoContext);

  return (
    <TodoActions>
      <Button onClick={() => onTodoComplete(props.id)}>Done</Button>
      <Button onClick={() => onTodoRemove(props.id)}>Remove</Button>
    </TodoActions>
  );
}

export default ToDoActions;

ToDoActions.propTypes = {
  id: propTypes.number.isRequired,
};
