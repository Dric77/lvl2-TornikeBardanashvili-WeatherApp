import React from 'react';
import {dayesData} from './GetAPI';

function LastCol() {
    return (
        <div className="col-3">
          <ul className="ul mt-3">
              <ul className="last-li"></ul>
              {dayesData.map( (daye, index) => (
                  <li key={index} className="last-li">
                      <div>
                          <img src={`https://www.weatherbit.io/static/img/icons/${daye.icon}.png`} />
                          <h5> {daye.temp}&#8451; </h5>
                      </div>
                      <div> {daye.clouds} </div>
                  </li>
              ) )}
          </ul>
        </div>
    )
}

export default LastCol;
