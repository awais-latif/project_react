import React from "react";
import "./App.scss";
import "./Component-css/position.css";
import "./Component-css/avatar.css";
import "./Component-css/simpleCard.css";
import "./Component-css/tube.css";

import PaymentSubcriptionsPage from "./Payment/payment-and-subcriptions";
import TaxInfo from "./Payment/tax-info";
import PaymentMethod from "./Payment/payment-method";
import AddExpense from "./Payment/add-expense";
import BillingAddress from "./Payment/billing-address";
import AccountBalance from "./Payment/account-balance";
import Expenses from "./Payment/expenses";
import PayoutMethod from "./Payment/payout-method";
function App() {
  return (
    <div>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
