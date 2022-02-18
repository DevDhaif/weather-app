import { useEffect, useState } from "react";
import { Background } from "./components/Background";

const api = {
  key: "30a10de065bf2df20bd32c684f398bdc",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  const [bgv, setBgv] = useState("snow");
  const vidUrl = `/videos/${bgv}.mp4`;
  useEffect(() => {
    console.log(vidUrl);
  }, []);
  return (
    <div className="bg-gray-900/40 min-h-screen p-4">
      <Background vidUrl={vidUrl} />
      <div className="w-full flex justify-center">
        <input
          className="block appearance-none opacity-80 shadow-lg hover:opacity-100 shadow-gray-300 px-4 py-3 mt-2 w-full mx-3 rounded-xl text-lg outline-none"
          placeholder="search ..."
          type="text"
        />
      </div>

      <div className="mt-6 ml-3 text-white text-center">
        <h1 className="text-xl font-semibold   text-shadow">Sanaa, Yemen.</h1>
        <h2 className="font-semibold">{dateBuilder(new Date())}</h2>
      </div>
      
      <div className="mt-6 ml-3 space-y-4 text-center    text-white">
        <h2 className="text-7xl text-shadow font-bold mx-8 my-auto bg-gray-600/70 rounded-xl px-4 py-6">23 C</h2>
        <h2 className="text-5xl font-semibold">Sunny</h2>
      </div>
    </div>
  );
}

export default App;
