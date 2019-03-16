import React, { Component } from "react";

class Forms extends Component {
  //refs
  nameStudent = React.createRef();
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendForm = e => {
    e.preventDefault();
    this.props.createNewRegister();
    console.log(this.nameStudent.current.value);
  };
  render() {
    return (
      <form onSubmit={this.sendForm}>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre:</label>
          <div className="col-sm-4 col-lg-10">
            <input
              ref={this.nameStudent}
              type="text"
              className="form-control"
              placeholder="Ej. José Canseco"
            />
          </div>
          <label className="col-sm-4 col-lg-2 col-form-label">Teléfono:</label>
          <div className="col-sm-4 col-lg-10">
            <input
              type="text"
              className="form-control"
              placeholder="Ej. +569 3772 9376"
            />
          </div>
          <label className="col-sm-4 col-lg-2 col-form-label">Correo:</label>
          <div className="col-sm-4 col-lg-10">
            <input
              type="text"
              className="form-control"
              placeholder="Ej. correo@gmail.com"
            />
          </div>
          <label className="col-sm-4 col-lg-2 col-form-label">Rut:</label>
          <div className="col-sm-4 col-lg-10">
            <input
              type="text"
              className="form-control"
              placeholder="Ej. 26.492.283-1"
            />
          </div>
          <div className="col-sm-4 col-lg-10">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Inscribirse
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Forms;
