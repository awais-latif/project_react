import React, { Component } from "react";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons
} from "@material/react-card";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2 } from "@material/react-typography";
import Button from "@material/react-button";
import MaterialIcon from "material-icons-react";
import AttachFile from "./AttachFile";
import AttachedFile from "./attachedFile";
import BlueButton from "./BlueButton";
import ExpenseItem from "./expenseItem";
const ExpenseCard = ({ icon, title, subtitle, buttonText, expensesList }) => {
  return (
    <Cell align="middle" desktopColumns={6} tabletColumns={4} phoneColumns={4}>
      <Card outlined className="cardShape1">
        <Row>
          <Cell
            align="left"
            desktopColumns={6}
            tabletColumns={8}
            phoneColumns={4}
          >
            <div className="cd-Layout">
              <div className="text-headline2 cd-headlineLayout">
                <MaterialIcon
                  className="va-middle cd-iconLayout material-icons icon-color-grey"
                  icon={icon}
                />
                <Subtitle2 tag="span" className="cd-title">
                  {title}
                </Subtitle2>
              </div>

              <Subtitle2 className="cd-subtitleLayout">
                {subtitle} <a className="cd-Link">Learn more about expenses.</a>
              </Subtitle2>
            </div>
          </Cell>
          <Cell
            desktopColumns={6}
            tabletColumns={8}
            phoneColumns={4}
            align="bottom"
            className="padding-30"
          >
            <div style={{ alignContent: "right" }}>
              <Button
                className="cd-button btn-change"
                style={{
                  textTransform: "capitalize",
                  width: "150px",
                  float: "right"
                }}
              >
                Add an expense
              </Button>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <CardPrimaryContent className="cd-primarycontent">
              <CardActions>
                <Row>
                  {expensesList.map(item => (
                    <ExpenseItem
                      title="Professional service fee"
                      amount_date="$0.00 - Sep 10, 2019"
                      details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit inventore labore odit placeat rem sequi veritatis voluptatem. Culpa ducimus inventore laborum laudantium, neque nihil nisi, obcaecati, porro rem sequi tempora."
                      filename="Lorem ipsum dolo."
                    />
                  ))}
                </Row>
              </CardActions>
            </CardPrimaryContent>
          </Cell>
        </Row>
      </Card>
    </Cell>
  );
};

export default ExpenseCard;
