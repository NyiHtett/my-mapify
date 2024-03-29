import './App.css';
import { useState } from 'react';
import styles from "./Search.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Footer from "./Footer/Footer";
const api = {
  key: "9e2983c82d8b54ca8900c0ad139e7db9",
  base: "https://api.openweathermap.org/data/2.5/",
}


function App() {
  
  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState("");
  const searchPressed  = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      console.log(weather);
    });
  }
  return (
    <div className="App">
      <head>
        <title>My Mapify</title>

        <meta property='og:title' content='My Mapify'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:image' content = 'weatherapp.png'></meta>
        <meta property= 'og: url' content = 'https://my-mapify.vercel.app/'></meta>
        <meta property='og:description' content = 'My mapify is a react app for telling the temperature and weather condition of a specific city all over the world'></meta>
        <meta property='og:locale' content = 'en_US'></meta>
        <meta property= 'og:site_name' content = "My mapify"></meta>
      </head>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-md">
        <h1 class=".text-primary bg-white rounded mt-10">  Mapify  </h1>
        </div>
      </nav>
      <header className="App-header">
        {/*header*/}
        <h1 style={{marginTop: "-300px", marginBottom: "50px"}}> Weather App </h1>
        
        <div
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
            <input
        type = "text"
        placeholder= "Enter a city"
        onChange={(e) => setSearch(e.target.value)}
        />
            <button
             className={`${styles.btn} btn btn-secondary fs-5`}
             onClick = {searchPressed}
            >
                Search
            </button>

        </div>
        
        {typeof weather.main != "undefined" ?
        (<div>
        <p>{weather.name}</p>
        <p>{weather.main.temp}°C</p>
        <p>{weather.weather[0].main} ({weather.weather[0].description})</p>
        </div>) : ("")}

      </header>
      <Footer/>
    </div>
  );
}

export default App;
