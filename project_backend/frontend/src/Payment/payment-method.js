import React from "react";
import { Grid, Row } from "@material/react-layout-grid";
import Card, { CardActions } from "@material/react-card";
import { Headline6 } from "@material/react-typography";
import { Cell } from "@material/react-layout-grid";
import Button from "@material/react-button";
import CardPaymentMethod from "../components/cardMethod";
const PaymentMethod = () => {
  return (
    <React.Fragment>
      <Grid>
        <Row>
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell
            desktopColumns={7}
            tabletColumns={6}
            phoneColumns={4}
            className="padding-top"
          >
            <Headline6 tag="span" className="cd-title-color margin-left-10">
              Payment Methods
            </Headline6>
          </Cell>
          <Cell desktopColumns={2}></Cell>
        </Row>
        <Row className="padding-top-10">
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
            <Row>
              <CardPaymentMethod
                cardNumber="Visa ••••  4242"
                date_expired="Expires 12 /2031"
              />
              <Cell
                align="middle"
                desktopColumns={6}
                tabletColumns={6}
                phoneColumns={4}
              >
                <Card outlined className="cardShape1">
                  <div className="cd-Layout add-method">
                    <CardActions>
                      <Button className="cd-buttonText1">
                        + Add payment method
                      </Button>
                    </CardActions>
                  </div>
                </Card>
              </Cell>
            </Row>
          </Cell>
          <Cell desktopColumns={2} tabletColumns={4} phoneColumns={4}></Cell>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentMethod;
