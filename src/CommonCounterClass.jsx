import React, { Component } from "react";
import CommonCounter from "./CommonCounter";

class CommonCounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    if (this.state.counter == 0) {
      this.setState({
        counter: 0,
      });
    } else
      this.setState({
        counter: this.state.counter - 1,
      });
  };
  render() {
    console.log(this.state.counter);
    return (
      <div>
        <CommonCounter onClick={this.increment} name="Increment"/>
        <h1>{this.state.counter}</h1>
        <CommonCounter onClick={this.decrement} name= "Decrement"/>
      </div>
    );
  }
}
export default CommonCounterClass;
