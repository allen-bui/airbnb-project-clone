import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery.jsx';
import Photo from './Sub-Components/Photo.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Gallery />);
  // wrapper.set
});

describe('Gallery', () => {
  it('should load 8 photo components', () => {
    expect(wrapper.find(Photo)).toHaveLength(8);
  })
})