import moment from "moment";
import React from "react";
import {
  Container,
  PreferencesHeader,
  Fields,
  CostumizationFields,
  OptionsFields,
  ColorCircle,
  CardColors,
} from "./styles";
import propTypes from "prop-types";
import dateHelper from "../../../../helpers/date";

function ToDoPreferences(props) {
  return (
    <Container>
      <PreferencesHeader>
        <h2>Preferences</h2>
        <button onClick={props.onConfigurationMode}>❌</button>
      </PreferencesHeader>
      <hr />

      <Fields>
        <h3> Costumization </h3>
        <CostumizationFields>
          <span>Date</span>
          <input
            onChange={({ target }) => props.onTargetDateChange(target.value)}
            min={dateHelper.formatDate(new Date(), "YYYY-MM-DDTHH:mm")}
            defaultValue={dateHelper.formatDate(
              props.targetDate,
              "YYYY-MM-DDTHH:mm"
            )}
            type="datetime-local"
          />

          <span>Card Color</span>

          <CardColors>
            <ColorCircle
              onClick={() => props.onCardColorChange("#660708")}
              color={"#660708"}
            ></ColorCircle>
            <ColorCircle
              onClick={() => props.onCardColorChange("#FBEB9566")}
              color={"#FBEB9566"}
            ></ColorCircle>
            <ColorCircle
              onClick={() => props.onCardColorChange("#808080")}
              color={"#808080"}
            ></ColorCircle>
          </CardColors>
        </CostumizationFields>

        <h3> Options </h3>
        <OptionsFields>
          <label>
            Show remaining time
            <input
              type="checkbox"
              onChange={props.onToggleShowTime}
              defaultChecked={props.shouldShowTime}
            />
          </label>

          <label>
            Set color based in remaining time
            <input
              type="checkbox"
              defaultChecked={props.shouldSetColor}
              onChange={props.onToggleAutomaticColor}
            />
          </label>
        </OptionsFields>
      </Fields>
    </Container>
  );
}

export default ToDoPreferences;

ToDoPreferences.propTypes = {
  onConfigurationMode: propTypes.func.isRequired,
  onTargetDateChange: propTypes.func.isRequired,
  onToggleAutomaticColor: propTypes.func.isRequired,
  onToggleShowTime: propTypes.func.isRequired,
  onCardColorChange: propTypes.func.isRequired,
  targetDate: propTypes.string,
  shouldShowTime: propTypes.bool.isRequired,
  shouldSetColor: propTypes.bool.isRequired,
};
