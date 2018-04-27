import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  componentDidMount() {
    console.log("Sup from login page");
  }

  render() {
    return (<h1>Sup Login</h1>);
  }
}

export default Login;
