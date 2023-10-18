import React, { Component } from "react";
import "./App.css";
import { Content } from "./Content";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
