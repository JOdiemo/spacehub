import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/Rockets/RocketsSlice';

function RocketPopulate(props) {
  const rocket = props;
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const cancel = () => {
    dispatch(cancelReservation(rocket.id));
  };

  return (
    <div className="container">
      <img className="image" src={rocket.flickr_images} alt="Rocket" />
      <div className="cards">
        <h1 className="title">{rocket.name}</h1>
        <p className="description">
          {rocket.reserved && (<span className="reserved">Reserved</span>)}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button type="button" onClick={cancel} className="cancel-btn">
            Cancel Reservation
          </button>
        ) : (
          <button type="button" onClick={reserve} className="reserve-btn">
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

export default RocketPopulate;
