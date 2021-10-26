import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className={`${props.className} container-header`}>
        <div className="container-logo">
          <img className="img-logo" src="logo.svg" alt="ícone da Marvel" />
        </div>
        <h2 className="main-text">EXPLORE O UNIVERSO</h2>
        <p className="secundary-text">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
      </div>
    </>
  );
};

export default Header;
