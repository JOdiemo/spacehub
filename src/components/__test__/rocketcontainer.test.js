import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import RocketContainer from '../RocketContainer';

describe('Navbar component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <RocketContainer />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
