import React, { useState, useEffect, useCallback } from "react";
import "./PageInput.css";

function PageInput(props) {
  const [cityInput, setcityInput] = useState("");
  const handleChange = useCallback((event) => {
    setcityInput(event.target.value);
  }, []);
  useEffect(() => {
    props.setselectedCity(cityInput);
  }, [cityInput]);

  const handleSelectCity = useCallback((e) => {
    setcityInput(e.target.id);
  }, []);
  return (
    <div className="mainframe__choosecity">
      <div className="choosecity__logo">
        <img
          src={process.env.PUBLIC_URL + "/choosetownIcons/la-boca.png"}
          alt=""
        ></img>
      </div>
      <form
        onSubmit={props.handleSubmit}
        action=""
        className="choosecity-form__input"
      >
        <input
          className="choosecity__input"
          onChange={handleChange}
          type="text"
          value={cityInput}
        ></input>
        {cityInput && (
          <ul className="choosecity__list">
            {Object.keys(props.resultedCityList)
              .filter((city) =>
                city.toLocaleLowerCase().includes(cityInput.toLocaleLowerCase())
              )
              .map((city) => (
                <li
                  className="choosecity__list-item"
                  id={city}
                  onClick={handleSelectCity}
                >
                  {city}, {props.resultedCityList[city]}
                </li>
              ))}
          </ul>
        )}
        <input className="choosecity__button" type="submit" value="Go!"></input>
      </form>
    </div>
  );
}

export default PageInput;
