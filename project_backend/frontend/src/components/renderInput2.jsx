import React, { Component } from "react";
import Input from "./input2";
import MenuSelect from "./menuSelect2";
import { Cell } from "@material/react-layout-grid";

class generalInput extends Component {
  state = {
    value: null
  };

  renderInput(label, type, name, limit = 0) {
    return (
      <Cell className="eight" columns={12}>
        <Input
          onChange={this.handlechange}
          value={this.state.value}
          limit={limit}
          label={label}
          type={type}
          name={name}
        />

        <div
          className={limit == 0 ? "hide charctercounter" : "charctercounter"}
        >
          {this.state.value || 0}/{limit}
        </div>
      </Cell>
    );
  }
  renderMenu(array, defolt, name, onChange) {
    return (
      <Cell className="nine" columns={12}>
        <MenuSelect
          array={array}
          defolt={defolt}
          name={name}
          onChange={onChange}
        />
      </Cell>
    );
  }
}

export default generalInput;
