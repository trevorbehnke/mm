import React, { Component } from "react";
import "./Form.styles.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form>
        <h1>
          Ad Fontes {this.state.username} {this.state.age}
        </h1>
        <p>What Year Were You Born:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        {/* <p>How Many Years Do You Think You'll Live:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} /> */}
        <h1>You've lived 34% of your life.</h1>
      </form>
    );
  }
}

export default MyForm;
