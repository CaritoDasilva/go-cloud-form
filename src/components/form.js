import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre:</label>
          <div className="col-sm-4 col-lg-10">
            <input
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
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Block level button
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Forms;
