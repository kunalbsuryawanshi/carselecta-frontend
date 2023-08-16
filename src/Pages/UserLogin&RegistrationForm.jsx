import React, { useState } from "react";
import LoginForm from "./UserLoginComponent";
import RegistrationForm from "./UserRegistrationComponent";

function UserLoginAndRegistrationForm() {
  const [activeForm, setActiveForm] = useState("login");

  const toggleForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <>
      <div className="App mt-5">
        <div className="tab-container">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              class={`form-control btn-danger ${activeForm === "login" ? "active" : ""}`}
              onClick={() => toggleForm("login")}
            >
              Left
            </button>
            <button
              type="button"
              class={`btn btn-success ${
                activeForm === "register" ? "active" : ""
              }`}
              onClick={() => toggleForm("register")}
            >
              Right
            </button>
          </div>



          {/* <button
            className={`btn tab-button ${
              activeForm === "login" ? "active" : ""
            }`}
            onClick={() => toggleForm("login")}
          >
            Login
          </button>
          <button
            className={`tab-button ${
              activeForm === "register" ? "active" : ""
            }`}
            onClick={() => toggleForm("register")}
          >
            Register
          </button> */}
        </div>
        <div className="form-container">
          {activeForm === "login" ? <LoginForm /> : <RegistrationForm />}
        </div>
      </div>
    </>
  );
}

export default UserLoginAndRegistrationForm;
