import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionsContainer from '../MissionsContainer';

// Mock the fetchData function
jest.mock('../../redux/Missions/MissionsSlice', () => ({
  fetchData: jest.fn(),
  joinMissions: jest.fn(),
  leaveMission: jest.fn(),
}));

describe('MissionsContainer', () => {
  const mockStore = configureStore([]);
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      data: {
        data: [
          {
            mission_id: 1, mission_name: 'Mission 1', description: 'Description 1', activeMember: true,
          },
          {
            mission_id: 2, mission_name: 'Mission 2', description: 'Description 2', activeMember: false,
          },
        ],
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
