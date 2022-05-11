import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  MainContainer,
  AddTaskButton,
  ChangeLogButton,
  HeaderCounters,
  MainContainerHeader,
} from "./styles.js";
import ToDoProvider from "../../context/ToDoContext";
import Changelog from "../Changelog";
import ToDo from "./ToDo";

function ToDoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showChangelog, setShowChangelog] = useState(false);

  const counters = useMemo(() => {
    const totalCompletedTasks = todos.reduce(
      (acc, task) => (task.done ? acc + 1 : acc),
      0
    );
    const totalUncompletedTasks = todos.reduce(
      (acc, task) => (!task.done ? acc + 1 : acc),
      0
    );

    return {
      totalCompletedTasks,
      totalUncompletedTasks,
    };
  }, [todos]);

  function storeLog(logData) {
    const logs = localStorage.getItem("logs");
    const newLogs = [
      ...JSON.parse(logs),
      {
        id: Math.floor(Math.random() * 99999),
        ...logData,
        created_at: new Date(),
      },
    ];
    localStorage.setItem("logs", JSON.stringify(newLogs));
  }

  function handleTodoRemove(todoId) {
    setTodos((prevTodos) => {
      const logs = localStorage.getItem("logs");

      storeLog({
        action: "Deleted",
        taskId: todoId,
      });

      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  function handleTodoComplete(todoId) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (!todo.done) {
          storeLog({
            action: "Completed",
            taskId: todoId,
          });
        }

        return todo.id === todoId
          ? { ...todo, done: Boolean(!todo.done) }
          : todo;
      });
    });
  }

  function handleTodoAdd() {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos.length + 1,
        title: `Task ${prevTodos.length + 1}`,
        description: "What do you need to be reminded about?",
        targetDate: null,
        isAutomaticColor: false,
        isDisplayingTime: false,
        done: false,
        taskColor: null,
      };

      storeLog({
        action: "Created",
        taskId: prevTodos.length + 1,
      });

      return [...prevTodos, newTodo];
    });
  }

  function handleTodoUpdate(todoId, partialToDo) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              ...partialToDo,
            }
          : todo
      );
    });
  }

  function handleToggleChangelog() {
    setShowChangelog((prevChoice) => !prevChoice);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <MainContainer>
      <MainContainerHeader>
        <HeaderCounters>
          <span>You have {todos.length} tasks</span>
          <span>
            Total of {counters.totalUncompletedTasks} uncompleted tasks
          </span>
          <span>Total of {counters.totalCompletedTasks} completed tasks</span>
        </HeaderCounters>

        <hr
          style={{
            alignSelf: "stretch",
          }}
        />

        <ChangeLogButton onClick={handleToggleChangelog}>
          Changelog
        </ChangeLogButton>

        <AddTaskButton onClick={() => handleTodoAdd()}>
          Create new Task
        </AddTaskButton>
      </MainContainerHeader>

      <Changelog showModal={showChangelog}></Changelog>

      {todos.length <= 0 ? (
        <span>Start by adding a new task to the list</span>
      ) : (
        <>
          <Container>
            <ToDoProvider
              value={{
                onTodoRemove: handleTodoRemove,
                onTodoComplete: handleTodoComplete,
                onTodoUpdate: handleTodoUpdate,
              }}
            >
              {todos
                .sort((a, b) => (a.id > b.id ? -1 : -1))
                .sort((a, b) => (a.done ? 1 : -1))
                .map((todo) => (
                  <ToDo
                    key={todo.id}
                    todo={{
                      ...todo,
                    }}
                  />
                ))}
            </ToDoProvider>
          </Container>
        </>
      )}
    </MainContainer>
  );
}

export default ToDoList;
