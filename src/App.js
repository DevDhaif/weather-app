import { useEffect, useState } from "react";
import { Background } from "./components/Background";
import { DropDown } from "./components/DropDown";
import { Country, State, City }  from 'country-state-city';
import { dateBuilder } from "./DateBuilder";

const apiUrl=process.env.REACT_APP_BASE_URL;
const apiKey=process.env.REACT_APP_API_KEY;

function App() {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({}); 
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [errorMessage,setErrorMessage]=useState('')
  const [countries,setCountries]=useState([])
  const [states,setStates]=useState([])

  useEffect(()=>{
  setBackgroundVideo('rain')
  setCountries(Country.getAllCountries());
  console.log(Country.getAllCountries());
  },[])

  function search (e) {
    console.log(query);
    
    
      fetch(`${apiUrl}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setBackgroundVideo(`${result.weather[0].description}`);
          console.log(result);
          setQuery("");

        })
        .catch((error) => {
          setBackgroundVideo('rain')
          setErrorMessage('not found')
        });
    
  };

  const handleClick=()=>{
      search(query)
  }
  const handleChange=(e)=>{   
    let t=e.target.value
    setStates(State.getStatesOfCountry(`${t.slice(0,2)}`))
    setQuery(`${t.slice(0,2)}`)
    e.target.value=''
}

  
  return (
    <div className="bg-gray-900/40 min-h-screen p-4 xl:max-w-sm mx-auto">
    
    
      {/**Video Background */}
      
        <Background backgroundVideo={backgroundVideo}/>
     
      <div className="w-full flex justify-center">
        <div className="flex mx-3 opacity-80 shadow-lg hover:opacity-100 mt-2">
          <input
            className=" appearance-none  shadow-gray-300 px-4 py-3  w-full  rounded-xl rounded-tr-none rounded-br-none text-lg outline-none"
            placeholder="search ...(country,state or city)"
            type="text"
            onChange={(e) =>{ setQuery(e.target.value) 
              e.target.value='ssss'}}
            value={query}
            onKeyPress={(e)=>(e.key === "Enter")? search(e.target.value):''}
          />
          <button className="text-xl text-white px-2 shadow-md rounded-tr-xl rounded-br-xl bg-gray-600 hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out  items-center" type="submit" onClick={handleClick}>
            Search
        </button>
          {/**
          <button
            className=" px-4 py-3  text-white   rounded-lg "
            type="button"
            id="button-addon2"
            onClick={handleClick}
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
           */}
          </div>
          </div>
      
          {/** Drop dwon for countries  */}
     
     
          <div className='felx flex-col mt-2 space-y-4'>
          <h1 className="text-xl text-center text-white">OR</h1>
        <div id="countries" className="w-full flex justify-around">
                <label htmlFor="countries" className='text-white text-xl'>Country:</label>
            
                    <select className='w-44 ' name="countries" id="countries" onChange={handleChange}>
                    {countries.map((country)=>(
                        
                        <option key={country.name} value={country.isoCoe} >{country.isoCode} {country.name} </option>
                        ))
                    }
                    </select> 
                    
            </div>

            <div className='w-full flex justify-around '>
                <label htmlFor="states" className="text-xl text-white">State:</label>

                <select name="states" id="states" className='w-44 ml-6' onChange={(e)=>setQuery(`${e.target.value.replace(`'`,'').replace('Governorate','')},${query}`)}>
                        {states.map((state)=>(
                            
                    
                    <option key={state.name} value={state.name}>{state.name}</option>
                ))
                }
                </select> 
            </div>
      </div>






          {!weather.main && <h1 className="text-7xl text-white text-shadow mt-12">{errorMessage}</h1>}
      {typeof weather.main !== "undefinde" &&
      typeof weather.sys !== "undefined" ? (
        <div>
          <div className="mt-6 ml-3 text-white text-center">
            <h1 className="text-xl font-semibold   text-shadow">
              {weather.name},{weather.sys.country}
            </h1>
            <h2 className="font-semibold">{dateBuilder(new Date())}</h2>
          </div>

          <div className="mt-6 ml-3 space-y-4 flex flex-col justify-center items-center text-center text-white ">
            <h2 className="text-7xl text-shadow font-bold mx-8 my-auto  bg-gray-900/20 rounded-xl px-4 py-8  shadow-lg shadow-gray-700/50 ">
              {Math.floor(weather.main.temp)} C
            </h2>
            <img className="w-24 h-24 rounded-xl" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
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
