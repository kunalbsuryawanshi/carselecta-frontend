import Navigationbar from "./Navigationbar";
import card from "../Images/card2.webp";
import {
  FaHeart,
  FaPen,
  FaPenAlt,
  FaPenFancy,
  FaRegHeart,
  FaStar,
  FaTag,
  FaTags,
} from "react-icons/fa";
import {
  Button,
  Card,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import AlertPopup from "./AlertPopup";

const Star = ({ selected, onClick }) => {
  return (
    <FaStar
      color={selected ? "#ffa236" : "#e9e9e9"}
      onClick={onClick}
      style={{ cursor: "pointer", marginRight: "5px" }}
    />
  );
};

function CarPreview() {
  const location = useLocation();
  const receivedValue = location.state?.value || "No value received";
  const [newCar, setNewCar] = useState([]);
  const [carPricing, setCarPricing] = useState([]);
  const [userLocation, setUserLocation] = useState("");
  const [mileageDescription, setMileageDescription] = useState("");
  const [carNameForImages, setCarNameForImages] = useState("");
  const [images, setImages] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlertForAddToFavorite, setShowAlertForAddToFavorite] =
    useState(false);
  const [showAlertForRemoveFromFavorite, setShowAlertForRemoveFromFavorite] =
    useState(false);
  useEffect(() => {
    fetchCarData(receivedValue);
  }, [receivedValue]);
  const email = Cookies.get("email");

  const fetchCarData = async (param) => {
    try {
      const response = await axios.get(
        `http://localhost:8181/find-car-by-id?newCarId=${param}`
      );
      setNewCar(response.data.newCar);
      setCarPricing(response.data.carPricing);
      setCarNameForImages(response.data.newCar.carName);

      console.log(response.data);
      setMileageDescription(
        `This ${response.data.newCar.carBrand} ${response.data.newCar.carName} offers impressive mileage figures. With an ARAI-certified mileage of ${response.data.newCar.araimileage}, it provides a balance between city and highway driving. In city conditions, you can expect to achieve around ${response.data.newCar.cityMileage}, while on the highway, the mileage goes up to ${response.data.newCar.highwayMileage}`
      );

      const user = await axios.get(
        `http://localhost:8181/get-user-details?email=${email}`
      );
      userDetails(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   For images
  useEffect(() => {
    fetchCarImages(carNameForImages);
  }, [carNameForImages]);

  const fetchCarImages = async (carName) => {
    const img = await axios.get(
      `http://localhost:8181/get-car-images?carName=${carNameForImages}`
    );
    setImages(img.data);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const checkIsFavorite = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8181/is-car-favorite?email=${email}&newCarId=${newCar.newCarId}`
      );
      console.log(response.data);
      if (response.data === 200 && !isFavorite) {
        setIsFavorite(true);
        console.log(isFavorite);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userDetails = (userObject) => setUserLocation(userObject.city);

  //   to formatte price and put (,) in between
  const formatPrice = (price) => {
    if (newCar && newCar.carPrice) {
      return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        //   maximumFractionDigits: 2,
      });
    }
  };

  //   Add to wishList
  const addToFavorite = async (newCarId) => {
    setIsFavorite(true);
    try {
      await axios.get(
        `http://localhost:8181/add-to-favorite?email=${email}&newCarId=${newCarId}`
      );

      setIsFavorite(true);
      setShowAlertForAddToFavorite(true);
      setTimeout(() => {
        setShowAlertForAddToFavorite(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromFavorite = async (newCarId) => {
    try {
      await axios.get(
        `http://localhost:8181/delete-from-favorite?newCarId=${newCarId}&email=${email}`
      );

      setIsFavorite(false);
      setShowAlertForRemoveFromFavorite(true);
      setTimeout(() => {
        setShowAlertForRemoveFromFavorite(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  //   for showing description for car on hovering on carName
  const renderTooltip = (description, name) => (
    <Popover id="popover-basic" className="w-100">
      <Popover.Header as="h3" className="text-center text-info">
        {name}
      </Popover.Header>
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );

  //   Rating
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          selected={i <= rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };
  return (
    <>
      <Navigationbar />
      <div
        style={{ backgroundColor: "#fafafa" }}
        className="p-5 mb-0 p-0 d-flex justify-content-center"
      >
        <div className="loader d-flex justify-content-center"></div>
      </div>
      <div style={{ backgroundColor: "#fafafa" }} className="m-0 p-0">
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className="container-fluid mb-1"
        >
          <Navbar style={{ backgroundColor: "#FFFFFF" }}>
            <Nav className="d-flex justify-content-center w-100">
              <Nav.Link href="#">{newCar.carName}</Nav.Link>
              <Nav.Link
                as={Link}
                state={{ value: newCar.newCarId }}
                to="/carpreviewprice"
              >
                Price
              </Nav.Link>
              <Nav.Link href="#pricing">Images</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className="container-fluid  shadow-sm "
        >
          <div className="row m-4  p-5">
            <div className="col-sm-12 col-md-5 ">
              <img
                style={{ width: "30rem" }}
                src={`data:image/jpeg;base64,${newCar.carImage}`}
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <div
                style={{ justifyContent: "space-between" }}
                className="d-flex  "
              >
                <OverlayTrigger
                  placement="bottom-start"
                  delay={{ show: 250, hide: 200 }}
                  overlay={renderTooltip(
                    newCar.description,
                    newCar.carBrand + " " + newCar.carName
                  )}
                >
                  <h2 style={{ fontFamily: "roboto,Sans-Serif,Arial" }}>
                    {newCar.carBrand + " " + newCar.carName}
                  </h2>
                </OverlayTrigger>
                {newCar.length !== 0 ? (
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      className="circle-background"
                      style={{
                        width: "35px",
                        height: "35px",
                        backgroundColor: "#e9e9e9",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isFavorite ? (
                        <FaHeart
                          className="heart-icon"
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={() => removeFromFavorite(newCar.newCarId)}
                        />
                      ) : (
                        <FaRegHeart
                          className="heart-icon"
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={() => addToFavorite(newCar.newCarId)}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {showAlertForAddToFavorite && (
                <AlertPopup message="Car is added to your collection!" />
              )}
              {showAlertForRemoveFromFavorite && (
                <AlertPopup message="Car is removes from your collection!" />
              )}
              <p>{renderStars()}</p>

              <h4>{formatPrice(newCar.carPrice) + " Lakh*"}</h4>
              <> </>
              <p>
                <small className="text-secondary">
                  *Ex-showroom price in {userLocation}{" "}
                  <FaPen
                    className="mb-1 text-secondary"
                    style={{ fontSize: "10px" }}
                  />
                </small>
              </p>
              <Button
                style={{ width: "300px" }}
                className="btn btn-warning text-light"
              >
                <strong>Offer Button</strong>
              </Button>
              <p className="mt-2">
                <small className="text-secondary">
                  <FaTags
                    style={{ fontSize: "18px" }}
                    className="text-secondary"
                  />{" "}
                  Don't miss out on the best offers for this month
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div style={{ backgroundColor: "#FFFFFF" }} className="shadow-sm">
                <div className="p-4">
                  <h3 style={{ fontFamily: "roboto,Sans-Serif,Arial" }}>
                    {newCar.carBrand + " " + newCar.carName}
                  </h3>
                  <p>{newCar.description}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Variant</th>
                        <th>Ex-showroom price</th>
                        <th>Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{newCar.carModel}</td>
                        <td>{formatPrice(newCar.carPrice) + " Lakh*"}</td>
                        <td>
                          <Button
                            className="btn btn-block btn-warning text-light"
                            variant="outline-warning"
                          >
                            <strong>check offer</strong>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FFFFFF" }}
                className="shadow-sm mt-3"
              >
                <div className="p-4">
                  <h3 style={{ fontFamily: "roboto,Sans-Serif,Arial" }}>
                    {newCar.carBrand + " " + newCar.carName} mileage
                  </h3>
                  <p>{mileageDescription}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Fuel type</th>
                        <th>Transmission</th>
                        <th>ARAI Mileage</th>
                        <th>City Mileage</th>
                        <th>Highway Mileage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{newCar.fuelType}</td>
                        <td>{newCar.transmission}</td>
                        <td>{newCar.araimileage}</td>
                        <td>{newCar.cityMileage}</td>
                        <td>{newCar.highwayMileage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FFFFFF" }}
                className="shadow-sm mt-3"
              >
                <div className="p-4">
                  <h3 style={{ fontFamily: "roboto,Sans-Serif,Arial" }}>
                    {newCar.carBrand + " " + newCar.carName} Images
                  </h3>
                  {images.length !== 0 ? (
                    <Splide
                      className="p-5"
                      options={{
                        type: "loop",
                        perPage: 2,
                        perMove: 1,
                        autoplay: {
                          delay: 100,
                        },
                        //   wheel: true,
                        pauseOnHover: true,
                        speed: 800,
                        drag: "free",
                        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        keyboard: true,
                      }}
                    >
                      {images.map((image) => (
                        <SplideSlide>
                          <Card
                            className="hover-element m-4 overflow-hidden"
                            style={{ width: "18rem" }}
                          >
                            <Card.Img
                              variant="top"
                              src={`data:image/jpeg;base64,${image.carImage}`}
                            />
                          </Card>
                        </SplideSlide>
                      ))}
                    </Splide>
                  ) : (
                    <>Fetching...</>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-4">Popular cars</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default CarPreview;
