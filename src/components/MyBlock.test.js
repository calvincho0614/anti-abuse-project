import React from 'react';
import {findByTestAttr, getShallowComponent} from '../utils/index';
import MyBlock from './MyBlock';
import MyIcon from './MyIcon';

describe('Test MyBlock Component',() => {

    let component, props;

    beforeEach(() => {
        props = {
            title: "Icon",
            backgroundColor: "white",
            render: () => <MyIcon />        
        };
        component = getShallowComponent(<MyBlock {...props} />);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'MyBlockComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain center element', () => {
        const wrapper = component.find('center');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain MyIcon component', () => {
        const wrapper = component.find('MyIcon');
        expect(wrapper.length).toBe(1);
    });

    it('Check backgrondColor property', () => {
        const wrapper = findByTestAttr(component, 'MyBlockComponent');
        expect(wrapper.get(0).props.style.backgroundColor).toBe(props.backgroundColor);
    });

    it('Should display assigned text', () => {
        const wrapper = component.find('h1');
        expect(wrapper.text()).toBe(props.title);
    });
  
})
