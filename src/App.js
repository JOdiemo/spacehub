import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RocketContainer from './components/RocketContainer';
import MissionsContainer from './components/MissionsContainer';
import MyProfileContainer from './components/MyProfileContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketContainer />} exact />
        <Route path="/missions" element={<MissionsContainer />} exact />
        <Route path="/myprofile" element={<MyProfileContainer />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
