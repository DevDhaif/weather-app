import { useEffect, useState } from "react";
import { Background } from "./components/Background";

const api = {
  key: "30a10de065bf2df20bd32c684f398bdc",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [bgv, setBgv] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setBgv(`${result.weather[0].description}`);

          console.log(bgv);
          setQuery("");
        });
      // console.log(result);
    }
  };

  return (
    <div className="bg-gray-900/40 min-h-screen p-4">
      {/**Video Background */}
      {typeof weather.main !== "undefinde" &&
      typeof weather.sys !== "undefined" ? (

      
      <video
        autoPlay
        loop
        muted
        className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full filter blur-sm"
      >
        <source
          src={`/videos/${weather.weather[0].description}.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      ):('')} 
      <div className="w-full flex justify-center">
        <input
          className="block appearance-none opacity-80 shadow-lg hover:opacity-100 shadow-gray-300 px-4 py-3 mt-2 w-full mx-3 rounded-xl text-lg outline-none"
          placeholder="search ..."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main !== "undefinde" &&
      typeof weather.sys !== "undefined" ? (
        <div>
          <div className="mt-6 ml-3 text-white text-center">
            <h1 className="text-xl font-semibold   text-shadow">
              {weather.name},{weather.sys.country}
            </h1>
            <h2 className="font-semibold">{dateBuilder(new Date())}</h2>
          </div>

          <div className="mt-6 ml-3 space-y-4 text-center text-white ">
            <h2 className="text-7xl text-shadow font-bold mx-8 my-auto  bg-gray-900/20 rounded-xl px-4 py-8  shadow-lg shadow-gray-700/50 ">
              {Math.floor(weather.main.temp)} C
            </h2>
            <h2 className="text-5xl font-semibold">
              {weather.weather[0].description}
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
