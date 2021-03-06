/* eslint-disable no-sequences */
const location = async () => {
  const url = "https://worldtimeapi.org/api/ip";
  const geo = await fetch(url)
    .then((res) => res.json())
    .then((data) => (data, { data }));

  geo.data.timezone = geo.data.timezone
    .split("/")
    .join(" ")
    .split(" ")
    .slice(2)
    .join(" ")
    .split("_")
    .join(" ");

  return geo.data.timezone;
};

const getWeather = async (data) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&lang=sp&appid=b34592baf7d04f61709f4b3c4e0db344`;
  const weather = await fetch(url)
    .then((res) => res.json())
    .then((data) => (data, { data }));

  return weather.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { location, getWeather };
