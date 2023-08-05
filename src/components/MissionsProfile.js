import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missionsProfile = useSelector((state) => state.data.data);
  const joinMissions = missionsProfile.filter((mission) => mission.activeMember);
  const displayMissions = joinMissions.map((mission) => (
    <li key={mission.mission_id}>{mission.mission_name}</li>
  ));

  return (
    <div>
      <ul className="items">{displayMissions}</ul>
    </div>
  );
};

export default MissionsProfile;
