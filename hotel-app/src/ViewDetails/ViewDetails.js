import React from 'react';
import './ViewDetails.css';
import GoogleApiWrapper from './MapContainer'

function ViewDetails(props) {
  let imageArray = props.imageArray
  return (
      <div className="MainContianer">
            <div className="HotelNameContainer" >
                    <h1> HotelName :{props.hotelName} </h1>
            </div>
            <div className="ImageContainer">
          {
            imageArray.map(image=>{
              return  <img src={image} style={{width: 200,height:100,marginLeft:50}}/>

            })
          }
         
          </div>
          <div className="SubContainer">
              <div style={{display:"flex",flex:1,marginTop:'5%'}}>
                 <GoogleApiWrapper lat={props.lng} lng={props.lng}/>
              </div>
              <div style={{display:"flex",flex:0.5}}>
             </div>
              <div style={{height:"100%",display:"flex",flex:1,flexDirection:"column",marginTop:'5%'}}>
                  <h2>Hotel Address</h2>
                 <div style={{marginTop:"10%",width:100,height:50}}>Address :  {props.address}</div>
                 <div style={{marginTop:"5%",width:100,height:50}}>State : {props.state}</div>
                 <div style={{marginTop:"5%",width:100,height:50}}>City: {props.city}</div>
                 <div style={{marginTop:"5%",width:100,height:50}}>Pincode: {props.pincode}</div>
              </div>
          </div>
      </div>
  );
}

export default ViewDetails;
