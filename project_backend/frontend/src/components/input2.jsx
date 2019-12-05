import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  }
}));

const Input = ({ onChange, value, limit, label, type, name }) => {
  const classes = useStyles();

  return (
    <TextField
      inputProps={{
        maxLength: 400,
        color: "#D4D1D1"
      }}
      name={name}
      id="standard-basic"
      className={classes.textField}
      label={label}
      type={type}
      margin="normal"
      color={
        (limit == 0) & (value == 0)
          ? "primary"
          : value > limit
          ? "secondary"
          : "primary"
      }
      onChange={onChange}
    />
  );
};

export default Input;
