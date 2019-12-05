import React, { Component } from "react";
import IconButton from "@material/react-icon-button";
import MaterialIcon from "material-icons-react";
import { Grid, Cell, Row } from "@material/react-layout-grid";
import { Subtitle1 } from "@material/react-typography";
import Card from "@material/react-card";
import CardTitle from "../components/cardTitle2";
import Button from "@material/react-button";
import generalInput from "../components/renderInput2";
import "../Component-css/tube.css";
import AttachFile from "../components/AttachFile";
import { getexpensecat } from "../utils/menu";
import axios from "axios";
class AddExpense extends generalInput {
  state = {
    categories: getexpensecat(),
    activeItem: {
      Total_amount: "",
      Date: "",
      Category: "",
      Note: "",
      Attached_file: "file_url"
    }
  };
  handlechange = event => {
    //console.log(this.state.activeItem.Country);
    let { name, value } = event.target;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    console.log(value);

    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    //console.log(this.state.activeItem.Country);
  };
  handleSubmit = item => {
    console.log("submit click");
    console.log(item);
    axios.post("http://localhost:8000/api/add-expense/", item).then(res => {
      console.log(res);
    });
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
                      className="va-middle cd-iconLayout material-icons "
                      icon="arrow_back"
                    />
                  </IconButton>
                </div>
                <div className="two">
                  <Subtitle1 className="cd-title-color back-title">
                    New expenses
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
                        title="Add an expense"
                        subtitle="Get complete control and visibility over your finances."
                      />
                    </Cell>
                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Total amount", "text", "Total_amount")}
                    </Cell>

                    <Cell
                      desktopColumns={6}
                      tabletColumns={4}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Date e.g: DD/MM/YY", "text", "Date")}
                    </Cell>
                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderMenu(
                        this.state.categories,
                        "Other",
                        "Category",
                        this.handlechange
                      )}
                    </Cell>
                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      {this.renderInput("Note", "text", "Note")}
                    </Cell>

                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      <AttachFile name="Lorem ipsum dolo lee lnd ieng sglien" />
                    </Cell>
                    <Cell
                      desktopColumns={12}
                      tabletColumns={8}
                      phoneColumns={4}
                      className="four"
                    >
                      <Button
                        onClick={() => this.handleSubmit(this.state.activeItem)}
                        className="cd-button btn-change"
                        style={{
                          textTransform: "capitalize",
                          width: "90px",
                          marginBottom: "15px"
                        }}
                      >
                        Add
                      </Button>
                      <IconButton>
                        <MaterialIcon
                          className="va-middle cd-iconLayout material-icons icon-color-grey"
                          icon="attach_file"
                        />
                      </IconButton>

                      <IconButton className="right">
                        <MaterialIcon
                          className="va-middle cd-iconLayout material-icons icon-color-grey"
                          icon="delete"
                        />
                      </IconButton>
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

export default AddExpense;
