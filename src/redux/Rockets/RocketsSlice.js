import axios from 'axios';

const ROCKETS_API = 'https://api.spacexdata.com/v4/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const GET_RESERVATION = 'GET_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = [];

export const reserveRocket = (id) => ({
  type: GET_RESERVATION,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const rocketsFetch = (data) => {
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
};

export const getRockets = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: ROCKETS_API,
    responseType: 'json',
  }).then((res) => {
    dispatch(rocketsFetch(res.data));
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case GET_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
