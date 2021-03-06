import React, { useState } from "react";
import moment from "moment";

const Header = ({ currentLocation }) => {
  const [currentDate, setCurrentDate] = useState(moment().format("LTS"));

  setInterval(() => {
    setCurrentDate(moment().format("LTS"));
  }, 1000);

  return (
    <>
      <div class="columns is-desktop" id="header">
        <div class="column bd-notification is-primary is-one-third">
          <h2>
            {currentLocation === ""
              ? "Detectando localización.."
              : `Estás en: ${currentLocation}`}
          </h2>
        </div>
        <div class="column is-one-third app">
          <h2>
            CLIM<span>APP</span>
          </h2>
        </div>
        <div class="column is-one-third">
          <h2>Hora Actual: {currentDate}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
