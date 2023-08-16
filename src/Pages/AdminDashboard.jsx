import { Button } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  let [buttonValidation, setButtonValidation] = useState("outline-success");
  let formRef = useRef();
  const navigate = useNavigate();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let addCarAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      setButtonValidation("outline-danger");
      return;
    } else {
    }

    // BACKEND :: ...
    let url = "http://localhost:8181/admin-login";
    axios.post(url).then((response) => {
      if (response.data == 500) {
        console.log(response.data);
        setButtonValidation("outline-danger");
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      } else {
        localStorage.setItem("adminLogin", "true");
        setButtonValidation("outline-success");
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/admindashboard", { replace: true });
        }, 2000);
      }
    });
  };
  return (
    <>
      <Navigationbar />
      <h1 className="text-success text-center mt-5">Admin Dashboard</h1>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4">
          <form ref={formRef} className="needs-validation">
            <input
              className="form-control mt-1"
              type="text"
              name="modelName"
              id="modelName"
              placeholder="Model name..."
            />
            <input
              className="form-control mt-1"
              type="text"
              name="modelType"
              id="modelType"
              placeholder="Model type..."
            />
            <input
              className="form-control mt-1"
              type="text"
              name="modelBrand"
              id="brandName"
              placeholder="Model brand..."
            />
            <input
              className="form-control mt-1"
              type="text"
              name="price"
              id="price"
              placeholder="Model price... "
            />
            <input
              className="form-control mt-1"
              type="text"
              name="description"
              id="description"
              placeholder="Model description"
            />
            <input
              className="form-control mt-1"
              type="file"
              name="carImage"
              id="carImage"
              placeholder="Choose car image..."
            />
          </form>
          <Button
            type="submit"
            className="form-control mt-3"
            variant={buttonValidation}
            onClick={addCarAction}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
