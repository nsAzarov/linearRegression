import React from "react";
import PropTypes from "prop-types";

const ControlPanel = props => (
  <div>
    <div className="row">
    <p>Установить возрастные границы: </p>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("19")}
      >
        До 19 лет
      </a>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("70+")}
      >
        Старше 70 лет
      </a>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("")}
      >
        Все возраста
      </a>
    </div>
    <div className="row">
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={props.calcRegression}
      >
        Показать линейную регрессию
      </a>
    </div>
  </div>
);

export default ControlPanel;

ControlPanel.propType = {
  switchAge: PropTypes.func
};
