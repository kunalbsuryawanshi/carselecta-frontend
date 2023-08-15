import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Navigationbar from "./Pages/Navigationbar";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
       
      </Routes>
        <Navigationbar />
        <HomePage/>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
