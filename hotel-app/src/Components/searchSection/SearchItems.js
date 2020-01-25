import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import * as constant from '../../helper/constant'
import '../../StyleSheet/searchItems.css';

export const SearchItems = () => {
    return (
        <div className="form-data">
            <Form>
                <Form.Group controlId="search-field">
                    <Form.Control type="text" placeholder={constant.SEARCH_PLACEHOLDER} />
                </Form.Group>
                <Form.Row>
                    <Form.Group controlId="star-filter" as={Col}>
                        <Form.Label>{constant.STARS}</Form.Label>
                        <Form.Control as="select">
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
                        <Form.Control type="range" min="500" max="10000"/>
                    </Form.Group>
                </Form.Row>
                
                <Button variant="primary" type="submit" className="search">
                    {constant.SEARCH}
                </Button>
            </Form>
        </div>
    )

}