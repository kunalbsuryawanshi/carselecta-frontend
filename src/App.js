import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./Pages/Navigationbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/Aboutus";
import Admin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";
import UserLoginAndRegistrationForm from "./Pages/UserLogin&RegistrationForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
