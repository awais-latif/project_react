import React, { Component } from "react";
import Button from "@material/react-button";
import { Grid, Cell, Row } from "@material/react-layout-grid";
const CommonButtons = ({ isdisabled = true }) => {
  return (
    <Cell columns={12} className="six">
      <div className="alignright">
        <Button
          style={{
            textTransform: "capitalize",
            background: "white",
            display: "inline-block",
            marginRight: "1.2em",
            color: "#343434"
          }}
        >
          Cancel
        </Button>
        <Button
          className="cd-button"
          disabled={isdisabled}
          style={{
            textTransform: "capitalize",
            background: "#DFDFDF"
          }}
        >
          Add
        </Button>
      </div>
    </Cell>
  );
};

export default CommonButtons;
