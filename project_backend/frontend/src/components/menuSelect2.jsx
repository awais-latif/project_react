import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  },
  menu: {
    width: "100%"
  },
  menuitem: {
    backgroundColor: "white"
  }
}));

const MenuSelect = ({ array = [], defolt, name, onChange }) => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(defolt);

  const handleChange = event => {
    setCurrency(event.target.value);
    onChange(event);
  };
  return (
    <TextField
      id="standard-select-currency"
      select
      className={classes.textField}
      value={currency}
      name={name}
      onChange={handleChange}
      color="primary"
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      margin="normal"
    >
      {array.map(option => (
        <MenuItem
          className={classes.menuitem}
          key={option.value}
          value={option.value}
        >
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default MenuSelect;
