import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navigationbar from "./Pages/Navigationbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/Aboutus";
import Admin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminUpdateCar from "./Pages/AdminUpdateCar";
import UpdateCarByAdmin from "./Pages/UpdateCarByAdmin";
import AddCarByAdmin from "./Pages/AddCarByAdmin";
import RemoveCarByAdmin from "./Pages/RemoveCarByAdmin";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import WishList from "./Pages/WishList";
import UserProfile from "./Pages/UserProfile";
import FindCarUnderBudget from "./Pages/FindCarUnderBudget";
import CarPreview from "./Pages/CarPreview";
import CarPreviewPrice from "./Pages/CarPreviewPrice";
import UserReviews from "./Pages/UserReviews";
import WriteReview from "./Pages/WriteReview";
import ThanksForReview from "./Pages/ThanksForReview";
import Bot from "./Pages/Bot";
import { SessionProvider } from "./AuthContext/AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addcarbyadmin" element={<AddCarByAdmin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminupdatecar" element={<AdminUpdateCar />} />
          <Route path="/updatecarbyadmin" element={<UpdateCarByAdmin />} />
          <Route path="/removecarbyadmin" element={<RemoveCarByAdmin />} />
          <Route path="/usersignup" element={<UserSignup />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/findcarunderbudget" element={<FindCarUnderBudget />} />
          <Route path="/carpreview" element={<CarPreview />} />
          <Route path="/carpreviewprice" element={<CarPreviewPrice />} />
          <Route path="/userreviews" element={<UserReviews />} />
          <Route path="/writereview" element={<WriteReview />} />
          <Route path="/thanksforreview" element={<ThanksForReview />} />
          <Route path="/thanksforreview" element={<Bot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
