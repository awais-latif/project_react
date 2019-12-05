import React, { Component } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { Headline5, Subtitle1 } from "@material/react-typography";
import ExpenseCard from "../components/expenseCard";
import axios from "axios";
class Expense extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      expensesList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/add-expense/")
      .then(res => this.setState({ expensesList: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row align="middle">
            <Cell desktopColumns={3} tabletColumns={2}></Cell>
            <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
              <Headline5 className="avatar-headline1">Manage expense</Headline5>
              <Subtitle1 className="color-subheading">
                Keep track of your expenses to have financial freedom.
              </Subtitle1>
            </Cell>
            <Cell desktopColumns={2}></Cell>
          </Row>
          <Row>
            <Cell desktopColumns={3} tabletColumns={2}></Cell>
            <Cell desktopColumns={7} tabletColumns={6} phoneColumns={4}>
              <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <ExpenseCard
                  expensesList={this.state.expensesList}
                  icon="money"
                  title="Expenses"
                  subtitle="Track your expenses to see how you spend your money"
                  buttonText="Add payment method"
                />
              </div>
            </Cell>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Expense;
