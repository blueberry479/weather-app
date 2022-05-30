import "./App.css";
import React, { useCallback, useState, useEffect } from "react";
import PageError from "./components/PageError/PageError";
import PageWeather from "./components/PageWeather/PageWeather";
import PageInput from "./components/PageInput/PageInput";
import PagePreloader from "./components/PagePreloader/PagePreloader";
import cityList from "./countries.json";

function App() {
  const [data, setData] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [isValidCity, setIsValidCity] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultedCityList, setResultedCityList] = useState("");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      "X-RapidAPI-Key": "ddd595f952msh3a0aeebb63cab99p1853d0jsn6d33df2a9bfc",
    },
  };

  const transformCityJson = useCallback((cityList) => {
    const resultedCityList = {};
    for (const elem of Object.keys(cityList)) {
      for (const item of cityList[elem]) {
        resultedCityList[item] = elem;
      }
    }
    return resultedCityList;
  }, []);
  useEffect(() => {
    setResultedCityList(transformCityJson(cityList));
  }, []);

  const getData = useCallback(() => {
    setIsLoading(true);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${selectedCity}&%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=imperial`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setIsLoading(false);
        if (response.cod === "404") {
          throw new Error("error");
        }
      })
      .catch((error) => setIsError(true));
  }, [selectedCity]);

  const handleArrow = useCallback(() => {
    setIsValidCity(!isValidCity);
    setIsError(false);
  }, [isValidCity]);
  const handleSubmit = useCallback(
    (e) => {
      try {
        e.preventDefault();
        getData();
        setIsValidCity(!isValidCity);
      } catch (error) {
        setIsError(true);
      }
    },
    [selectedCity]
  );

  return (
    <div className="mainframe">
      {!isValidCity && (
        <PageInput
          handleSubmit={handleSubmit}
          setselectedCity={setSelectedCity}
          resultedCityList={resultedCityList}
        />
      )}
      {isValidCity && (
        <>
          {isLoading && <PagePreloader />}
          {isError && <PageError handleArrow={handleArrow} />}
          {!isError && !isLoading && (
            <PageWeather handleArrow={handleArrow} data={data} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
