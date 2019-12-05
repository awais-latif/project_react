import React from "react";
import "../Component-css/tube.css";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle1, Subtitle2, Button } from "@material/react-typography";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardMedia
} from "@material/react-card";
import MaterialIcon from "material-icons-react";

const CardPayoutMethod = ({ accountNumber, accountType, bank, icon }) => {
  return (
    <Cell align="middle" desktopColumns={6} tabletColumns={8} phoneColumns={4}>
      <Card outlined className="cardShape1">
        <div className="cd-Layout">
          <Row>
            <Cell desktopColumns={4} tabletColumns={2} phoneColumns={1}>
              <div className="text-headline2 cd-headlineLayout">
                <MaterialIcon
                  className="material-icons cd-payment-icon md-48"
                  icon={icon}
                />
              </div>
            </Cell>
            <Cell
              desktopColumns={8}
              tabletColumns={6}
              phoneColumns={3}
              className="margin-left-10"
            >
              <Subtitle1 className="payment-title title">
                {accountNumber}
              </Subtitle1>
              <br></br>
              <Subtitle2 className="cd-subtitleLayout2 cd-subfont remove-bottom-space">
                {accountType}
              </Subtitle2>

              <Subtitle2 className="cd-subtitleLayout2 cd-subfont">
                {bank}
              </Subtitle2>
            </Cell>
          </Row>

          <div className="cd-primarycontent">
            <Row>
              <Cell desktopColumns={7} tabletColumns={6} phoneColumns={2}>
                <div className="right padding-10-btn">
                  <Button className="cd-buttonText1">Remove</Button>
                </div>
              </Cell>
              <Cell desktopColumns={5} tabletColumns={2} phoneColumns={2}>
                <div className="right padding-10-btn">
                  <Button className="cd-buttonText1">Edit</Button>
                </div>
              </Cell>
            </Row>
          </div>
        </div>
      </Card>
    </Cell>
  );
};

export default CardPayoutMethod;
