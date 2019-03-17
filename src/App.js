import React, { Component } from "react";
import Header from "./components/Header";
import Forms from "./components/Form";
import "./App.css";

class App extends Component {
  createNewRegister = state => {
    console.log("Se envía desde Forms");
    console.log(state);
  };
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-3 text-center">
            <h1>Cursos de Verano +NEM</h1>
            <h4>No dejes pasar esta increíble oportunidad acá</h4>
          </div>
        </div>

        <Forms createNewRegister={this.createNewRegister} />
      </div>
    );
  }
}

export default App;
