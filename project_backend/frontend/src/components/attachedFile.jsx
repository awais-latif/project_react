import React from "react";
import "../Component-css/tube.css";
const AttachedFile = ({ name }) => {
  return (
    <div class="chip chip--white" style={{ cursor: "pointer" }}>
      <i
        className="icon-color-grey material-icons"
        style={{ "vertical-align": "super" }}
      >
        attachment
      </i>
      <div
        style={{
          "max-width": "170px",
          display: "inline-block",
          fontWeight: "bold"
        }}
        className="text-ellipses"
      >
        {name}
      </div>
    </div>
  );
};

export default AttachedFile;
