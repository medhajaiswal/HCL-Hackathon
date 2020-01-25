import React from 'react';
import {shallow} from 'enzyme';
import { SearchItems } from '../Components/searchSection/SearchItems';
import {Form} from 'react-bootstrap';

describe('SearchItems Component', () => {
    it('Should have form-data div', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find('.form-data')).toHaveLength(1);
    })

    it('Should haveform component', () => {
        const searchItemsWrapper = shallow(<SearchItems/>);
        expect(searchItemsWrapper.find(Form)).toHaveLength(1);
    })
})