import React, { Component } from "react";

/*global firebase*/
// eslint-disable-next-line no-unused-vars
import firestore from "../firestoreService/Firestore";
import firebase from "firebase";

class Forms extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      fullname: "",
      phone: "",
      email: "",
      id: "",
      error: false
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRegister() {
    const db = firebase.firestore();
    const userRef = db.collection("students").add({
      fullname: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
      id: this.state.id
    });
    this.setState({
      fullname: "",
      phone: "",
      email: "",
      id: ""
    });
  }

  validatorsForm = e => {
    e.preventDefault();
    if (
      this.state.fullname === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.id === ""
    ) {
      this.setState({ error: true });
      console.log("faltan campos por validar");
    } else {
      this.setState({ error: false });
      this.addRegister();
      this.props.createNewRegister([this.state]);
    }
  };
  render() {
    const activatedError = this.state.error;
    return (
      <form
        className="needs-validation"
        novalidate
        onSubmit={this.validatorsForm}
      >
        <div className="form-group">
          <div className="row">
            <div className="col-sm-8 col-lg-5">
              <label className="col-2 col-form-label">Nombre:</label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Ej. José Canseco"
                required
                minLength="3"
                onChange={this.updateInput}
                value={this.state.fullname}
              />
            </div>

            <div className="col-sm-8 col-lg-5">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Teléfono:
              </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Ej. +569 3772 9376"
                required
                minLength="10"
                title="Debe ser un Teléfono válido"
                onChange={this.updateInput}
                value={this.state.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-lg-5">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Correo:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Ej. correo@gmail.com"
                required
                onChange={this.updateInput}
                value={this.state.email}
              />
            </div>
            <div className="col-sm-8 col-lg-5">
              <label className="col-sm-4 col-lg-2 col-form-label">Rut:</label>
              <input
                type="text"
                name="id"
                className="form-control"
                placeholder="Ej. 26.492.283-1"
                required
                pattern="\d{3,8}-[\d|kK]{1}"
                title="Debe ser un Rut válido"
                onChange={this.updateInput}
                value={this.state.id}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-lg-10">
              <button type="submit" className="btn btn-lg btn-block text-white">
                Inscribirse
              </button>
            </div>
          </div>
        </div>
        {activatedError ? (
          <div className="col-8 alert alert-danger text-center">
            Todos los campos son obligatorios
          </div>
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default Forms;
