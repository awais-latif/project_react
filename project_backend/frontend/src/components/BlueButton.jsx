import React from "react";
import Button from "@material/react-button";
const BlueButton = ({ text, width = "90px" }) => {
  const clName = "cd-button btn-change ";
  return (
    <Button
      className="cd-button btn-change "
      style={{
        textTransform: "capitalize",
        width: "90px",
        marginRight: "20px",
        marginTop: "20px"
      }}
    >
      {text}
    </Button>
  );
};

export default BlueButton;
