import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, joinMissions, leaveMission } from '../redux/Missions/MissionsSlice';

const MissionsContainer = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Mission Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.activeMember && <div className="tag">Active Member</div>}
                {!mission.activeMember && <div className="not-member">Not a Member</div>}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => (mission.activeMember ? dispatch(leaveMission(mission.mission_id))
                    : dispatch(joinMissions(mission.mission_id)))}
                >
                  {mission.activeMember && <button type="button" className="leave">Leave Mission</button>}
                  {!mission.activeMember && <button type="button" className="join">Join Mission</button>}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsContainer;
