import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../NavBar';

describe('Navbar component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>);
    expect(tree).toMatchSnapshot();
  });
});