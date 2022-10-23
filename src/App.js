import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './components/mainpage/mainpage';
// import TeamvsTeam from './components/teamvsteam/teamvsteam';
import Performance from './components/trial/trail';
import TeamVTeam from './components/trail2/trail2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/teamvsteam" element={<TeamVTeam />} />
          <Route path='/team' element={<Performance/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
