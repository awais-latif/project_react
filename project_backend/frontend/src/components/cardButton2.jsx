import React, { Component } from "react";
import Button from "@material/react-button";
import { Grid, Cell, Row } from "@material/react-layout-grid";
const CardButton = ({ text, isdisabled = false, width, onClick }) => {
  return (
    <Cell columns={12} className="five">
      <div className="alignright">
        <Button
          className="btn-change"
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
          className="cd-button btn-change"
          disabled={isdisabled}
          style={{
            textTransform: "capitalize",
            width: "100px"
          }}
          onClick={onClick}
        >
          {text}
        </Button>
      </div>
    </Cell>
  );
};

export default CardButton;
