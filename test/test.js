import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../client/src/components/App.jsx';
import Photos from '../client/src/components/Photos.jsx';
import {shallow} from 'enzyme';

describe('Gallery Component', () => {
    it('should contain no photos until grabbing photos from database', () => {
        const wrapper = shallow(<Gallery />);
        const photoAmount = wrapper.state().photos;
        expect(photoAmount).toEqual([]);
    })
})