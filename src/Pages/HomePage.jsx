import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import Homeimage from "../Images/homepage2.1.jpg";
import Card1 from "../Images/card1.webp";
import Card2 from "../Images/card2.webp";
import Card3 from "../Images/card3.webp";
import Card4 from "../Images/card4.webp";
import Card5 from "../Images/card5.webp";
import Card6 from "../Images/card6.webp";

import Hatchback1 from "../Images/hatchback1.webp";
import Hatchback2 from "../Images/hatchback2.webp";
import Hatchback3 from "../Images/hatchback3.webp";
import Hatchback4 from "../Images/hatchback4.webp";
import Hatchback5 from "../Images/hatchback5.webp";
import Hatchback6 from "../Images/hatchback6.webp";

import Sedan1 from "../Images/sedan1.webp";
import Sedan2 from "../Images/sedan2.webp";
import Sedan3 from "../Images/sedan3.webp";
import Sedan4 from "../Images/sedan4.webp";
import Sedan5 from "../Images/sedan5.webp";
import Sedan6 from "../Images/sedan6.webp";

import Muv1 from "../Images/muv1.webp";
import Muv2 from "../Images/muv2.webp";
import Muv3 from "../Images/muv3.webp";
import Muv4 from "../Images/muv4.webp";
import Muv5 from "../Images/muv5.webp";
import Muv6 from "../Images/muv6.webp";

import Luxury1 from "../Images/luxury1.webp";
import Luxury2 from "../Images/luxury2.webp";
import Luxury3 from "../Images/luxury3.webp";
import Luxury4 from "../Images/luxury4.webp";
import Luxury5 from "../Images/luxury5.webp";
import Luxury6 from "../Images/luxury6.webp";

import Suzuki from "../Images/suzuki.webp";
import Tata from "../Images/tata.webp";
import Kia from "../Images/kia.webp";
import Toyota from "../Images/toyota.webp";
import Hyundai from "../Images/hyundai.webp";
import Mahindra from "../Images/mahindra.webp";
import Honda from "../Images/honda.webp";
import Mg from "../Images/mg.webp";
import Skoda from "../Images/skoda.webp";
import Jeep from "../Images/jeep.webp";
import Renault from "../Images/renault.webp";
import Nissan from "../Images/nissan.webp";

import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPhoneSquare,
  FaTwitter,
  FaYoutube,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import Navigationbar from "./Navigationbar";
