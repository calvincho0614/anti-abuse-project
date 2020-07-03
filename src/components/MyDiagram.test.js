import React from 'react';
import {findByTestAttr, getShallowComponent, checkProps} from '../utils/index';
import MyDiagram from './MyDiagram';
import {init_diagram_data} from '../data_store/data';

describe('Test MyDiagram Component',() => {

    let component, expectedProps;

    beforeEach(() => {
        component = getShallowComponent(<MyDiagram {...init_diagram_data} />);
        expectedProps = { ...init_diagram_data };
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'MyDiagramComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain Line component', () => {
        const wrapper = component.find('Line');
        expect(wrapper.length).toBe(1);
    });
  
    it('Check props formate', () => {
        const propsErr = checkProps(MyDiagram, expectedProps);
        expect(propsErr).toBeUndefined();
    });

})
