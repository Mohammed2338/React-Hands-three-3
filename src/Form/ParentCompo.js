import React, { Component } from "react";
import ChildCompo from "./ChildCompo";
import './Form.css'

export default class ParentCompo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dept: "",
      rating: "",
      clicked: true,
      EmpData: [],
    };  
  }
  ChangeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  SubmitHndle = () => {
    const newObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };
    this.state.EmpData.push(newObj);
    this.setState({
      EmpData: this.state.EmpData,
      name: "",
      dept: "",
      rating: "",
      clicked: false,
    });
  };
  toggleFunc = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <h1 className="header">Empolyee Feedback form</h1>
        {this.state.clicked ? (
          <div className="innerBox">
            <form action="">
              <label htmlFor="Name">Name:-</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={this.ChangeHandle}
              />
              <label htmlFor="Dept">Dept:-</label>
              <input
                type="text"
                name="dept"
                placeholder="Enter Your Dept"
                value={this.state.dept}
                onChange={this.ChangeHandle}
              />
              <label htmlFor="Rating">Rating:-</label>
              <input
                type="number"
                name="rating"
                placeholder="Enter Your Rating"
                value={this.state.rating}
                onChange={this.ChangeHandle}
              />
             <button onClick={this.SubmitHndle}>Submit</button>
            </form>
          </div>
        ) : (
          <ChildCompo value={this.state.EmpData} toggleFunc={this.toggleFunc} />
        )}
      </>
    );
  }
}
