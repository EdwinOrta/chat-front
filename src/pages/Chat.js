import React from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";
import "./styles/Chat.css";
import NavBar from "../components/NavBar";
import Message from "../components/Message";
import { URL } from "../util/Constants";

class Chat extends React.Component {
  constructor() {
    super();

    this.state = {
      socket: undefined,
      name: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { name } = this.props.location.state;
      this.setState({ name: name });
    }

    let messages = [];

    const socket = io(URL);
    socket.on("connect", () => {
      this.setState({ socket: socket });
    });

    socket.on("message", data => {
      if (data.message) {
        messages.push(data);

        let arrayElemets = [];
        messages.forEach((message, index) => {
          const isUser = this.state.name === message.name;
          const lastItem = index === 0 ? "" : messages[index - 1];
          let name = message.name;
          if (lastItem !== "") {
            name = lastItem.name === message.name ? "" : message.name;
          }
          arrayElemets.push(
            <Message
              key={message.key}
              name={name}
              message={message.message}
              class={isUser}
            />
          );
        });
        ReactDOM.render(arrayElemets, document.getElementById("contenedor"));
        document.getElementById(
          "contenedor"
        ).scrollTop = document.getElementById("contenedor").scrollHeight;
      } else {
        console.log("There is a problem:", data);
      }
    });
  }

  handlerSend = e => {
    if (this.state.name === undefined) {
      alert("Es necesario ingresar un nombre");
    } else {
      const message = document.getElementById("message").value;
      this.state.socket.emit("send", {
        message: message,
        name: this.state.name
      });
      document.getElementById("message").value = "";
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar text={"Config."} to={"/config"}></NavBar>
        <div className="container">
          <div id="contenedor" className="chat_container"></div>
          <div className="form-inline">
            <div className="form-group col-xl-10 col-lg-10 col-sm-8 col-8 mb-2">
              <input type="text" className="form-control col-12" id="message" />
            </div>
            <button
              className="btn btn-primary col-lg-1 col-sm-3 col-3 mb-2"
              onClick={this.handlerSend}
            >
              Enviar
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chat;
