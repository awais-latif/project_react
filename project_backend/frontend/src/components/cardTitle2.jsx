import React from "react";
import { Cell } from "@material/react-layout-grid";
import { Subtitle2, Headline6 } from "@material/react-typography";

const CardTitle = ({ title, subtitle, action }) => {
  return (
    <React.Fragment>
      <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
        <Headline6 className="card-title">{title}</Headline6>
        <Subtitle2 className="card-subtitle">{subtitle}</Subtitle2>
      </Cell>
      <Cell
        desktopColumns={6}
        tabletColumns={4}
        phoneColumns={2}
        align="top"
        className="ten"
      >
        <Subtitle2 className="card-action">{action}</Subtitle2>
      </Cell>
    </React.Fragment>
  );
};

export default CardTitle;
