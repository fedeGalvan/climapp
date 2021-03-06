import React, { useEffect, useState } from "react";
import api from "./services/api";

import Header from "../src/components/Header";
import Main from "../src/components/Main";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");

  useEffect(() => {
    api.location().then((res) => setCurrentLocation(res));

    api
      .getWeather(currentLocation.toLocaleLowerCase())
      .then((res) => setCurrentTemp(res));

    setInterval(() => {
      api
        .getWeather(currentLocation.toLocaleLowerCase())
        .then((res) => setCurrentTemp(res));
    }, 360000);
  }, [currentLocation]);

  return (
    <>
      {currentLocation === "" && currentTemp === "" ? null : (
        <>
          <Header currentLocation={currentLocation} />
          <Main currentTemp={currentTemp} />
        </>
      )}
    </>
  );
}

export default App;
