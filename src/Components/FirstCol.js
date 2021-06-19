import React, { useEffect, useState } from "react";
import "../App.scss";
import HourlyBtn from "./HourlyBtn";

import { getAPI } from "./GetAPI";
import { CurrentTime } from "./CurrentTime";
import Searchbtn from "./Searchbtn";
import moment from "moment";

const FirstCol = ({
  data,
  setData,
  input,
  url,
  setShowModal,
  overly,
  setOverly,
  setIsLoading
}) => {
  const getData = (url) => {
    setIsLoading(true);
    getAPI(url).then((waeather) => {
      setData({
        city_name: waeather.data[0].city_name,
        time: waeather.data[0].datetime,
        date: moment(waeather.data[0].datetimee).format("ddd, MMM Do"),
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
        count: waeather.count
      });
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getData(url);
  }, []);

  useEffect(() => {
    getData(url);
  }, [Searchbtn]);

  return (
    <h1 className="col-6">
      <p></p>

      {typeof data != "undefined" ? (
        <div className="city-detail">
          <div className="city-name">
            <h4> {data.time} </h4>
            <h2> {data.city_name + "," + data.country_code} </h2>
          </div>

          <div className="temperature-detail">
            <div className="main-temperature">
              <img
                src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`}
              />
              <h2> {data.temp}&#8451; </h2>
            </div>
            <div className="feels-like">
              <h6> Feel like {data.feels_like} </h6>
              <h6> {data.clouds}. </h6>
              <h6> Light Air </h6>
            </div>
            <div className="row mt-1 detail">
              <div className="col-6">
                <ul className="ul">
                  <li className="pb-1">{data.speed}m/s NNW</li>
                  <li className="pb-1">humidity: {data.humiduty} %</li>
                  <li className="pb-1">Uv: {data.uv}</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="ul">
                  <li className="pb-1">m/s NNW</li>
                  <li className="pb-1">humidity: %</li>
                  <li className="pb-1">m/s NNW</li>
                </ul>
              </div>
            </div>
          </div>

          <HourlyBtn setShowModal={setShowModal} />
        </div>
      ) : (
        "false"
      )}
    </h1>
  );
};

export default FirstCol;
