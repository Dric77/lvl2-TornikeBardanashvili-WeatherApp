import React, { useEffect, useState } from "react";
import { fetchData } from "../itunes/Fetch";

function List({ query, loadHandler }) {
  const [data, setData] = useState([]);

  let url = `https://itunes.apple.com/search?term=${query}`;

  let playHandler = (e) => {
    console.log(e);
  };

  let getData = (url) => {
    loadHandler(true);
    console.log(data);
    fetchData(url)
      .then((data) => {
        setData(
          data.results.map((track) => ({
            track_name: track.trackName,
            artist_name: track.artistName,
            trackViewUrl: track.previewUrl,
            img: track.artworkUrl100,
            play: false
          }))
        );
      })
      .catch((error) => console.log(error));
    loadHandler(false);
  };

  useEffect(() => {
    getData(url);
  }, []);

  useEffect(() => {
    getData(url);
  }, [query]);

  return (
    <div className="track-container">
      {data.length != 0 ? (
        <ul className="tracks-list">
          {typeof data != "undefinded"
            ? data.map((e, index) => (
                <li key={index}>
                  <img src={e.img} />
                  <div>
                    <h4>{e.track_name}</h4>
                    <h6>{e.artist_name}</h6>
                  </div>
                  <div>
                    <audio controls>
                      <source onClick={playHandler} src={e.trackViewUrl} />
                    </audio>
                  </div>
                </li>
              ))
            : false}
        </ul>
      ) : (
        <h2 className="no-result">No Results</h2>
      )}
    </div>
  );
}

export default List;
