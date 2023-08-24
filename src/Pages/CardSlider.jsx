import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "react-bootstrap";
import Card1 from "../Images/card1.webp";
import Card2 from "../Images/card2.webp";
import Card3 from "../Images/card3.webp";
import Card4 from "../Images/card4.webp";
import Card5 from "../Images/card5.webp";
import Card6 from "../Images/card6.webp";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";
import { FaCircle, FaRegHeart } from "react-icons/fa";
import Cookies from "js-cookie";
import AlertPopup from "./AlertPopup";
import axios from "axios";

const CardSlider = ({ cars }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const addToFavorites = async (carId) => {
    if (!favoriteCars.includes(carId)) {
      const updatedFavoriteCars = [...favoriteCars, carId];

      try {
        const requestBody = {
          favoriteCarIds: updatedFavoriteCars,
          email: Cookies.get("email"),
        };

        setFavoriteCars(updatedFavoriteCars);
        // console.log(requestBody);
        await axios.post("http://localhost:8181/add-to-favorite", requestBody);

        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //   console.log(cars);
  const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      //   maximumFractionDigits: 2,
    });
  };
  return (
    <>
      <Splide
        className="m-5 p-5 d-flex justify-content-center bg-light"
        options={{
          type: "loop",
          perPage: 4,
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
        {cars.map((car) => (
          <SplideSlide key={car.newCarId}>
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={`data:image/jpeg;base64,${car.carImage}`}
              />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>{car.carBrand + " " + car.carName}</Card.Title>
                <Card.Text className="fs-5 mb-0 mt-0">
                  <strong>{formatPrice(car.carPrice)} Lakh</strong>
                </Card.Text>
                <Card.Text className="mb-0">{car.carModel}</Card.Text>
                <Card.Text className="mb-0">
                  {car.fuelType + " "}
                  <FaCircle
                    className="mb-1 text-secondary"
                    style={{ fontSize: "7px" }}
                  />
                  {" " + car.transmission}
                </Card.Text>
                <Link
                  className="mt-0 mb-0"
                  onClick={() => addToFavorites(car.newCarId)}
                >
                  <FaRegHeart className="text-danger" />
                </Link>
              </Card.Body>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
      {showAlert && <AlertPopup message="Car Added to your collection!" />}
      {/* <SplideSlide>
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={Card6} />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>Toyota Fortuner</Card.Title>
                <Card.Text className="fs-5">
                  &#x20B9; 32.99 - 50.74 Lakh*
                </Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={Card5} />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>Hyundai Creta</Card.Title>
                <Card.Text className="fs-5">
                  &#x20B9; 10.87 - 19.20 Lakh*
                </Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={Card4} />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>Tata Nexon</Card.Title>
                <Card.Text className="fs-5">&#x20B9; 8 - 14.60 Lakh*</Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={Card3} />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>Tata Punch</Card.Title>
                <Card.Text className="fs-5">&#x20B9; 6 - 10.10 Lakh*</Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <Card
              className="hover-element m-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={Card2} />
              <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title>Mahindra Thar</Card.Title>
                <Card.Text className="fs-5">
                  &#x20B9; 10.54 - 16.78 Lakh*
                </Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide> */}
      {/* <SplideSlide></SplideSlide>
        <SplideSlide></SplideSlide>
        <SplideSlide></SplideSlide> */}
    </>
  );
};

export default CardSlider;
