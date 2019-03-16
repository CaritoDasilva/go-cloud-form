import React, { Component } from "react";
import Header from "./components/header";
import Forms from "./components/form";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Cursos de Verano +NEM</h1>
        <h4>No dejes pasar esta increíble oportunidad acá</h4>
        <br />
        <Forms />
      </div>
    );
  }
}

export default App;
