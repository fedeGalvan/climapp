import React from "react";
import moment from "moment";

const Weather = ({ currentTemp }) => {
  const kelvin = 273.15;

  function firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const {
    temp_max,
    temp_min,
    feels_like,
    humidity,
    temp,
    pressure,
  } = currentTemp.main;

  return (
    <>
      <div class="columns is-tablet" id="weather">
        <div class="column is-three-fifths notification is-success is-light">
          <div class="column ">
            <h2 className="subtitle">Para ahora</h2>
            <h1 className="actualWeather">
              <b>
                {firstLetterToUpperCase(currentTemp.weather[0].description)}
              </b>
            </h1>
            <img
              src={`http://openweathermap.org/img/wn/${currentTemp.weather[0].icon}@2x.png`}
              rel="noreferrer"
              alt="icon"
            ></img>
          </div>
          <div>
            <p>
              Temperatura actual:{" "}
              <b>{parseFloat(temp - kelvin, 10).toFixed(1)} &#8451;</b>
            </p>
            <p>
              Sensación termica:{" "}
              <b>{parseFloat(feels_like - kelvin, 10).toFixed(1)} &#8451;</b>{" "}
            </p>
            <p>
              Humedad: <b>{humidity}%</b>
            </p>
            <p>
              La presion actual es de <b>{pressure} hPa</b>
            </p>
          </div>
        </div>
        <div class="column is-two-fifths notification  is-warning is-light">
          <div class="column">
            <h2 className="subtitle">
              <b>Información adicional</b>
            </h2>
            <br />
            <p>
              Hoy el sol saldrá a las:{" "}
              <b>{moment(currentTemp.sys.sunrise * 1000).format("LT")}</b>{" "}
              <br />y a las{" "}
              <b>{moment(currentTemp.sys.sunset * 1000).format("LT")}</b> se
              esconderá
            </p>
            <br />
            <h2>
              <b>Por otra parte..</b>
            </h2>
            <p>
              La <b>temperatura máxima</b> actual:{" "}
              <b>{parseFloat(temp_max - kelvin, 10).toFixed(1)} &#8451;</b>
            </p>
            <p>
              {" "}
              La <b>temperatura mínima</b> actual:{" "}
              <b>{parseFloat(temp_min - kelvin, 10).toFixed(1)} &#8451;</b>
            </p>
            <p>
              Los vientos soplan a:{" "}
              <b>
                {parseFloat(currentTemp.wind.speed * 3.6, 10).toFixed(1)} Km/H
              </b>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
