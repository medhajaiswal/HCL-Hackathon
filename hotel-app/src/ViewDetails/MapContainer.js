import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height:"60%",
  display:"flex",
  flex:1
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},         
    selectedPlace: {}   
  };
 


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}

      >
       <Marker position={{ lat:  this.props.lat, lng:  this.props.lng}} />
   </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7eRwKL-3yZFcxanwLH3Gw5b1aRo0A6kQ'
})(MapContainer);
