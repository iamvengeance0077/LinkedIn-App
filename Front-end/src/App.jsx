import { Route, Routes } from "react-router-dom";
import Network from "./pages/Network";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPage from "./pages/ForgotPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />}>
        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpass" element={<ForgotPage/>}/>
    </Routes>
  );
}

export default App;
