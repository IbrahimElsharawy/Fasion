import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Maps = (props) => {
  const [selectedPlace, setSelectedPlace] = useState({ name: '' });

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace({ name: props.name });
  };

  const onInfoWindowClose = () => {
    setSelectedPlace({ name: '' });
  };

  return (
    <div >
      <Map
        google={props.google}
        zoom={14}
       
      >
        <Marker onClick={onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={onInfoWindowClose}>
          <div className="bg-white p-2 rounded-md shadow-md">
            <h1 className="text-lg font-semibold">{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY" 
})(Maps);
