import React, { useEffect, useState } from 'react';
import '../App.scss';
import HourlyBtn from './HourlyBtn';

import {getAPI, getDays} from './GetAPI';
import  {CurrentTime} from './CurrentTime';
import Searchbtn from './Searchbtn';


const FirstCol = ({data, setData ,input, url, setShowModal, overly, setOverly}) => {

  const [dayData, setDayData] = useState();
    
  let APIkey = 'b90d5851d1184aff9356323979e96021';
  let daysUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=Tbilisi,NC&key=b90d5851d1184aff9356323979e96021`;


  const getData = (url) => {
    getAPI(url).then(waeather => {
      setData(
        {
          city_name: waeather.data[0].city_name,
          time: waeather.data[0].datetime,
          country_code: waeather.data[0].country_code,
          temp: waeather.data[0].app_temp,
          feels_like: waeather.data[0].temp,
          icon: waeather.data[0].weather.icon,
          description: waeather.data[0].weather.description,
          clouds: waeather.data[0].clouds,
          speed: waeather.data[0].wind_spd,
          uv: waeather.data[0].uv,
          humiduty: waeather.data[0].wind_dir,
          dew_point: waeather.data[0].dewpt,
        }
      )
    })
  };

  // const getDayData = (url) => {
  //    getDays(url).then( dayWeather => {
  //      console.log(dayWeather)
  //       // setDayData(dayWeather)
  //    }) 
  // }

 useEffect( () => {
   getData(url);
}, [] );


useEffect( () => {
  getData(url)
}, [Searchbtn] );

   

return(

  <div className="col-4">

        <p>
          
        </p>

        {( typeof data != 'undefined') ? (
           
           <div className="city-detail">
           <div className="city-name">
             <h4> {data.time} </h4>
             <h2> {data.city_name + "," + data.country_code} </h2>
           </div>
     
         <div className="temperature-detail">
           <div className="main-temperature">
             <img src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`} />
             <h2> {data.temp}&#8451; </h2>
           </div>
           <div className='feels-like'>
             <h6> feel like {data.feels_like} </h6>
             <h6> {data.clouds} </h6>
             <h6> Light Air </h6>
           </div>
           <div className="row mt-1 detail">
             <div className="col-6">
               <ul className="ul">
                 <li>
                     {data.speed}m/s NNW
                 </li>
                 <li>
                   humidity: {data.humiduty} %
                 </li>
                 <li>
                    Uv: {data.uv}
                 </li>
               </ul>
             </div>
             <div className="col-6">
               <ul className="ul">
                 <li>
                    m/s NNW
                 </li>
                 <li>
                   humidity: %
                 </li>
                 <li>
                    m/s NNW
                 </li>
               </ul>
             </div>
           </div>
         </div>
     
           <HourlyBtn setShowModal={setShowModal} overly={overly} setOverly={setOverly} />
     
         </div>

        ) : 'false'}

  </div>
)

};

export default FirstCol;