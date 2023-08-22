import { Button, Form } from "react-bootstrap";
import LoginFormVideo from "../Videos/loginform.mp4";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserAlt,
  FaUserAltSlash,
  FaUserCircle,
  FaUserClock,
  FaUserEdit,
  FaUserInjured,
  FaUserLock,
  FaUserSlash,
  FaUsersSlash,
} from "react-icons/fa";
import { useRef, useState } from "react";
import axios from "axios";
import AlertPopup from "./AlertPopup";
import Cookies from "js-cookie";

const UserLogin = () => {
  const [buttonValidationForLogin, setButtonValidationForLogin] =
    useState("outline-primary");
  const [buttonTextForLogin, setButtonTextForLogin] = useState("Log In");
  const [userIcon, setUserIcon] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const userLoginAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      setUserIcon(false);
      setButtonTextForLogin("Invalid Attempt!");
      setButtonValidationForLogin("outline-danger");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8181/user-login",
        user
      );
      console.log(response);
      if (response.data === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/home");
        }, 3000);
        Cookies.set("email", `${user.email}`, { expires: 7 });
        setUserIcon(true);
        setButtonTextForLogin("Log In");
        setButtonValidationForLogin("outline-primary");
        formRef.current.classList.remove("was-validated");
      } else {
        setUserIcon(false);
        setButtonTextForLogin("Invalid Attempt!");
        setButtonValidationForLogin("outline-danger");
        formRef.current.classList.add("was-validated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row video-container">
        <video style={{ width: "100%" }} autoPlay loop muted>
          <source src={LoginFormVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        style={{ height: "90vh" }}
        className="row justify-content-center align-items-center mt-5 login-container"
      >
        <div className="col-sm-8 col-md-3 p-4 bg-light">
          <h2 className="text-center mt-4 mb-4">
            {userIcon ? (
              <FaUserCircle
                style={{ fontSize: "80px", mixBlendMode: "difference" }}
                className="text-secondary shadow"
              />
            ) : (
              <FaUserSlash
                style={{ fontSize: "80px", mixBlendMode: "difference" }}
                className="text-secondary shadow"
              />
            )}
          </h2>
          <form ref={formRef} className="needs-validation">
            <input
              className="form-control mt-2 mt-1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
              required
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
            <input
              className="form-control mt-2 mt-2"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password..."
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              required
            />
            <div className="text-right text-secondary">
              <Link
                className="text-secondary text-decoration-none"
                style={{ fontSize: "12px" }}
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          <Button
            type="submit"
            className="btn btn-block mt-3"
            variant={buttonValidationForLogin}
            onClick={userLoginAction}
          >
            {buttonTextForLogin}
          </Button>
          <div className="text-center mt-3 mb-2 text-secondary">
            Don't have an account?
            <Link
              as={Link}
              to={"/usersignup"}
              className="text-decoration-none text-primary"
            >
              {" "}
              Signup
            </Link>
          </div>
          {showAlert && <AlertPopup message="Login successful!" />}
        </div>
      </div>
    </>
  );
};

export default UserLogin;
