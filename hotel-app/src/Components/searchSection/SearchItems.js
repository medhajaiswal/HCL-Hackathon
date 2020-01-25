import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import * as constant from '../../helper/constant'
import '../../StyleSheet/searchItems.css';

export const SearchItems = ({getHotelList}) => {
    const [city, onCityChange] = useState("");
    const [price, onPriceChange] = useState("500");
    const [star, onStarChange] = useState("All");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(city !== "") {
            getHotelList(city, price, star);
        }
      };

      const handleSearchField = (event) => {
        onCityChange(event.target.value);
      }

      const handlePriceField = (event) => {
        onPriceChange(event.target.value);
      }

      const handleStarField = (event) => {
        onStarChange(event.target.value);
      }

    return (
        <div className="form-data">
            <Form>
                <Form.Group controlId="search-field">
                    <Form.Control type="text" placeholder={constant.SEARCH_PLACEHOLDER} required
                     onChange={(event) => handleSearchField(event)} value={city}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group controlId="star-filter" as={Col}>
                        <Form.Label>{constant.STARS}</Form.Label>
                        <Form.Control as="select" 
                        onChange={(event) => handleStarField(event)}>
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="price-filter" as={Col}>
                        <Form.Label>{constant.PRICE_RANGE}</Form.Label>
                        <Form.Control type="range" min="500" max="10000"  value={price} 
                        onChange={(event) => handlePriceField(event)}/>
                        <span id="output">{price}</span>
                    </Form.Group>
                </Form.Row>
                
                <Button variant="primary" type="submit" className="search" onClick={(event) => handleSubmit(event)}>
                    {constant.SEARCH}
                </Button>
            </Form>
        </div>
    )

    
}

