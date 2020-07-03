import React from 'react';
import {findByTestAttr, getShallowComponent} from '../utils/index';
import MyIcon from './MyIcon';

describe('Test MyIcon Component',() => {

    let component, props;

    beforeEach(() => {
        props = {
            text: "loading data"      
        };
        component = getShallowComponent(<MyIcon {...props} />);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'MyIconComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain image element', () => {
        const wrapper = component.find('img');
        expect(wrapper.length).toBe(1);
    });

    it('Should display assigned text', () => {
        const wrapper = component.find('small');
        expect(wrapper.text()).toBe(props.text);
    });

})
