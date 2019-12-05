import React, { Component } from "react";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import { Headline6, Subtitle2 } from "@material/react-typography";
import Card from "@material/react-card";

import "../Component-css/position.css";
import { Divider } from "@material-ui/core";
class AccountBalance extends Component {
  state = { checked: false, indeterminate: false };
  render() {
    return (
      <Grid>
        <Row>
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
            <Row>
              <Cell columns={12} className="padding-top">
                <Headline6 tag="span" className="cd-title-color margin-left">
                  Your account balance
                </Headline6>
              </Cell>
              <Cell desktopColumns={11} tabletColumns={8} phoneColumns={4}>
                <Row>
                  <Cell desktopColumns={11} tabletColumns={7} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-balance-layout">
                        <Cell columns={12}>
                          <Cell
                            desktopColumns={6}
                            tabletColumns={4}
                            phoneColumns={4}
                          >
                            <Headline6 className="card-title">
                              Balance
                            </Headline6>
                            <Subtitle2 className="card-subtitle">
                              Your balance, including earnings and
                              reimbursements, gathered from your services like
                              your teaching and learning{" "}
                              <a className="card-action" href="#">
                                Learn more
                              </a>
                            </Subtitle2>
                          </Cell>
                        </Cell>
                        <Cell
                          desktopColumns={12}
                          tabletColumns={8}
                          phoneColumns={4}
                          align="middle"
                        >
                          <Divider></Divider>
                          <Subtitle2 tag="span" className="left cd-marginTop">
                            Balance
                          </Subtitle2>
                          <Subtitle2
                            tag="span"
                            className="cd-subtitleLayout right"
                          >
                            Total $0.00
                          </Subtitle2>
                        </Cell>
                        <Cell
                          desktopColumns={12}
                          tabletColumns={8}
                          phoneColumns={4}
                        >
                          <Divider></Divider>
                          <Subtitle2 tag="span" className="left cd-marginTop">
                            Your earnings
                          </Subtitle2>
                          <Subtitle2
                            tag="span"
                            className="cd-subtitleLayout right"
                          >
                            $0.00
                          </Subtitle2>
                        </Cell>
                        <Cell
                          desktopColumns={12}
                          tabletColumns={8}
                          phoneColumns={4}
                        >
                          <Divider></Divider>
                          <Row>
                            <Cell
                              desktopColumns={10}
                              tabletColumns={7}
                              phoneColumns={3}
                            >
                              <Subtitle2
                                tag="span"
                                className="left cd-marginTop"
                              >
                                Your Reimbursements
                              </Subtitle2>
                              <br></br>
                              <br></br>
                              <Subtitle2
                                tag="span"
                                className="cd-subtitleLayout cd-subfont"
                              >
                                Funds that were credited back to your account
                                for canceled bookings.
                              </Subtitle2>
                            </Cell>
                            <Cell
                              desktopColumns={2}
                              tabletColumns={1}
                              phoneColumns={1}
                            >
                              <Subtitle2
                                tag="span"
                                className="cd-subtitleLayout right"
                              >
                                $0.00
                              </Subtitle2>
                            </Cell>
                          </Row>
                        </Cell>
                      </Row>
                    </Card>
                  </Cell>
                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Subtitle2
                      tag="span"
                      className="cd-subtitleLayout cd-subfont cd-marginTop"
                    >
                      Please note credits data is updated every few minutes
                    </Subtitle2>
                  </Cell>
                </Row>
              </Cell>
            </Row>
          </Cell>
          <Cell columns={2}></Cell>
        </Row>
      </Grid>
    );
  }
}

export default AccountBalance;
