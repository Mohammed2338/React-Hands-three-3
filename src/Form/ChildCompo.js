import React, { Component } from "react";

export default class ChildCompo extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.value);
  }
  render() {
    return (
      <>
        <div className="dataBox1">
          {this.props.value.map((item, index) => {
            return (
              <p key={index}>
                Name:{item.name}, Dept :{item.dept}, Rating:{item.rating}
              </p>
            );
          })}
        </div>

        <button className="btn" onClick={this.props.toggleFunc}>
          Back
        </button>
      </>
    );
  }
}
