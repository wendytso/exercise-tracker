import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./main/MainPage";
import LoginPage from "./login/LoginPage";
import LeaderboardPage from "./main/LeaderboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
