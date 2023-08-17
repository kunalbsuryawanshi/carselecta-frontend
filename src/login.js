import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import MyRegistration from "./registration";

function EmailLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newPassword = e.target.value;
    let hasValidLength = newPassword.length >= 6;
    //let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    let hasNumber = /\d/.test(newPassword);

    let isPasswordValid = hasValidLength && hasNumber;

    let newuser = { ...user, password: newPassword };
    setUser(newuser);
    formRef.current.querySelector("#password").setCustomValidity(
      isPasswordValid ? "" : "Password should be at least 6 characters long and contain at least one symbol and one number."
    );
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };


  return (
    <>

      <div className="row justify-content-center " style={{ marginTop: "100px" }}>
        <div className="col-sm-12 col-md-6">
          <div className="fs-2">Login Form</div>

          <form ref={formRef} className="needs-validation">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
            />

            <input
              type="password"
              id="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
            />

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-secondary"
             
            />
            <div className="mt-3">Don't have an account? Click on Register</div>
            <Link to="/registration">
              <button type="button" className="btn btn-outline-primary btn-rounded p-2 mt-2 form-control">
                Register
              </button>
            </Link>
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default EmailLogin;
