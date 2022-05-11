import React, { useContext, useState, useEffect, useMemo } from "react";
import {
  ToDoCard,
  TodoHeader,
  TaskName,
  TaskDescription,
  TaskDate,
} from "./styles";
import ToDoActions from "./ToDoActions";
import { ToDoContext } from "../../../context/ToDoContext";
import ToDoPreferences from "./ToDoPreferences";
import dateHelper from "../../../helpers/date";
import propTypes from "prop-types";

const COLORS_BASED_IN_REMAINING_TIME = {
  close: "#660708",
  far: "#FBEB9566",
  veryfar: "#808080",
};

function ToDo(props) {
  const { onTodoUpdate } = useContext(ToDoContext);

  const {
    id,
    title,
    description,
    targetDate,
    done,
    isDisplayingTime,
    isAutomaticColor,
    taskColor,
  } = props.todo;

  const [configurationMode, setConfigurationMode] = useState(false);
  const [shouldShowTime, setShouldShowTime] = useState(
    isDisplayingTime || false
  );
  const [shouldSetColor, setShouldSetColor] = useState(
    isAutomaticColor || false
  );
  const [cardColor, setCardColor] = useState(taskColor);
  const [remainingTime, setRemainingTime] = useState("");

  function handleTargetDateChange(targetDate) {
    const isGreaterDate = dateHelper.isGreaterThanNow(targetDate);
    if (isGreaterDate) {
      onTodoUpdate(id, {
        targetDate,
      });
    }
  }

  function handleToggleShowTime() {
    const isValidDate = dateHelper.isValid(targetDate);
    if (isValidDate) {
      setShouldShowTime((prevChoice) => !prevChoice);

      onTodoUpdate(id, {
        isDisplayingTime: !shouldShowTime,
      });
    }
  }

  function handleToggleConfigurationMode() {
    setConfigurationMode((prevMode) => !prevMode);
  }

  function handleCardColorChange(hexColor) {
    setShouldSetColor(false);
    setCardColor(hexColor);

    onTodoUpdate(id, {
      taskColor: hexColor,
    });
  }

  function handleToggleAutomaticSetColor() {
    setShouldSetColor((prevChoice) => !prevChoice);
    onTodoUpdate(id, {
      isAutomaticColor: !shouldSetColor,
    });
  }

  useEffect(() => {
    if (shouldShowTime && !done) {
      if (dateHelper.isSmallerThanNow(targetDate)) {
        setShouldShowTime(false);
        return;
      }
      setTimeout(() => {
        var now = dateHelper.formatDate(dateHelper.parseDate());
        var then = dateHelper.formatDate(targetDate);

        var ms = dateHelper.parseDate(then).diff(dateHelper.getDate(now));
        var duration = dateHelper.getDuration(ms);

        const formattedTime = `
        ${dateHelper.getLocaleDate(then)}
        -
        ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;

        setRemainingTime(formattedTime);
      }, 1000);
    }
  }, [remainingTime, done, shouldShowTime, targetDate]);

  const colorBasedInTime = useMemo(() => {
    if (shouldSetColor) {
      let date = dateHelper.getDurationBetweenDates(new Date(), targetDate);

      if (Math.abs(date.asDays()) >= 1) {
        return COLORS_BASED_IN_REMAINING_TIME.veryfar;
      } else if (Math.abs(date.asHours()) > 1) {
        return COLORS_BASED_IN_REMAINING_TIME.far;
      } else if (Math.abs(date.asHours()) <= 1) {
        return COLORS_BASED_IN_REMAINING_TIME.close;
      }
    }
  }, [remainingTime, targetDate]);

  return (
    <ToDoCard color={shouldSetColor ? colorBasedInTime : cardColor} done={done}>
      {configurationMode ? (
        <ToDoPreferences
          onToggleShowTime={handleToggleShowTime}
          onToggleAutomaticColor={handleToggleAutomaticSetColor}
          onConfigurationMode={handleToggleConfigurationMode}
          onTargetDateChange={handleTargetDateChange}
          onCardColorChange={handleCardColorChange}
          shouldShowTime={shouldShowTime}
          shouldSetColor={shouldSetColor}
          targetDate={targetDate}
        />
      ) : (
        <>
          <TodoHeader>
            <TaskName
              spellcheck="false"
              defaultValue={title}
              onChange={({ target }) =>
                onTodoUpdate(id, { title: target.value })
              }
            />
            <div>
              <button
                type="button"
                aria-label="Task Configuration"
                onClick={handleToggleConfigurationMode}
              >
                ⚙️
              </button>
            </div>
          </TodoHeader>

          <TaskDescription
            value={description}
            onChange={({ target }) =>
              onTodoUpdate(id, { description: target.value })
            }
            spellCheck="false"
          >
            {description}
          </TaskDescription>

          {shouldShowTime && <TaskDate>{remainingTime}</TaskDate>}

          <ToDoActions id={id} />
        </>
      )}
    </ToDoCard>
  );
}

export default ToDo;

ToDo.propTypes = {
  todo: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string,
    description: propTypes.string,
    targetDate: propTypes.string,
    done: propTypes.bool.isRequired,
    isDisplayingTime: propTypes.bool.isRequired,
    isAutomaticColor: propTypes.bool.isRequired,
    taskColor: propTypes.string,
  }),
};
