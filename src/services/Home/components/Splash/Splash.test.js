import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash.jsx';
import Image from './Sub-Components/Image.jsx';
import TourHomeButton from './Sub-Components/TourHomeButton.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Splash />);
});

describe('Splash Component', () => {
  it('contains an image', () => {
    expect(wrapper.find(Image)).toBeTruthy();
  });

  it('contains a button to tour home', () => {
    expect(wrapper.find(TourHomeButton)).toBeTruthy();
  });
});
