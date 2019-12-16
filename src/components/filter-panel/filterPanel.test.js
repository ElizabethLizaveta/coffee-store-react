import React from 'react'; 
import FilterPanel from './filterPanel';
import renderer from 'react-test-renderer'; 

describe('Testing <FilterPanel/>', () => {
it('FilterPanel have rendered correctly', () => {
    const char = renderer.create(<FilterPanel/>).toJSON();
    expect(char).toMatchSnapshot();
}); 
});