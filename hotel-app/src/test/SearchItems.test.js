import React from 'react';
import {shallow} from 'enzyme';
import { SearchItems } from '../Components/searchSection/SearchItems';
import {Form} from 'react-bootstrap';
import * as constant from '../../src/helper/constant';

describe('SearchItems Component', () => {
    it('Should have form-data div', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find('.form-data')).toHaveLength(1);
    })

    it('Should have form component', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
    })

    it('Should have form group with search-field controlId', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
        const searchWrapper = searchItemsWrapper.find(Form).props().children[0].props;
        expect(searchWrapper.controlId).toBe('search-field');
        expect(searchWrapper.children.props.type).toBe('text');
        expect(searchWrapper.children.props.placeholder).toBe(constant.SEARCH_PLACEHOLDER);
        expect(searchWrapper.children.props.required).toBe(true);
    })

    it('Should have form group with star-filter controlId', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
        const starWrapper = searchItemsWrapper.find(Form).props().children[1].props.children[0].props;
        expect(starWrapper.controlId).toBe('star-filter');
    })

    it('Should have form group with price-filter controlId', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
        const priceWrapper = searchItemsWrapper.find(Form).props().children[1].props.children[1].props;
        expect(priceWrapper.controlId).toBe('price-filter');
    })

    it('Should have button with text search', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
        const buttonWrapper = searchItemsWrapper.find(Form).props().children[2];
        expect(buttonWrapper.props.type).toBe('submit');
        expect(buttonWrapper.props.children).toBe(constant.SEARCH);
    })
})