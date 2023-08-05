import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/Rockets/RocketsSlice';
import RocketPopulate from './RocketPopulate';
import './rockets.css';

function RocketContainer() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <div className="rocketItems">
      {rockets.map((rocket) => (
        <RocketPopulate
          key={rocket.id}
          id={rocket.id}
          reserved={rocket?.reserved}
          flickr_images={rocket.flickr_images[0]}
          name={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default RocketContainer;
