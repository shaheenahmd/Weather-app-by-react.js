import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState} from 'react';


function App() {

  const[data,setData]=useState({});
  const[location,setLocation]=useState('');

  const Url= `https://api.openweathermap.org/data/2.5/weather?q=${location},city,india, &units=metric&appid=6b3f71155061c0c5b5389d88d4ebb141`

  const searchLocation = (event)=>{

    if (event.key==='Enter'){
      axios.get(Url).then((response)=>{
        setData(response.data);
        console.log(response.data);
      })
      setLocation('')
    }
    
  }



  return (
    <div className="App">
      <div className="head">
        <h4 >WEATHER APP</h4>
      </div>
      <div className="container">
        <div className="search-box">
        <input value={location} 
        onChange={event=> setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='Enter the Location'
        type="text"  />
        </div>
        <div className="top">
          <div className="location">
              <h2>{data.name}</h2>
            </div>
            <div className="temp">
              {data.main? <h3>{data.main.temp} &#176;C</h3> :null}
            </div>
            <div className="description">
            {data.weather? <h6>{data.weather[0].main}</h6> :null}
              
          </div>
        </div>

{data.name != undefined && 
        <div className="bottom">
          <div className="feels">
          {data.main? <h6>{data.main.feels_like} &#176;F</h6> :null}
            
            <br />
            <h5>Feels Like</h5>
          </div>
          <div className="humdity">
          {data.main? <h6>{data.main.humidity}%</h6> :null}
            <br />
            <h5>Humidity</h5>
          </div>

          <div className="wind">
          {data.wind? <h6>{data.wind.speed} MPH</h6> :null}
            <br />
            <h5>Wind Speed</h5>
          </div>
         
        </div>
 }
      </div>
    </div>
  );
}

export default App;
