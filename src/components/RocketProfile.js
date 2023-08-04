import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketProfile = useSelector((state) => state.rockets);
  console.log(rocketProfile);
  const reservedRockets = rocketProfile.filter((rocket) => rocket.reserved);
  const displayRockets = reservedRockets.map((rocket) => (
    <li key={rocket.id}>{rocket.name}</li>
  ));

  return (
    <div>
      <ul className="items">{displayRockets}</ul>
    </div>
  );
};

export default RocketProfile;
