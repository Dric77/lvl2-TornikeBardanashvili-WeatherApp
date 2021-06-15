import React from 'react';
import { getAPI } from './GetAPI';

const Searchbtn = ({setData, url}) => {

    let handleClick = () => {
        console.log('clicked search')
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
    }

    return(
        <button className="search-btn" onClick={handleClick}>
            Search
        </button>
    )
};

export default Searchbtn;