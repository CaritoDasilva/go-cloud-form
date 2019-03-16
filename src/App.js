import React, { Component } from "react";
import Header from "./components/Header";
import Forms from "./components/Form";
import "./App.css";

class App extends Component {
  createNewRegister = () => {
    console.log("Se envía desde Forms");
  };
  render() {
    return (
      <div>
        <Header />
        <h1>Cursos de Verano +NEM</h1>
        <h4>No dejes pasar esta increíble oportunidad acá</h4>
        <br />
        <Forms createNewRegister={this.createNewRegister} />
      </div>
    );
  }
}

export default App;
