import React, { Component } from "react";
import Input from "./input2";
import { Cell } from "@material/react-layout-grid";
class RenderInput extends Component {
  state = { activeItem: this.props.activeItem };

  render() {
    const { label, type, name, limit = 0 } = this.props;
    return (
      <Cell className="eight" columns={12}>
        <Input
          onChange={this.props.handlechange}
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
}

export default RenderInput;
