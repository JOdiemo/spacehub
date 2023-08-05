import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import MyProfileContainer from '../MyProfileContainer';

describe('Porfile component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <MyProfileContainer />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
