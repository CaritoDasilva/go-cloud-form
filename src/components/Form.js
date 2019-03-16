import React, { Component } from "react";

/*global firebase*/
// eslint-disable-next-line no-unused-vars
import firestore from "../../src/firestoreService/firestore";
import firebase from "firebase";

class Forms extends Component {
  //refs
  nameStudent = React.createRef();
  phoneStudent = React.createRef();
  mailStudent = React.createRef();
  idStudent = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phone: "",
      email: "",
      id: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRegister = e => {
    e.preventDefault();
    this.props.createNewRegister();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
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
    console.log(
      this.nameStudent.current.value,
      this.phoneStudent.current.value,
      this.mailStudent.current.value,
      this.idStudent.current.value
    );
  };
  render() {
    return (
      <form onSubmit={this.addRegister}>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label className="col-2 col-form-label">Nombre:</label>
              <input
                ref={this.nameStudent}
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Ej. José Canseco"
                onChange={this.updateInput}
                value={this.state.fullname}
              />
            </div>

            <div className="col-6">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Teléfono:
              </label>
              <input
                ref={this.phoneStudent}
                type="text"
                name="phone"
                className="form-control"
                placeholder="Ej. +569 3772 9376"
                onChange={this.updateInput}
                value={this.state.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Correo:
              </label>
              <input
                ref={this.mailStudent}
                type="email"
                name="email"
                className="form-control"
                placeholder="Ej. correo@gmail.com"
                onChange={this.updateInput}
                value={this.state.email}
              />
            </div>
            <div className="col-6">
              <label className="col-sm-4 col-lg-2 col-form-label">Rut:</label>
              <input
                ref={this.idStudent}
                type="text"
                name="id"
                className="form-control"
                placeholder="Ej. 26.492.283-1"
                onChange={this.updateInput}
                value={this.state.id}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Forms;
