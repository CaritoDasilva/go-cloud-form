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
        <div className="screen">
          <div className="row">
            <div className="col-4 text-center">
              <h1>Cursos de Verano +NEM</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8 text-center">
              <h4>No dejes pasar esta increíble oportunidad acá</h4>
            </div>
          </div>

          <Forms createNewRegister={this.createNewRegister} />
        </div>
      </div>
    );
  }
}

export default App;
