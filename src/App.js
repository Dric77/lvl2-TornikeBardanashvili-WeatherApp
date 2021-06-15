import React, { useState } from 'react';
import './App.scss';

//import functions
import {CurrentTime} from './Components/CurrentTime';
import {WeekForecast} from './Components/WeekForecast';

//import components
import Input from './Components/Input';
import Searchbtn from './Components/Searchbtn';
import FirstCol from './Components/FirstCol';
import DaysForecast from './Components/DaysForecast';
import Modal from './Components/Modal';
import LastCol from './Components/LastCol';


function App() {      

  const [input, setInput] = useState('Tbilisi')
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState('hidden-modal');
  const [overly, setOverly] = useState('');

  let url = `https://api.weatherbit.io/v2.0/current?city=${input}i&key=b90d5851d1184aff9356323979e96021&include=minutely`;

  let hideModalOverly = () => {
        setShowModal('hidden-modal');
        setOverly('hidden-modal')
  }

  return (
    <div className="App">

    <div className={overly} onClick={hideModalOverly}></div>

      <header>
        <Input input={input} setInput={setInput} />
        <Searchbtn url={url} setData={setData} />
      </header>

      <Modal showModal={showModal} setShowModal={setShowModal} overly={overly} setOverly={setOverly} />

      <div className="row" >
        
        <FirstCol
          input={input}
          data={data} setData={setData}
          url={url}
          setShowModal={setShowModal}
          overly={overly}
          setOverly={setOverly}
        />


        <DaysForecast />

      <LastCol />

      </div>
    </div>
  );
}

export default App;
