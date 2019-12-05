import React, { Component } from "react";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons
} from "@material/react-card";
import { Cell } from "@material/react-layout-grid";
import { Button, Subtitle2 } from "@material/react-typography";
import MaterialIcon from "material-icons-react";
import "../Component-css/simpleCard.css";
import "../Component-css/position.css";
const SimpleCard = ({ icon, title, subtitle, buttonText }) => {
  return (
    <Cell align="middle" desktopColumns={6} tabletColumns={4} phoneColumns={4}>
      <Card outlined className="cardShape1">
        <div className="cd-Layout">
          <div className="text-headline2 cd-headlineLayout">
            <MaterialIcon
              className="va-middle cd-iconLayout material-icons icon-color-grey"
              icon={icon}
            />
            <span className="cd-title">{title}</span>
          </div>

          <Subtitle2 className="cd-subtitleLayout">{subtitle}</Subtitle2>
        </div>
        <CardPrimaryContent className="cd-primarycontent">
          <CardActions>
            <CardActionButtons>
              <Button className="cd-buttonText1">{buttonText}</Button>
            </CardActionButtons>
          </CardActions>
        </CardPrimaryContent>
      </Card>
    </Cell>
  );
};

export default SimpleCard;
