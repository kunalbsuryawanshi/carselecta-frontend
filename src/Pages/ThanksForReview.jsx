import { Dropdown, DropdownButton, Navbar, Image } from "react-bootstrap";
import logo from "../Images/Purple Badge Car Wash Logo1.png";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
function ThanksForReview() {
  const location = useLocation();
  const receivedValue = location.state?.value || "No value received";
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [newCar, setNewCar] = useState([]);
  useEffect(() => {
    fetchCar(receivedValue.newCarId);
  }, [receivedValue.newCarId]);
  const fetchCar = async (newCarId) => {
    try {
      const response = await axios.get(
        `http://localhost:8181/find-car-by-id?newCarId=${newCarId}`
      );
      setNewCar(response.data.newCar);
      console.log(response.data.newCar);
    } catch (error) {}
  };

  useEffect(() => {
    setUser(Cookies.get("email"));
  });

  const logOutHandler = () => {
    Cookies.remove("email");
    navigate("/");
  };
  return (
    <>
      <Navbar
        style={{ justifyContent: "space-between" }}
        className="bg-body-tertiary shadow"
      >
        <Navbar.Brand href="/home">
          <Image
            style={{
              width: "30%",
              // aspectRatio: "3/1",
              mixBlendMode: "darken",
            }}
            src={logo}
            alt=""
          />
        </Navbar.Brand>

        <DropdownButton variant="light" id="dropdown-basic-button" title={user}>
          <Dropdown.Item href="/userprofile">
            <FaUserCircle style={{ fontSize: "35px" }} />
          </Dropdown.Item>
          <Dropdown.Item href="/wishlist">Favorite</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item onClick={logOutHandler}>Log Out</Dropdown.Item>
        </DropdownButton>
      </Navbar>
      <div className="mt-5 mb-4">&nbsp;</div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 p-5">
            <h4>Thanks for your Review</h4>
            <p className="text-secondary">
              Your review for {newCar.carBrand+" "+newCar.carName} is under moderation, it will be posted
              very soon.
            </p>
            <div className="p-2 card ">
              <h5
                className="p-3 m-2 bg-light "
                style={{
                  fontFamily: "roboto,Sans-Serif,Arial",
                  fontSize: "17px",
                }}
              >
                Your overall rating: <FaStar className="mb-1" style={{ color: "orange" }} />
               {" "+receivedValue.totalRating}
              </h5>
              <div className="p-3">
                <h5 style={{ fontSize: "15px" }}>{receivedValue.reviewTitle}</h5>
                <p className="text-secondary">
                  {receivedValue.reviewDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThanksForReview;
