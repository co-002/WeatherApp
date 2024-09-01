import React from 'react'
import './WeatherApp.css'
import search from '../Assets/search.png'
import clear from '../Assets/clear.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import cloud from '../Assets/cloud.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'

function WeatherApp() {

  let api = "7d111f0d72179657d59f2d8fe30bbca2";

  const search = () => {
    const element = document.getElementsByClassName('cityInput')
    if(element[0].value === ""){
      return 0
    }
  }

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='Search'/>
          <div className="search-icon">
            <img src={search} alt=""/>
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud} alt="img"/>
        </div>
        <div className="weather-temp" style={{'color': 'white'}}>24deg c</div>
        <div className="weather-location" style={{'color': 'white'}}>London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity} alt="" className='icon'/>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} alt="" className='icon'/>
            <div className="data">
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherApp
