import React, { Component } from "react";
import CommonInput from "./CommonInput";

class CommonInputClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      value: "",
    };
  }
  handleChange = (e) => {
    debugger;
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="input-box">
        <CommonInput
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <CommonInput
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <CommonInput
          type="text"
          placeholder="Enter Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <CommonInput
          type="text"
          placeholder="Enter Number"
          name="phoneNum"
          value={this.state.phoneNum}
          onChange={this.handleChange}
        />
        <h1> First Name is: {this.state.firstName}</h1>
        <h1> Last Name is: {this.state.lastName}</h1>
        <h1> Email is: {this.state.email}</h1>
        <h1> Phone Number is: {this.state.phoneNum}</h1>
      </div>
    );
  }
}
export default CommonInputClass;
