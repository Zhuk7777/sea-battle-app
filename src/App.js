import MainPage from "./pages/main/MainPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsPage from "./pages/settings/SettingsPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={MainPage}/>
      <Route exact path="/settings" Component={SettingsPage}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default App;
