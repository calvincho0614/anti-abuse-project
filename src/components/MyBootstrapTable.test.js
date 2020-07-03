import React from 'react';
import {findByTestAttr, getDeepComponent, checkProps} from '../utils/index';
import MyBootstrapTable from './MyBootstrapTable';
import {init_table_data} from '../data_store/data';

describe('Test MyBootstrapTable Component',() => {

    let component, expectedProps;

    beforeEach(() => {
        component = getDeepComponent(<MyBootstrapTable {...init_table_data} />);
        expectedProps = { ...init_table_data };
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'MyBootstrapTableComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain ToolkitProvider component', () => {
        const wrapper = component.find('ToolkitProvider');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain ToggleList component', () => {
        const wrapper = component.find('ToggleList');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain SearchBar component', () => {
        const wrapper = component.find('SearchBar');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain BootstrapTable component', () => {
        const wrapper = component.find('BootstrapTable');
        expect(wrapper.length).toBe(1);
    });

    it('Check props formate', () => {
        const propsErr = checkProps(MyBootstrapTable, expectedProps);
        expect(propsErr).toBeUndefined();
    });

})
