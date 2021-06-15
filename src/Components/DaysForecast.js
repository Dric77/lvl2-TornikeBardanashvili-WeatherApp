import React, { useState } from 'react';
import '../App.scss';
import { dayesData } from './GetAPI';

const DaysForecast = () => {
  
  const [dayData, setDayData] = useState([]);

  let APIkey = 'b90d5851d1184aff9356323979e96021';
  let daysUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC,NC&key=b90d5851d1184aff9356323979e96021`;






  // const getDayData = (url) => {
  //    getDays(url).then( dayWeather => {
  //      console.log(dayWeather)
  //       // setDayData(dayWeather)
  //    }) 
  // };

  

    return (
        <div className="col-3 day-forecast">
          <div >
          <h2>8 Day Forecast</h2>
           <ul className="ul">
             {
               dayesData.map((daye, index) => (
                 <li key={index} className="day-item">
                    <div>
                      <h6>{daye.daye},</h6>
                      <h6>{daye.month + ' ' + daye.number}</h6>
                    </div>
                 </li>
               ))
             }
           </ul>
        </div>
        </div>
    )
}

export default DaysForecast
