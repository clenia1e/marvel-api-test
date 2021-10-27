import React from "react";
import "./Releases.css";

const Releases = () => {
  return (
    <div className="container-releases">
      <p className="title-release">Últimos lançamentos</p>
      <div className="releases">
        <img
          className="img-releases"
          src="lancamentos.png"
          alt="ícone de navegacao"
        />
        <h4 className="releases-name">Lorem Ipsum</h4>
      </div>
    </div>
  );
};

export default Releases;
