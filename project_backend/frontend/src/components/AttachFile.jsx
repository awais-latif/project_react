import React from "react";
import "../Component-css/tube.css";
const AttachFile = ({ name }) => {
  return (
    <div className="chip chip--white">
      <div
        style={{ "max-width": "150px", display: "inline-block" }}
        className="text-ellipses"
      >
        {name}
      </div>
      <i className="close material-icons" style={{ width: "18px" }}>
        close
      </i>
    </div>
  );
};

export default AttachFile;
