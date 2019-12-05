import React, { Component } from "react";
import { Grid, Row } from "@material/react-layout-grid";
import Card, { CardActions } from "@material/react-card";
import { Headline6 } from "@material/react-typography";
import { Cell } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";
import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";
import CardPayoutMethod from "../components/payoutCard";
import Radio, { NativeRadioControl } from "@material/react-radio";
import BlueButton from "../components/BlueButton";
import List, { ListItem } from "@material/react-list";

import generalInput from "../components/renderInput2";
import { getcountries, getcurrencies } from "../utils/menu";

class PayoutMethod extends generalInput {
  state = {
    selectedItem: "None",
    countries: getcountries(),
    currencies: getcurrencies()
  };
  handleChange = e => {
    this.setState({ selectedItem: e.target.value });
  };

  render() {
    const listItems = ["Individual", "Company"];
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Cell desktopColumns={3} tabletColumns={2}></Cell>
            <Cell
              desktopColumns={7}
              tabletColumns={6}
              phoneColumns={4}
              className="padding-top padding-10"
            >
              <Row>
                <Cell desktopColumns={12} tabletColumns={8}>
                  <Headline6
                    tag="span"
                    className="cd-title-color margin-left-10"
                  >
                    Payout Methods
                  </Headline6>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8}>
                  <Row>
                    <CardPayoutMethod
                      accountNumber="Account ••••  4242"
                      accountType="Individual (UK - USD)"
                      bank="State bank of Pakistan"
                      icon="account_balance"
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
                              + Add payout method
                            </Button>
                          </CardActions>
                        </div>
                      </Card>
                    </Cell>
                  </Row>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <Headline6 tag="span" className="cd-title-color">
                    Add a payout method
                  </Headline6>
                </Cell>

                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <MaterialIcon
                    className="va-middle cd-iconLayout material-icons color-subheading"
                    icon="location_city"
                  />
                  <Subtitle1 className="color-subheading margin-left">
                    Billing country / region
                  </Subtitle1>
                </Cell>
                <Cell desktopColumns={3} tabletColumns={8} phoneColumns={4}>
                  {this.renderMenu(this.state.countries, "Select Country")}
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <div className="text-headline2 cd-headlineLayout">
                    <MaterialIcon
                      className="va-middle cd-iconLayout material-icons color-subheading"
                      icon="payment"
                    />
                    <span className="cd-title">Payout methods</span>
                  </div>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <Radio
                    className="radio-change"
                    label="Bank Transfer in USD"
                    key="1"
                  >
                    <NativeRadioControl
                      name="bank"
                      value="1"
                      id="bank"
                      onChange={e =>
                        this.setState({ petValue: e.target.value })
                      }
                    />
                  </Radio>
                </Cell>
                <Cell
                  desktopColumns={12}
                  tabletColumns={8}
                  phoneColumns={4}
                  className="padding-left-60"
                >
                  <Subtitle1 className="color-subheading cd-subfont">
                    Get paid in 5–7 business days
                  </Subtitle1>
                  <Subtitle1 className="color-subheading  cd-subfont">
                    Weekends and holidays may extend processing time
                  </Subtitle1>
                  <Subtitle1 className="color-subheading  cd-subfont">
                    No fees
                  </Subtitle1>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <BlueButton text="Next"></BlueButton>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <Subtitle1 tag="span" className="cd-subtitleLayout">
                    Payout methods
                  </Subtitle1>
                  <MaterialIcon
                    className="material-icons padding-rl icon-color-grey md-18"
                    icon="arrow_forward_ios"
                  />

                  <Subtitle1 tag="span" className="cd-title-color">
                    Add payout method
                  </Subtitle1>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                  <span className="font-1">Add a payout methods</span>
                </Cell>
                <Cell desktopColumns={12} tabletColumns={8}>
                  <List radioList selectedIndex={0}>
                    <Row>
                      {listItems.map((item, index) => {
                        return (
                          <Cell desktopColumns={3} tabletColumns={3}>
                            <ListItem key={index}>
                              <Radio className="radio-change" label={item}>
                                <NativeRadioControl
                                  name={item}
                                  checked={this.state.selectedItem === item}
                                  value={item}
                                  id={`${index}-${item}`}
                                  onChange={this.handleChange}
                                />
                              </Radio>
                            </ListItem>
                          </Cell>
                        );
                      })}
                    </Row>
                  </List>
                </Cell>
                <Cell desktopColumns={6} tabletColumns={8}>
                  <Row>
                    <Cell desktopColumns={12} tabletColumns={8}>
                      {this.renderInput("Account holder name", "text")}
                    </Cell>
                    <Cell desktopColumns={12} tabletColumns={8}>
                      {this.renderInput("Routing Number", "text")}
                    </Cell>
                    <Cell desktopColumns={12} tabletColumns={8}>
                      {this.renderInput("Account number", "text")}
                    </Cell>
                    <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                      {this.renderMenu(this.state.countries, "ANGOLA")}
                    </Cell>
                    <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                      {this.renderMenu(this.state.currencies, "US Dollar")}
                    </Cell>
                    <Cell desktopColumns={12} tabletColumns={8}>
                      <BlueButton text="Save"></BlueButton>
                      <Button
                        className="btn-change"
                        style={{
                          textTransform: "capitalize",
                          background: "white",
                          display: "inline-block",
                          marginRight: "1.2em",
                          marginTop: "20px",
                          color: "#343434"
                        }}
                      >
                        Cancel
                      </Button>
                    </Cell>
                  </Row>
                </Cell>
              </Row>
            </Cell>
            <Cell desktopColumns={2}></Cell>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PayoutMethod;
