import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import { Subtitle1, Headline6 } from "@material/react-typography";
import generalInput from "../components/renderInput2";
import "../Component-css/position.css";
import CheckBox from "../components/checkBox";
import Button from "@material/react-button";
import axios from "axios";
class BillingAddress extends generalInput {
  state = {
    checked: false,
    indeterminate: false,
    activeItem: {
      Country: "",
      Business_name: "",
      Name: "",
      Address: "",
      City: "",
      State: "",
      Zip_code: "",
      Send_voice_Email: true
    }
  };
  handlechange = event => {
    //console.log(this.state.activeItem.Country);
    let { name, value } = event.target;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    //console.log(this.state.activeItem.Country);
  };

  handleSubmit = item => {
    console.log("submit click");
    axios.post("http://localhost:8000/api/billing-address/", item).then(res => {
      console.log(res);
    });
    console.log(item);
  };
  render() {
    return (
      <Grid>
        <Row>
          <Cell desktopColumns={3} tabletColumns={2}></Cell>
          <Cell
            desktopColumns={8}
            tabletColumns={6}
            phoneColumns={4}
            className="padding-40"
          >
            <Row>
              <Cell
                className="one"
                desktopColumns={12}
                tabletColumns={8}
                phoneColumns={4}
              >
                <Subtitle1 tag="span" className="cd-subtitleLayout padding-tb">
                  Billing address
                </Subtitle1>
                <MaterialIcon
                  className="material-icons padding-rl md-18 "
                  icon="arrow_forward_ios"
                />

                <Subtitle1 tag="span" className="cd-title-color">
                  Add billing address
                </Subtitle1>
              </Cell>
            </Row>
            <Row>
              <Cell columns={12} className="padding-top">
                <Headline6 tag="span" className="cd-title-color">
                  Add a billing address
                </Headline6>
              </Cell>
              <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
                <Row>
                  <Cell
                    desktopColumns={12}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("Country", "text", "Country")}
                  </Cell>
                  <Cell
                    desktopColumns={6}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("Business name", "text", "Business_name")}
                  </Cell>
                  <Cell
                    desktopColumns={6}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("Name", "text", "Name")}
                  </Cell>
                  <Cell
                    desktopColumns={12}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("Address", "text", "Address")}
                  </Cell>
                  <Cell
                    desktopColumns={6}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("City", "text", "City")}
                  </Cell>
                  <Cell
                    desktopColumns={6}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("State", "text", "State")}
                  </Cell>
                  <Cell
                    desktopColumns={12}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    {this.renderInput("Zip", "text", "Zip_code")}
                  </Cell>
                  <Cell
                    desktopColumns={12}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    <CheckBox
                      name="Send_voice_Email"
                      label="Send me invoice via email"
                      onChange={this.handlechange}
                      checked={this.state.activeItem.Send_voice_Email}
                    />
                  </Cell>
                  <Cell
                    desktopColumns={12}
                    tabletColumns={8}
                    phoneColumns={4}
                    className="four"
                  >
                    <Button
                      onClick={() => this.handleSubmit(this.state.activeItem)}
                      className="cd-button btn-change "
                      style={{
                        textTransform: "capitalize",
                        width: "90px",
                        marginRight: "20px",
                        marginTop: "20px"
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      style={{
                        textTransform: "capitalize",
                        width: "90px",
                        marginTop: "20px"
                      }}
                    >
                      Cancel
                    </Button>
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

export default BillingAddress;
