import MainPage from "./pages/main/MainPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsPage from "./pages/settings/SettingsPage";
import GamePage from "./pages/game/GamePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={MainPage}/>
      <Route exact path="/settings" Component={SettingsPage}/>
      <Route exact path="/game" Component={GamePage}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default App;
