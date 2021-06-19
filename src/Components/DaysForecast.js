import React, { useEffect, useState } from "react";
import moment from "moment";
import { APIkey } from "../API_Key";
import "../App.scss";
import { getDays } from "./GetAPI";
import Searchbtn from "./Searchbtn";

const DaysForecast = ({ input }) => {
  const [dayData, setDayData] = useState([]);

  let daysUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&key=${APIkey}`;

  let getDayData = (url) => {
    getDays(url).then((dayWeather) => {
      setDayData(
        dayWeather.data.map((data, index) => ({
          date: moment(data.datetime).format("ddd, MMM Do"),
          icon: data.weather.icon,
          clouds: data.weather.description,
          temp: data.app_max_temp
        }))
      );
    });
  };

  useEffect(() => {
    getDayData(daysUrl);
  }, []);

  useEffect(() => {
    getDayData(daysUrl);
  }, [Searchbtn]);

  return (
    <div className="col-3 day-forecast">
      <div>
        <h2>8 Day Forecast</h2>
        <ul className="ul mt-1">
          {dayData.map((day, index) =>
            index >= 8 ? (
              <li key={index} className="day-item">
                <div className="row">
                  <h6 className="col-4">{day.date}</h6>
                  <div className="col-8 day-detail">
                    <div className="temp-detail">
                      <img
                        src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
                      />
                      <h5> {day.temp}&#8451; </h5>
                    </div>
                    <p> {day.clouds} </p>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default DaysForecast;
