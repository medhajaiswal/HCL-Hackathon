
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {Header} from '../src/Components/header/Header';
import {SearchItems} from '../src/Components/searchSection/SearchItems';

describe('App Component', () => {
    it('Should have app div', () => {
        const appWrapper = shallow(<App/>);
        expect(appWrapper.find('.App')).toHaveLength(1);
    })

    it('Should have Header, SearchItems  components', () => {
        const appWrapper = shallow(<App/>);
        expect(appWrapper.find(Header)).toHaveLength(1);
        expect(appWrapper.find(SearchItems)).toHaveLength(1);
    })

})