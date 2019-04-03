import React, { Component } from "react";
import FetchStudents from '../firestoreService/Firestore';
import { async } from "q";


const url = 'https://us-central1-go-cloud-challenge-be.cloudfunctions.net/api/students';
/*global firebase*/
// eslint-disable-next-line no-unused-vars
// import firestore from "../firestoreService/Firestore";
// import firebase from "firebase";

class Forms extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      fullname: "",
      phone: "",
      email: "",
      rut: "",
      error: false
    };

  }

  componentDidMount() {
    FetchStudents().then(students => {
      console.log(students);
    });
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async addRegister(state) {
    const { fullname, phone, email, rut } = this.state;
    console.log(state);
    const data = {
      fullname: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
      rut: this.state.rut
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const json = await response.json();


    this.setState({
      fullname: "",
      phone: "",
      email: "",
      rut: ""
    });
  }

  validatorsForm = e => {
    e.preventDefault();
    if (
      this.state.fullname === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.rut === ""
    ) {
      this.setState({ error: true });
      console.log("faltan campos por validar");
    } else {
      this.setState({ error: false });
      this.addRegister(this.state);
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
                pattern="^\+569[0-9]{8}$"
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
                name="rut"
                className="form-control"
                placeholder="Ej. 26.492.283-1"
                required
                pattern="\d{3,8}-[\d|kK]{1}"
                title="Debe ser un Rut válido"
                onChange={this.updateInput}
                value={this.state.rut}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-lg-10 submitbtn">
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
