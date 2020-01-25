import React from 'react';
import PersonalDetailPage from "../src/PersonalDetailPage";
import Details from "./Details";
import logo from './logo.svg';
import './App.css';
import img from './image.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <img src={img} style={{width:80, height:50}} alt="Cinque Terre"></img>
      <label>BookYourStay.com</label> 
      <div style={{marginLeft:300}}>

        <Details ></Details>
        <PersonalDetailPage></PersonalDetailPage>
        <p>
        </p>
      </div>
      </div>
    );
  }
}

export default App;
