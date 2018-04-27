import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  componentDidMount() {
    console.log("Sup from home page");
  }

  render() {
    return (<h1>Sup homie</h1>);
  }
}

export default Home;
