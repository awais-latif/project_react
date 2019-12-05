import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import SimpleCard from "../components/simpleCard2";
import PaymentCard from "../components/paymentCard";
import { Headline5, Subtitle1 } from "@material/react-typography";

const PaymentSubcriptionsPage = () => {
  return (
    <React.Fragment>
      <Grid>
        <Row align="middle">
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
            <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <Headline5 className="avatar-headline1">
                Payments and Payouts
              </Headline5>
              <Subtitle1 className="color-subheading">
                Your payment info, transactions, recurring payments and
                reservations
              </Subtitle1>
            </div>
          </Cell>

          <Cell desktopColumns={2}></Cell>
        </Row>
        <Row>
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <Row>
                <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                  <SimpleCard
                    icon="payment"
                    title="Payment methods"
                    subtitle="Add a payment method using our secure payment system, then start planning your next actions."
                    buttonText="Add payment method"
                  />
                </Cell>
                <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                  <SimpleCard
                    icon="payment"
                    title="Payment methods"
                    subtitle="When you receive a payment for a reservation, to get paid, you need to set up a payout method."
                    buttonText="Add payment method"
                  />
                </Cell>
              </Row>
            </div>
          </Cell>
          <Cell desktopColumns={2}></Cell>
        </Row>
        <br></br>
        <Row>
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <PaymentCard
                icon="money"
                title="Taxes (VAT)"
                subtitle="If you’re staying in the EU, you may not be charged VAT on App service fees. To get started, enter your business’ VAT ID Number so it can be verified by the European Commission."
                buttonText="Add payment method"
              />
            </div>
          </Cell>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentSubcriptionsPage;
