import React, { children, useEffect, useState } from "react";
import "./App.scss";

//import functions
import { CurrentTime } from "./Components/CurrentTime";
import { APIkey } from "./API_Key";

//import components
import Input from "./Components/Input";
import Searchbtn from "./Components/Searchbtn";
import FirstCol from "./Components/FirstCol";
import DaysForecast from "./Components/DaysForecast";
import Modal from "./Components/Modal";
import Loader from "./Components/Loader";
import CancelBtn from "./Components/CancelBtn";
import { getAPI } from "./Components/GetAPI";
import moment from "moment";
import HourlyBtn from "./Components/HourlyBtn";
import GetUserLocation from "./Components/GetUserLocation";

function App() {
  const [input, setInput] = useState("Tbilisi");
  const [data, setData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [showModal, setShowModal] = useState("overly");
  const [isLoading, setIsLoading] = useState(true);
  const [cordinates, setCordinates] = useState({});

  console.log(cordinates);

  let url = `https://api.weatherbit.io/v2.0/current?city=${input}&key=${APIkey}&include=minutely`;
  let hourlyURL = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${input}&key=${APIkey}&hours=9`;

  const getHourly = (url) => {
    getAPI(url).then((hourlyData) => {
      setHourlyData(
        hourlyData
          ? hourlyData.data.map((hourly) => ({
              time: moment(hourly.timestamp_local).format(" hA"),
              date: moment(hourly.timestamp_local).format(
                "dddd, MMMM Do YYYY, h:mm:ss a"
              ),
              icon: hourly.weather.icon,
              clouds: hourly.weather.description,
              temp: hourly.temp
            }))
          : null
      );
    });
  };
  useEffect(() => {
    getHourly(hourlyURL);
  }, []);

  useEffect(() => {
    getHourly(hourlyURL);
  }, [Searchbtn]);

  setTimeout(() => {
    if (typeof data != "undefined") {
      if (data.count) return <h1>Error</h1>;
    }
  }, 500);

  return (
    <div className="App">
      <Modal data={data} showModal={showModal} setShowModal={setShowModal}>
        <ul>
          {typeof hourlyData != "undefined"
            ? hourlyData.map((data, index) => (
                <li key={index}>
                  <h6> {data.time} </h6>
                  <div>
                    <img
                      src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`}
                    />
                    <h6> {data.temp} &#8451;</h6>
                  </div>
                  <p> {data.clouds} </p>
                </li>
              ))
            : null}
        </ul>
      </Modal>

      <Loader>
        <header>
          <Input input={input} setInput={setInput} />
          <Searchbtn url={url} setData={setData} />
        </header>

        <div className="row">
          <FirstCol
            input={input}
            data={data}
            setData={setData}
            url={url}
            setShowModal={setShowModal}
            setIsLoading={setIsLoading}
          />

          <DaysForecast input={input} />
        </div>
      </Loader>

      <GetUserLocation setCordinates={setCordinates} />
    </div>
  );
}

export default App;
