import React, {Component}  from 'react';
import {Header} from './Components/header/Header';
import { SearchItems } from './Components/searchSection/SearchItems';
import ListHotel from './Components/ListHotel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      price: "",
      star: "All"
    }
    this.getHotelList = this.getHotelList.bind(this);
  }

  getHotelList(city, price, star) {
    this.setState({city: city, price:price, star:star});
  }

  render() {
    let {city, price, star} = this.state;
    return (
      <div className="App">
         <Header/>
         <SearchItems getHotelList={this.getHotelList}/>
         {
           city !== "" && price !== "" && star !== "" 
           ? <ListHotel /> 
           : ""
         }
      </div>
    );
  }
}

export default App;
