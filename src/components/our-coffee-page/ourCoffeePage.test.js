import React from 'react'; 
import OurCoffeePage from './ourCofeePage';
import {shallow} from 'enzyme';


describe('Testing <OurCoffeePage/>', () => {
it('FilterPanel have rendered correctly', () => {
    const char = shallow(<OurCoffeePage/>);
    expect(char).toMatchSnapshot();
})
});