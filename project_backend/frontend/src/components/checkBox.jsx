import React, { Component } from "react";
import "../Component-css/checkBox.css";
import Checkbox from "@material/react-checkbox";
const CheckBox = ({ label, name, checked, onChange }) => {
  return (
    <React.Fragment>
      <Checkbox
        name={name}
        className="check-box-change"
        nativeControlId="my-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="label" htmlFor="my-checkbox">
        {label}
      </label>
    </React.Fragment>
  );
};

export default CheckBox;
