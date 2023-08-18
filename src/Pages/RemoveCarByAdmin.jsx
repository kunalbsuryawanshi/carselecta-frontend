import { useEffect, useRef, useState } from "react";
import Navigationbar from "./Navigationbar";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cards.css";
import AlertPopup from "./AlertPopup";

//Delete confirmation pop-up component
const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div
      style={{ position: "fixed" }}
      className="row hover-pop justify-content-center"
    >
      <div
        style={{ zIndex: "1000" }}
        className="col-sm-12 col-md-12 p-5 bg-light shadow-lg"
      >
        <p>{message}</p>
        <button
          className="form-control bg-danger text-light"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button className="form-control mt-2 btn-success" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};

function RemoveCarByAdmin() {
  //to store input list of car
  const [cars, setCars] = useState([]);
  const [background, setBackground] = useState("1");
  const [carId, setCarId] = useState("");

  //delete pop-up fields
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  //for pop-up message ::car deleted successfully
  const [showAlert, setShowAlert] = useState(false);

  //this is for dynamically setting opacity after pop-up
  const dynamicOpacity = {
    opacity: background,
  };

  const handleShowPopup = (item, newCarId) => {
    setSelectedItem(item);
    setShowPopup(true);
    setBackground(".4");
    setCarId(newCarId);
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelectedItem(null);
    setBackground("1");
  };

  //by clicking the confirm button it will delete the car from database
  const handleConfirm = () => {
    setShowPopup(false);
    setBackground("1");
    axios
      .get(`http://localhost:8181/delete-car-by-id?newCarId=${carId}`)
      .then((response) => {
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          window.location.reload();
        }, 3000);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8181/get-all-cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //   let updateCarAction = () => {
  //     formRef.current.classList.add("was-validated");
  //     let formStatus = formRef.current.checkValidity();
  //     if (!formStatus) {
  //       setButtonValidation("outline-danger");
  //       return;
  //     }

  //     try {
  //       axios
  //         .get(`http://localhost:8181/get-car-by-search?modelName=${modelName}`)
  //         .then((response) => {
  //           setSearchedCar(response.data);
  //         });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  return (
    <>
      <Navigationbar />
      {/* fetching car by search */}

      {/* <form ref={formRef} className="needs-validation">
        <div className="row m-5 p-5 justify-content-center bg-light">
        <div className="col-sm-12 col-md-4 ">
        <input
              className="form-control"
              type="text"
              name="modelName"
              id="modelName"
              pattern="^[A-Za-z0-9\s-]+$"
              placeholder="Enter Model Name..."
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              required
              />
              </div>
              <div className="col-sm-12 col-md-3">
              <Button
              type="submit"
              className="btn "
              variant={buttonValidation}
              onClick={updateCarAction}
              >
              Search
              </Button>
              </div>
              </div>
              </form>
              
              
              <div className="row m-5 p-5 justify-content-center bg-light">
              {searchedCar.map((item) => (
                  <div className="col-sm-12 col-md-3 mt-5">
                  <Link to="/updatecarbyadmin" state={{ value: item.newCarId }}>
                  <Card
                  className="hover-element overflow-hidden"
                  style={{ width: "18rem" }}
                  >
                  <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64,${item.carImage}`}
                />
                <Card.Body style={{ width: "18rem" }} className="textContent">
                <Card.Title className="mb-0">
                {item.modelBrand + " " + item.modelName}
                </Card.Title>
                <Card.Text className="mb-0">
                <small>{"Price: " + item.price + "*"}</small>
                </Card.Text>
                <Card.Text className="mb-0 mt-0">
                <small>{"Mileage: " + item.mileage}</small>{" "}
                </Card.Text>
                <Card.Text className="mb-0 mt-0">
                <small>{"Fuel: " + item.fuelType}</small>{" "}
                </Card.Text>
                </Card.Body>
              </Card>
              </Link>
              </div>
              ))}
            </div> */}

      <div className={`row m-5 p-5 justify-content-center bg-light `}>
        {cars.map((car) => (
          <div style={dynamicOpacity} className="col-sm-12 col-md-3 mt-5">
            <Link
              className="text-secondary"
              onClick={() =>
                handleShowPopup(
                  car.modelBrand + " " + car.modelName,
                  car.newCarId
                )
              }
            >
              <Card
                className="hover-element overflow-hidden"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64,${car.carImage}`}
                />
                <Card.Body style={{ width: "18rem" }} className="textContent">
                  <Card.Title className="mb-0">
                    {car.modelBrand + " " + car.modelName}
                  </Card.Title>
                  <Card.Text className="mb-0">
                    <small>{"Price: " + car.price + "*"}</small>
                  </Card.Text>
                  <Card.Text className="mb-0 mt-0">
                    <small>{"Mileage: " + car.mileage}</small>{" "}
                  </Card.Text>
                  <Card.Text className="mb-0 mt-0">
                    <small>{"Fuel: " + car.fuelType}</small>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
        {showPopup && selectedItem && (
          <ConfirmationPopup
            message={`Are you sure you want to delete ${selectedItem}?`}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
        {showAlert && <AlertPopup message="Car deleted successfully!" />}
      </div>
    </>
  );
}
export default RemoveCarByAdmin;
