import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation.jsx';
import SingleNavigationItem from './Sub-Components/SingleNavigationItem.jsx';
import Search from './Sub-Components/Search.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

describe('Navigation Component', () => {
  it('contains a search bar', () => {
    expect(wrapper.find(Search)).toBeTruthy();
  });

  it('contains 4 navigation titles', () => {
    expect(wrapper.find(SingleNavigationItem)).toHaveLength(4);
  });
});
