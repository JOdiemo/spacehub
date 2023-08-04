import RocketProfile from './RocketProfile';

const MyProfileContainer = () => (
  <div className="prof-container">
    <div className="rocketprofile">
      <h3 className="profile-title">My Rockets</h3>
      <RocketProfile />
    </div>
    <div className="missionprofile">
      <h3 className="profile-title">My Missions</h3>
      <RocketProfile />
    </div>
  </div>
);
export default MyProfileContainer;
