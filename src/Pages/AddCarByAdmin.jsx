import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  ToastContainer,
} from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Cards.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import AlertPopup from "./AlertPopup";
function AddCarByAdmin() {
  let formRef = useRef();
  const navigate = useNavigate();

  let [buttonValidation, setButtonValidation] = useState("outline-success");
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState("");

  const [modelName, setModelName] = useState("");
  const [modelBrand, setModelBrand] = useState("");
  const [modelType, setModelType] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [modelYear, setModelyear] = useState("");
  const [description, setDescription] = useState("");
  const [carImage, setCarImage] = useState(null);

  const handleCarImage = (e) => {
    setCarImage(e.target.files[0]);
  };

  let addCarAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      setButtonValidation("outline-danger");
      return;
    }

    const formData = new FormData();
    formData.append("modelName", modelName);
    formData.append("modelBrand", modelBrand);
    formData.append("modelType", modelType);
    formData.append("price", price + " " + priceDropdown);
    formData.append("mileage", mileage + " kmpl");
    formData.append("fuelType", fuelType);
    formData.append("transmission", transmission);
    formData.append("modelYear", modelYear);
    formData.append("description", description);
    formData.append("carImage", carImage);

    try {
      const response = await axios.post(
        "http://localhost:8181/carselecta/add-new-car",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        // NotificationManager.success(
        //   "Car Details inserted successfully!",
        //   "Success",
        //   2000
        // );
        setButtonValidation("outline-success");
        console.log("Data uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading data", error);
    }

    setModelName("");
    setModelBrand("");
    setModelType("");
    setPrice("");
    setMileage("");
    setFuelType("");
    setTransmission("");
    setModelyear("");
    setDescription("");
    setCarImage(null);
    formRef.current.classList.remove("was-validated");

    //Testing ::...

    // console.log(modelName);
    // console.log(modelBrand);
    // console.log(modelType);
    // console.log(price);
    // console.log(mileage);
    // console.log(fuelType);
    // console.log(transmission);
    // console.log(modelYear);
    // console.log(description);
    // console.log(carImage);

    // BACKEND :: ...

    // let url = "http://localhost:8181/admin-login";
    // axios.post(url).then((response) => {
    //   if (response.data == 500) {
    //     console.log(response.data);
    //     setButtonValidation("outline-danger");
    //     setIsError(true);
    //     setTimeout(() => {
    //       setIsError(false);
    //     }, 2000);
    //   } else {
    //     localStorage.setItem("adminLogin", "true");
    //     setButtonValidation("outline-success");
    //     setIsSuccess(true);
    //     setTimeout(() => {
    //       setIsSuccess(false);
    //       navigate("/admindashboard", { replace: true });
    //     }, 2000);
    //   }
    // });
  };

  return (
    <>
      <Navigationbar />
      <h2 className="text-secondary text-center mt-5">
        Add car into collection
      </h2>
      <div className="bg-light p-5 m-5 shadow">
        <form ref={formRef} className="needs-validation">
          <div className="row m-5 ">
            <div className="col-sm-12 col-md-4 mt-1">
              <input
                className="form-control shadow-sm"
                type="text"
                name="modelName"
                id="modelName"
                placeholder="Enter model name..."
                pattern="^[A-Za-z0-9\s-]+$"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                required
              />
              <Form.Control.Feedback className="m-1" type="invalid">
                Please enter a model name*
              </Form.Control.Feedback>
            </div>
            <div className="col-sm-12 col-md-4 mt-1">
              <select
                className="form-control shadow-sm"
                aria-label="Default select example"
                value={modelType}
                onChange={(e) => setModelType(e.target.value)}
                required
              >
                <option value="" selected>
                  Select model type...
                </option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupe">Coupe</option>
                <option value="MUV">MUV</option>
                <option value="Wagon">Wagon</option>
                <option value="Minivan">Minivan</option>
                <option value="Convertible">Convertible</option>
                <option value="Van">Van</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="CUV">CUV</option>
                <option value="Sports Car">Sports Car</option>
              </select>
              <Form.Control.Feedback className="m-1" type="invalid">
                Please choose a model type*
              </Form.Control.Feedback>
            </div>
            <div className="col-sm-12 col-md-4 mt-1">
              <select
                className="form-control shadow-sm"
                aria-label="Default select example"
                value={modelBrand}
                onChange={(e) => setModelBrand(e.target.value)}
                required
              >
                <option value="" selected>
                  Select model brand...
                </option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Porche">Porche</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Bently">Bently</option>
                <option value="Nissan">Nissan</option>
                <option value="Jeep">Jeep</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Dodge">Dodge</option>
                <option value="Honda">Honda</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Lexus">Lexus</option>
                <option value="Tesla">Tesla</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Renault">Renault</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Toyota">Toyota</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Buggati">Buggati</option>
                <option value="Rolls Royse">Rolls Royse</option>
                <option value="Kia">Kia</option>
                <option value="Volvo">Volvo</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Fiat">Fiat</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Skoda">Skoda</option>
                <option value="Tata">Tata</option>
                <option value="Isuzu">Isuzu</option>
                <option value="MG">MG</option>
                <option value="Mahindra">Mahindra</option>
              </select>
              <Form.Control.Feedback className="m-1" type="invalid">
                Please choose a model brand*
              </Form.Control.Feedback>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-sm-12 col-md-4 mt-1">
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  pattern="\d+(\.\d{2})?"
                  placeholder="Enter price e.g.(0.00)..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <select
                  className="form-control shadow-sm"
                  aria-label="Default select example"
                  value={priceDropdown}
                  onChange={(e) => setPriceDropdown(e.target.value)}
                  required
                >
                  <option value="" selected>
                    Select...
                  </option>
                  <option value="Thousand">Thousand</option>
                  <option value="Lakh">Lakh</option>
                  <option value="Crore">Crore</option>
                </select>
                <Form.Control.Feedback className="m-1" type="invalid">
                  Please enter price*
                </Form.Control.Feedback>
              </InputGroup>
            </div>

            <div className="col-sm-12 col-md-4 mt-1">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter model mileage e.g.(0.00)..."
                  pattern="\d+(\.\d{2})?"
                  title="Mileage must be a number with up to 2 decimal places"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  required
                />
                <InputGroup.Text>kmpl</InputGroup.Text>
                <Form.Control.Feedback className="m-1" type="invalid">
                  Please enter model mileage*
                </Form.Control.Feedback>
              </InputGroup>
            </div>
            <div className="col-sm-12 col-md-4 mt-1">
              <select
                className="form-control shadow-sm"
                aria-label="Default select example"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                required
              >
                <option value="" selected>
                  Select fuel type...
                </option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="CNG">CNG</option>
                <option value="Bio Diesel">Bio Diesel</option>
                <option value="LPG">LPG</option>
                <option value="Ethanol or Methanol">Ethanol or Methanol</option>
              </select>
              <Form.Control.Feedback className="m-1" type="invalid">
                Please chhose model fuel type*
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-sm-12 col-md-4 mt-1">
              <select
                className="form-control shadow-sm"
                aria-label="Default select example"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                required
              >
                <option value="" selected>
                  Select Transmission...
                </option>
                <option value="Auto">Auto</option>
                <option value="Manual">Manual</option>
              </select>
              <Form.Control.Feedback className="m-1" type="invalid">
                Please choose transmission*
              </Form.Control.Feedback>
            </div>
            <div className="col-sm-12 col-md-4 mt-1">
              <select
                className="form-control shadow-sm"
                aria-label="Default select example"
                value={modelYear}
                onChange={(e) => setModelyear(e.target.value)}
                required
              >
                <option value="" selected>
                  Select model year...
                </option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <Form.Control.Feedback className="m-1" type="invalid">
                Please choose model year*
              </Form.Control.Feedback>
            </div>
            <div className="col-sm-12 col-md-4 mt-1">
              <input
                className="form-control shadow-sm "
                type="file"
                name="carImage"
                id="formFile"
                placeholder="Choose car image"
                onChange={handleCarImage}
                required
              />
              <Form.Control.Feedback className="m-1" type="invalid">
                Please upload model image*
              </Form.Control.Feedback>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-sm-12 col-md-12">
              <textarea
                className="form-control shadow-sm"
                name="description"
                id=""
                cols="30"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                Enter Description...
              </textarea>
            </div>
          </div>
        </form>

        <div className="row m-5 justify-content-center">
          <div className="col-sm-12 col-md-2">
            <Button
              style={{ width: "200px" }}
              type="submit"
              className="btn shadow mt-3"
              variant={buttonValidation}
              onClick={addCarAction}
            >
              Add Car
            </Button>
            {showAlert && (
              <AlertPopup message="Car details inserted successfully!" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCarByAdmin;
