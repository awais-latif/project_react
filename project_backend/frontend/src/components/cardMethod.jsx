import React from "react";
import "../Component-css/tube.css";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle1, Subtitle2 } from "@material/react-typography";
import Button from "@material/react-button";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardMedia
} from "@material/react-card";

const CardPaymentMethod = ({ cardNumber, date_expired }) => {
  return (
    <Cell align="middle" desktopColumns={6} tabletColumns={8} phoneColumns={4}>
      <Card outlined className="cardShape1">
        <div className="cd-Layout">
          <Row>
            <Cell desktopColumns={4} tabletColumns={2} phoneColumns={2}>
              <div className="text-headline2 cd-headlineLayout" align="center">
                <img
                  className="logo_size"
                  src={require("../Images/visa.png")}
                />
              </div>
            </Cell>
            <Cell desktopColumns={8} tabletColumns={6} phoneColumns={2}>
              <Subtitle1 className="payment-title title">
                {cardNumber}
              </Subtitle1>
              <br></br>
              <Subtitle2 className="cd-subtitleLayout2 cd-subfont">
                {date_expired}
              </Subtitle2>
            </Cell>
          </Row>

          <CardPrimaryContent className="cd-primarycontent">
            <Row>
              <Cell
                desktopColumns={3}
                tabletColumns={4}
                phoneColumns={1}
              ></Cell>
              <Cell desktopColumns={3} tabletColumns={4} phoneColumns={3}>
                <CardActions>
                  <CardActionButtons>
                    <Button className="cd-buttonText1">Remove</Button>
                    <span className="padding-30"></span>
                    <Button className="cd-buttonText1">Edit</Button>
                  </CardActionButtons>
                </CardActions>
              </Cell>
            </Row>
          </CardPrimaryContent>
        </div>
      </Card>
    </Cell>
  );
};

export default CardPaymentMethod;
