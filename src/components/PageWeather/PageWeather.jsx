import React, { useCallback } from "react";
import "./PageWeather.css";

function PageWeather(props) {
  const handleIcon = useCallback(() => {
    switch (props.data?.weather?.[0]?.description) {
      case "mist":
        return "/forecastIcons/foggy.png";
      case "few clouds":
        return "/forecastIcons/few-clouds.png";
      case "broken clouds":
        return "/forecastIcons/few-clouds.png";
      case "overcast clouds":
        return "/forecastIcons/cloudy.png";
      case "scattered clouds":
        return "/forecastIcons/cloudy.png";
      case "light intensity shower rain":
        return "/forecastIcons/drizzle.png";
      case "light rain":
        return "/forecastIcons/drizzle.png";
      default:
        return "/forecastIcons/sunny.png";
    }
  }, [props.data?.weather?.[0]?.description]);
  return (
    <>
      <div className="mainframe-header">
        <div className="header__arrow" onClick={props.handleArrow}>
          <img alt="pic"
            src={process.env.PUBLIC_URL + "/choosetownIcons/left-arrow.png"}
          ></img>
        </div>
        <div className="header__body">
          <div className="header__icon">
            <img src={process.env.PUBLIC_URL + handleIcon()} alt=""></img>
            <div className="header__city">{props.data?.name}</div>
          </div>
          <div className="header__info">
            <div className="info__temp">{props.data?.main?.temp} F</div>
            <div className="info__feelslike">
              feelslike {props.data?.main?.feels_like} f
            </div>
            <div className="info__title">
              {props.data?.weather?.[0].description
                ? props.data.weather[0].description
                : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mainframe-details">
        <div className="details details__visibility">
          <div className="item__icon">
            <img
              src={process.env.PUBLIC_URL + "/detailsIcons/fog.png"}
              alt=""
            ></img>
          </div>
          <div className="item__value">{props.data?.visibility / 100}%</div>
        </div>
        <div className="details details__pressure">
          <div className="item__icon">
            <img
              src={process.env.PUBLIC_URL + "/detailsIcons/atmospheric.png"}
              alt=""
            ></img>
          </div>
          <div className="item__value">{props.data?.main?.pressure} mm</div>
        </div>
        <div className="details details__windspeed">
          <div className="item__icon">
            <img
              src={process.env.PUBLIC_URL + "/detailsIcons/wind.png"}
              alt=""
            ></img>
          </div>
          <div className="item__value">{props.data?.wind?.speed} mph</div>
        </div>
        <div className="details details__humidity">
          <div className="item__icon">
            <img
              src={process.env.PUBLIC_URL + "/detailsIcons/humidity.png"}
              alt=""
            ></img>
          </div>
          <div className="item__value">{props.data?.main?.humidity}%</div>
        </div>
      </div>
    </>
  );
}

export default PageWeather;
