import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./Pages/Navigationbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/Aboutus";
import Admin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminUpdateCar from "./Pages/AdminUpdateCar";
import UserLoginAndRegistrationForm from "./Pages/UserLogin&RegistrationForm";
import UpdateCarByAdmin from "./Pages/UpdateCarByAdmin";
import AddCarByAdmin from "./Pages/AddCarByAdmin";
import RemoveCarByAdmin from "./Pages/RemoveCarByAdmin";
import RemoveCar from "./Pages/RemoveCar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addcarbyadmin" element={<AddCarByAdmin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminupdatecar" element={<AdminUpdateCar />} />
          <Route path="/updatecarbyadmin" element={<UpdateCarByAdmin />} />
          <Route path="/removecarbyadmin" element={<RemoveCarByAdmin />} />
          <Route path="/removecar" element={<RemoveCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
