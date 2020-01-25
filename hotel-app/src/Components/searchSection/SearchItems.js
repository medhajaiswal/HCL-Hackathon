import React from 'react';
import {Form, Button} from 'react-bootstrap';
import * as constant from '../../helper/constant'

export const SearchItems = () => {
    return (
        <Form>
            <Form.Group controlId="search-field">
                <Form.Control type="text" placeholder={constant.SEARCH_PLACEHOLDER} />
            </Form.Group>
            <Form.Group controlId="star-filter">
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
            <Form.Group controlId="price-filter">
                <Form.Label>{constant.PRICE_RANGE}</Form.Label>
                <Form.Control type="range" min="500" max="10000"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                {constant.SEARCH}
            </Button>
        </Form>
    )

}