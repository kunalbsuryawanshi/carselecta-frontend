import { useRef, useState } from "react";
import Navigationbar from "./Navigationbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import UpdateCarByAdmin from "./UpdateCarByAdmin";
import { Link } from "react-router-dom";

function AdminUpdateCar() {
  let formRef = useRef();

  let [inputPlaceholder, setInputPlaceholder] = useState("");
  let [searchCarBy, setSearchCarBy] = useState("");
  let [validationPattern, setValidationPattern] = useState("");
  let [buttonValidation, setButtonValidation] = useState("outline-success");
  let [inputValue, setInputValue] = useState("");
  let [url, setUrl] = useState("");
  let [items, setItems] = useState([]);

  let handleCarSearch = (e) => {
    console.log(e.target.value);
    setSearchCarBy(e.target.value);
    if (e.target.value == "Model Name") {
      setInputPlaceholder("Enter Model Name...");
      setValidationPattern("^[a-zA-Z0-9 ]*$");
      setUrl("search-by-model-name");
    } else if (e.target.value == "Model Type") {
      setInputPlaceholder("Enter Model Type...");
      setValidationPattern("^[a-zA-Z ]*$");
      setUrl("search-by-model-type");
    } else if (e.target.value == "Brand Name") {
      setInputPlaceholder("Enter Brand Name...");
      setValidationPattern("^[a-zA-Z ]*$");
      setUrl("search-by-brand-name");
    } else if (e.target.value == "Model Year") {
      setInputPlaceholder("Enter Model Year...");
      setValidationPattern("^(199\\d|20[0-1]\\d|202[0-9])$");
      setUrl("search-by-model-year");
    }
  };
  let response;
  let addCarAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      setButtonValidation("outline-danger");
      return;
    }

    const formData = new FormData();
    formData.append("modelName", inputValue);
    formData.append("modelBrand", inputValue);
    formData.append("modelType", inputValue);
    formData.append("modelYear", inputValue);

    try {
       response = await axios.post(
        `http://localhost:8181/carselecta/${url}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setItems(response.data);
        console.log(response.data);
        setButtonValidation("outline-success");
        console.log("Data uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading data", error);
      setButtonValidation("outline-danger");
    } finally {
      setInputValue("");
      setSearchCarBy("");
      setButtonValidation("outline-success");
      formRef.current.classList.remove("was-validated");
    }
  };


  return (
    <>
      <Navigationbar />
      <div className="row justify-content-center p-5 m-5">
        <div className="col-sm-12 col-md-4">
          <form ref={formRef} className="needs-validation">
            <select
              className="form-control shadow-sm"
              aria-label="Default select example"
              value={searchCarBy}
              onChange={handleCarSearch}
              required
            >
              <option value="" selected>
                Search Car By...
              </option>
              <option value="Model Name">Model Name</option>
              <option value="Model Type">Model Type</option>
              <option value="Brand Name">Brand Name</option>
              <option value="Model Year">Model Year</option>
            </select>
            <input
              className="mt-2 form-control"
              type="text"
              name="modelName"
              id="modelName"
              pattern={validationPattern}
              placeholder={inputPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </form>
          <Button
            style={{ width: "200px", marginLeft: "90px" }}
            type="submit"
            className="btn shadow mt-3"
            variant={buttonValidation}
            onClick={addCarAction}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 d-flex justify-content-center">
            {items.map((item) => (
              <div
                className="card hover-element mb-3"
                style={{ maxWidth: "585px" }}
              >
                <div className="row g-0">
                  <div className="col-md-6">
                    {item.base64Image && (
                      <img
                        src={`data:image/jpeg;base64,${item.base64Image}`}
                        style={{ width: "800px" }}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    )}
                  </div>
                  <div className="col-md-6">
                    {/* <span
                      style={{ position: "fixed", marginLeft: "248px" }}
                      className=""
                    >
                      &#10084;
                    </span> */}
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.modelBrand + " " + item.modelName}
                      </h5>
                      <p className="card-text"></p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {item.modelYear}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {item.fuelType}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {item.price}
                        </small>
                      </p>
                      <Link to='/updatecarbyadmin' state={{ value: item.newCarId }}>
                      <button className="btn btn-danger">update</button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <UpdateCarByAdmin inputValue={item}/> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default AdminUpdateCar;
