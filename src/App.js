import MainPage from "./pages/main/MainPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsPage from "./pages/settings/SettingsPage";
import GamePage from "./pages/game/GamePage";
import Rules from "./pages/rules/rules";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={MainPage}/>
      <Route exact path="/settings" Component={SettingsPage}/>
      <Route exact path="/game" Component={GamePage}/>
      <Route exact path="/rules" Component={Rules}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default App;
