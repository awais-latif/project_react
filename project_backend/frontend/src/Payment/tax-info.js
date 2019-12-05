import React, { Component } from "react";
import IconButton from "@material/react-icon-button";
import MaterialIcon from "material-icons-react";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";
import Card from "@material/react-card";
import CardTitle from "../components/cardTitle2";
import CardButton from "../components/cardButton2";
import generalInput from "../components/renderInput2";
import RenderInput from "../components/renderInput";
import axios from "axios";
class TaxInfo extends generalInput {
  state = {
    activeItem: {
      Country: "",
      Tax_id: "",
      Name: "",
      Address_line1: "",
      Address_line2: "",
      City: "",
      Region: "",
      Zip_code: ""
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
    axios.post("http://localhost:8000/api/tax-info/", item).then(res => {
      console.log(res);
    });
    console.log(item);
  };
  render() {
    return (
      <Grid>
        <Row>
          <Cell desktopColumns={3}></Cell>
          <Cell
            desktopColumns={8}
            tabletColumns={8}
            phoneColumns={4}
            className="padding-10"
          >
            <Row>
              <Cell desktopColumns={8} tabletColumns={4} phoneColumns={4}>
                <div style={{ marginTop: "70px" }}></div>
              </Cell>
            </Row>
            <Row>
              <Cell
                className="one"
                desktopColumns={12}
                tabletColumns={8}
                phoneColumns={4}
              >
                <div className="left">
                  <IconButton>
                    <MaterialIcon
                      className="va-middle cd-iconLayout material-icons"
                      icon="arrow_back"
                    />
                  </IconButton>
                </div>
                <div className="two">
                  <Subtitle1 className="cd-title-color back-title">
                    AVT
                  </Subtitle1>
                </div>
              </Cell>
            </Row>
            <Row className="three">
              <Cell desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                <Card outlined className="cardShape1">
                  <Row className="cd-add-layout">
                    <Cell columns={12}>
                      <CardTitle
                        title="Add VAT ID Number"
                        subtitle="Verification with the European Commission can take up to 48 hours. We’ll send you an email when it’s finished."
                      />
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Country", "text", "Country")}
                    </Cell>

                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Add VAT ID number", "text", "Tax_id")}
                    </Cell>
                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Name on regisration", "text", "Name")}
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput(
                        "Address line 1",
                        "text",
                        "Address_line1"
                      )}
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput(
                        "Address line 2 (Optional)",
                        "text",
                        "Address_line2"
                      )}
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("City", "text", "City")}
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Province or region", "text", "Region")}
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput(
                        "Zip or postal code",
                        "text",
                        "Zip_code"
                      )}
                    </Cell>

                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      <CardButton
                        text="Add"
                        isdisabled={false}
                        onClick={() => this.handleSubmit(this.state.activeItem)}
                      />
                    </Cell>
                  </Row>
                </Card>
              </Cell>
            </Row>
          </Cell>
          <Cell columns={2}></Cell>
        </Row>
      </Grid>
    );
  }
}

export default TaxInfo;
