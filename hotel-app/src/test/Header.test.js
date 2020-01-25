import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../Components/header/Header';
import * as constant from '../../src/helper/constant';

describe('Header Component', () => {
    it('Should have header div', () => {
        const headerWrapper = shallow(<Header/>);
        expect(headerWrapper.find('.header')).toHaveLength(1);
        expect(headerWrapper.find('.header-text')).toHaveLength(1);
    })

    it('Should have header-text div with Ignite India label', () => {
        const headerWrapper = shallow(<Header/>);
        expect(headerWrapper.find('.header-text')).toHaveLength(1);
        expect(headerWrapper.find('.header-text').text()).toBe(constant.HEADER_TEXT);
    })

})