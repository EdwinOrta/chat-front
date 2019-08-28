import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col align-self-center">
          <h1>Bienvenido</h1>
          <Link className="btn btn-primary" to={"/chat"}>
            Ir al chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
