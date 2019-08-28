import React from "react";
import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar";

class Config extends React.Component {
  constructor() {
    super();

    this.state = {
      toChat: false,
      name: undefined
    };
  }

  handlerClick = e => {
    const name = document.getElementById("name").value;
    if (name.length === 0) {
      alert("Es necesario ingresar un nombre");
    } else {
      this.setState({ toChat: true, name: name });
    }
  };

  render() {
    if (this.state.toChat) {
      return (
        <Redirect
          to={{
            pathname: "/chat",
            state: {
              name: this.state.name
            }
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <NavBar text={"Chat"} to={"/chat"}></NavBar>
        <div className="container pt-5">
          <div className="form-row">
            <div className="form-group col-12">
              <label>Nombre:</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <button
            className="btn btn-primary float-right"
            onClick={this.handlerClick}
          >
            Guardar
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Config;
