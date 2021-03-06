import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import Loader from "./Loader";

const Main = ({ currentTemp }) => {
  return (
    <>
      {currentTemp.cod !== 200 ? (
        <Loader />
      ) : (
        <>
          <div id="main">
            <div className="wrapper">
              <h1 className="title">
                Detectamos automáticamente tu localización <br /> y te mostramos
                el clima.
              </h1>
              <h2 className="subtitle">¡Es super rápido y sencillo!</h2>
            </div>
            <Weather currentTemp={currentTemp} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
