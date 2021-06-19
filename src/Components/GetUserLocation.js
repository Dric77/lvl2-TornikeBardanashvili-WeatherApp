import React, { useEffect, useState } from "react";

function GetUserLocation({ setCordinates }) {
  const [location, setLocation] = useState({
    loaded: false,
    cordinates: { lat: "", lng: "" }
  });

  const onSucces = (location) => {
    setLocation({
      loaded: true,
      cordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    });
    setCordinates({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error
    });
  };

  useEffect(() => {
    if (!("geoLocation" in navigator)) {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: "Location not supported"
        }
      }));
    }
    navigator.geolocation.getCurrentPosition(onSucces, onError);
  }, []);

  return (
    <div>
      location test
      {location.loaded
        ? JSON.stringify(location)
        : "Location not supported yet"}
    </div>
  );
}

export default GetUserLocation;
