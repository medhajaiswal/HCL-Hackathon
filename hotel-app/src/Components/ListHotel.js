import React from "react";
import data from "./data";
import './style.css';
import { Button,Row,Col } from "react-bootstrap";

class ListHotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HotelName: '',
            Rating: '',
            Address: '',
            data: data
        }

    }
    render() {
        let { data } = this.state
        let {city, price, star} = this.props;

        const sidebar = (
            <ul className="hotel-image">
              {data.map((value, index) =>
                <li key={index}>
                <img src={value.img} className="hotel-logo" alt={value.HotelName}/>
                </li>
              )}
            </ul>
          );
          const content = data.map((data, index) =>
          <div key={index} className="hotel-details">
            <p>{data.HotelName}</p>
            <p>{data.Address}</p>
          </div>
        );
        return (
            <div className="Container">
                 <Row>
                         <Col> {sidebar}</Col>
                      <Col>{content}</Col>
                          <Col>
                          <Button variant="secondary" className="hotel-button" size="lg">
                        View Details
                     </Button>
                     <Button variant="secondary" size="lg">
                       Book Now
                     </Button> </Col>
                    
  </Row>
                {/* <div>
                {sidebar}
                <span> {content}</span>
                </div>
                
                <div className="">
                    <Button variant="secondary" size="lg">
                        View Details
                     </Button>
                </div> */}
            </div>
        )
    }
}
export default ListHotel;