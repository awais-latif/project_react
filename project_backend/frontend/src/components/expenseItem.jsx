import React from "react";
import "../Component-css/tube.css";
import { Row, Cell } from "@material/react-layout-grid";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons
} from "@material/react-card";
import { Subtitle2, Button } from "@material/react-typography";
import AttachedFile from "./attachedFile";

const ExpenseItem = ({ title, amount_date, details, filename }) => {
  return (
    <React.Fragment>
      <Cell desktopColumns={7} tabletColumns={8} phoneColumns={4}>
        <div className="cd-Layout">
          <Row>
            <Cell desktopColumns={10} tabletColumns={6} phoneColumns={3}>
              <div>
                <Subtitle2 tag="div" className=" textBold">
                  {title}
                </Subtitle2>
                <Subtitle2 tag="div" className="sub-heading">
                  {amount_date}
                </Subtitle2>
                <Subtitle2
                  tag="div"
                  className="sub-heading text-body text-ellipses"
                >
                  {details}
                </Subtitle2>
                <br></br>
                <AttachedFile name={filename} />
              </div>
            </Cell>
          </Row>
        </div>
      </Cell>
      <Cell desktopColumns={2}></Cell>
      <Cell
        align="middle"
        desktopColumns={3}
        tabletColumns={4}
        phoneColumns={8}
      >
        <div className="right">
          <CardActionButtons className="padding-40">
            <Button className="cd-buttonText1 right-margin-30">Remove</Button>
            <Button className="cd-buttonText1 right-margin-30">Edit</Button>
          </CardActionButtons>
        </div>
      </Cell>
    </React.Fragment>
  );
};

export default ExpenseItem;
