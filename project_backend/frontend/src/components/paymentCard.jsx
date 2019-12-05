import React, { Component } from "react";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons
} from "@material/react-card";
import { Cell, Row } from "@material/react-layout-grid";
import { Button, Subtitle2 } from "@material/react-typography";
import MaterialIcon from "@material/react-material-icon";
const PaymentCard = ({ icon, title, subtitle, buttonText }) => {
  return (
    <Cell align="middle" desktopColumns={6} tabletColumns={4} phoneColumns={4}>
      <Card outlined className="cardShape1">
        <Row>
          <Cell
            align="left"
            desktopColumns={6}
            tabletColumns={4}
            phoneColumns={4}
          >
            <div className="cd-Layout">
              <div className="text-headline2 cd-headlineLayout">
                <MaterialIcon
                  className="va-middle cd-iconLayout icon-color-grey"
                  icon={icon}
                />
                <Subtitle2 tag="span" className="cd-title">
                  {title}
                </Subtitle2>
              </div>

              <Subtitle2 className="cd-subtitleLayout">
                {subtitle} <a className="cd-Link">Learn more about VAT.</a>
              </Subtitle2>
            </div>
          </Cell>
          <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}></Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <CardPrimaryContent className="cd-primarycontent">
              <CardActions>
                <Row>
                  <Cell desktopColumns={7} tabletColumns={4} phoneColumns={4}>
                    <div className="cd-Layout">
                      <Row>
                        <Cell
                          desktopColumns={2}
                          tabletColumns={2}
                          phoneColumns={1}
                        >
                          <MaterialIcon
                            className="va-middle cd-iconLayout material-icons icon-color-grey"
                            icon="account_balance"
                          />
                        </Cell>
                        <Cell
                          desktopColumns={10}
                          tabletColumns={6}
                          phoneColumns={3}
                        >
                          <div>
                            <Subtitle2 tag="div" className=" textBold">
                              VAT ID Number
                            </Subtitle2>
                            <Subtitle2 tag="div" className="sub-heading">
                              UK - ATU12345678
                            </Subtitle2>
                            <div className="tube tube--pending">PENDING</div>
                          </div>
                        </Cell>
                      </Row>
                    </div>
                  </Cell>
                  <Cell desktopColumns={2}></Cell>

                  <Cell
                    align="middle"
                    desktopColumns={3}
                    tabletColumns={8}
                    phoneColumns={4}
                  >
                    <div className="right">
                      <CardActionButtons>
                        <Button className="cd-buttonText1 right-margin-30">
                          Remove
                        </Button>
                        <Button className="cd-buttonText1">Edit</Button>
                      </CardActionButtons>
                    </div>
                  </Cell>
                  <div className="clear"></div>
                </Row>
              </CardActions>
            </CardPrimaryContent>
          </Cell>
        </Row>
      </Card>
    </Cell>
  );
};

export default PaymentCard;
