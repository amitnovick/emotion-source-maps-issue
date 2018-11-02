import React, { Component } from "react";
import { spanStyle } from "./style.js";

class App extends Component {
  render() {
    return <span className={spanStyle}>"Hello world!"</span>;
  }
}

export default App;