import "./Cards.css";
import Footer from "./Footer";
function HomePage() {
  return (
    <>
      <Navigationbar />
      <div className="card mb-3" style={{ maxWidth: "1500px" }}>
        <div className="row ">
          <div className="col-sm-12 col-md-12">
            <img
              style={{ position: "relative" }}
              src={Homeimage}
              className="img-fluid rounded-start w-100"
              alt="..."
            />
          </div>
          <div
            style={{ position: "absolute", marginTop: "200px" }}
            className="col-sm-12 col-md-5 d-flex justify-content-center"
          >
            <div className="card-body">
              <div className="row justify-content-center align-items-center mt-4">
                <div className="col-sm-12 col-md-7 bg-light shadow mt-5">
                  <h4 className="mt-5 mb-5 text-center">Find your right car</h4>
                  <select className="form-control mb-2" name="budget" id="">
                    <option value="b0">Select Budget</option>
                    <option value="b1">1 - 5 Lakh</option>
                    <option value="b1">10 - 15 Lakh</option>
                    <option value="b1">15 - 20 Lakh</option>
                    <option value="b1">20 - 35 Lakh</option>
                  </select>
                  <select className="form-control" name="budget" id="">
                    <option value="b0">Select Type</option>
                    <option value="b1">Hatchback</option>
                    <option value="b1">Sedan</option>
                    <option value="b1">SUV</option>
                    <option value="b1">MUV</option>
                    <option value="b1">Luxury</option>
                    <option value="b1">Super Luxury</option>
                    <option value="b1">Convertible</option>
                    <option value="b1">Hybrid</option>
                    <option value="b1">Coupe</option>
                    <option value="b1">Pickup Truck</option>
                    <option value="b1">Minivan</option>
                    <option value="b1">Wagon</option>
                  </select>
                  <button className="form-control mt-4 mb-5 bg-danger text-light shadow">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUV Carousal */}
      <div style={{ marginTop: "350px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center ">
                {/* card => 1 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center ">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card1} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Hyundai Exter</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6 - 10.10 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card2} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Mahindra Thar</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 10.54 - 16.78 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 3 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center ">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card3} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Tata Punch</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6 - 10.10 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched SUV's
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 4 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card4} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Tata Nexon</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 8 - 14.60 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card5} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Hyundai Creta</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 10.87 - 19.20 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Card6} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Toyota Fortuner</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 32.99 - 50.74 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched SUV's
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Hatchback Carousal */}
      <div style={{ marginTop: "50px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            variant="info"
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center ">
                {/* card => 1 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback1} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Swift</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 5.99 - 9.33 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback2} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Baleno</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6.61 - 9.88 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 3 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback3} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Tata Altroz</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6.60 - 10.74 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Hatchback's
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center ">
                {/* card => 4 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback4} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Tata Tiago</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 5.60 - 8.20 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback5} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Wagon R</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 5.54 - 7.42 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Hatchback6} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Hyundai i20</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 7.46 - 11.88 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Hatchback's
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Sedan Carousal */}
      <div style={{ marginTop: "50px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            variant="info"
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 1 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan1} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Hyundai Verna</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 10.90 - 17.38 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan2} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Dzire</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6.51 - 9.39 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 3 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan3} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Volkswagen Virtus</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 11.48 - 18.77 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Sedan's
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 4 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan4} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Honda City</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 11.57 - 16.05 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan5} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Hyundai Aura</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6.33 - 8.90 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Sedan6} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Honda Amaze</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 7.05 - 9.66 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Sedan's
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* MUV Carousal */}
      <div style={{ marginTop: "50px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            variant="info"
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 1 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv1} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Ertiga</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 8.64 - 13.08 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv2} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Toyota Innova Crysta</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 19.99 - 26.05 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 3 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv3} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti Invicto</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 24.79 - 28.42 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched MUV's
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 4 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv4} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Renault Triber</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 6.33 - 8.97 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv5} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Maruti XL6</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 11.56 - 14.82 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Muv6} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Mahindra Marazzo</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 14.10 - 16.46 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched MUV's
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Luxury Carousal */}
      <div style={{ marginTop: "50px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            variant="info"
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center ">
                {/* card => 1 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury1} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Volvo XC60</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 67.50 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury2} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Mercedes-Benz GLA</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 48.50 - 52.70 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 3 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury3} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Mercedes-Benz GLC</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 73.50 - 74.50 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Luxury car's
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">
                {/* card => 4 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury4} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Audi A4</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 43.85 - 51.85 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury5} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>BMW i7</Card.Title>
                      <Card.Text className="fs-5">&#x20B9; 1.95 Cr*</Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-3 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={Luxury6} />
                    <Card.Body
                      style={{ width: "18rem" }}
                      className="textContent"
                    >
                      <Card.Title>Mercedes-Benz E-Class</Card.Title>
                      <Card.Text className="fs-5">
                        &#x20B9; 75 - 88 Lakh*
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                The most searched Luxury car's
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Popular Brands */}
      <div style={{ marginTop: "50px" }} className="row ">
        <div className="col-sm-12 col-md-12">
          <Carousel
            prevIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleLeft />
              </span>
            }
            prevLabel={<span></span>}
            nextIcon={
              <span style={{ fontSize: "30px" }} className="text-info">
                <FaArrowAltCircleRight />
              </span>
            }
            nextLabel={<span></span>}
            className="mt-5 mb-5 bg-light m-5 "
            wrap={true}
            slide={false}
            variant="info"
            interval={3000}
            pause="hover"
          >
            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center ">

                {/* card => 1 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                    >
                    <Card.Img className="mt-3" variant="top" src={Suzuki} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                      >
                      <Card.Title className="text-center">Suzuki</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 2 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Tata} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Tata</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                  {/* card => 3 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Kia} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Kia</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 4 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Toyota} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Toyota</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 5 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Hyundai} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Hyundai</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 6 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Mahindra} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Mahindra</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                Popular Brands
              </h4>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row bg-light m-5  mt-5 justify-content-center">

                {/* card => 7 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Honda} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Honda</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 8 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Mg} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">MG</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 9 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Skoda} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Skoda</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 10 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Jeep} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Jeep</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 11 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Renault} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Renault</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                {/* card => 12 */}
                <div className="col-sm-12 col-md-2 mt-5 d-flex justify-content-center">
                  <Card
                    className="hover-element overflow-hidden"
                    style={{ width: "18rem", height: "8rem" }}
                  >
                    <Card.Img className="mt-3" variant="top" src={Nissan} />
                    <Card.Body
                      style={{ width: "11rem" }}
                      className="textContent"
                    >
                      <Card.Title className="text-center">Nissan</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h4 style={{ fontFamily: "sans-serif" }} className="text-center">
                Popular Brands
              </h4>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
export default HomePage;
