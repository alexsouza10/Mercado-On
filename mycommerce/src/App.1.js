import React, { Component } from "react";
import { Content } from "./Content";
import { Header } from "./components/Header";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
