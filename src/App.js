import { useEffect, useState } from "react";
import { Background } from "./components/Background";

const api = {
  key: "30a10de065bf2df20bd32c684f398bdc",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder = (d) => {
    const months = [
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
  const [backgroundVideo, setBackgroundVideo] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setBackgroundVideo(`${result.weather[0].description}`);
          setQuery("");
          // document.querySelector("#myvid > source").src = `/videos/${}`

        });
    }
  };

  return (
    <div className="bg-gray-900/40 min-h-screen p-4">
      {/**Video Background */}
      {typeof weather.main !== "undefinde" &&
      typeof weather.sys !== "undefined" ? (
        <video 
          id="myvid"
          autoPlay
          loop
          muted
          src={`/videos/${backgroundVideo}.mp4`}
          className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full filter blur-sm"
        >
          
          Your browser does not support the video tag.
        </video>
      ) : (
        ""
      )}
      <div className="w-full flex justify-center">
        <div className="flex mx-3 opacity-80 shadow-lg hover:opacity-100 mt-2">
          <input
            className=" appearance-none  shadow-gray-300 px-4 py-3  w-full  rounded-xl text-lg outline-none"
            placeholder="search ..."
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <button
            className=" px-4 py-3  text-white   rounded-lg shadow-md  hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out  items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
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
