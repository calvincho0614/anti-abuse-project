import React from 'react';
import {findByTestAttr, getShallowComponent} from '../utils/index';
import App from './App';

describe('Test App Component',() => {

    let component;
    
    beforeEach(() => {
        component = getShallowComponent(<App />);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'AppComponent');
        expect(wrapper.length).toBe(1);
    });
    
})
