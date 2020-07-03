
import { shallow, mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}

export const getShallowComponent = (component) => {
    return shallow(component);
}

export const getDeepComponent = (component) => {
    return mount(component);
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}