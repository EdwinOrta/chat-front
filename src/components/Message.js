import React from "react";

import "./styles/Messages.css";

function Message(props) {
  if (props.class === true) {
    return (
      <div className=" text-right">
        <b>{props.name}</b>
        <div className="row justify-content-end ">
          <div className="col-8 box">
            <div className="message">{props.message}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <b>{props.name}</b>
      <div className="col-8 box message">{props.message}</div>
    </div>
  );
}

export default Message;
