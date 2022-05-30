import React from "react";
import "./PageError.css";

function PageError(props) {
  return (
    <div className="error__block">
      <div className="error__arrow header__arrow" onClick={props.handleArrow}>
        <img alt="pic"
          src={process.env.PUBLIC_URL + "/choosetownIcons/left-arrow.png"}
        ></img>
      </div>
      <h1 className="error__block-title">City not found. Try again!</h1>
      <div className="error__icon">
        <img
          src={process.env.PUBLIC_URL + "/errorIcons/error.png"}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default PageError;
