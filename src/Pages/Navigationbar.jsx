import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Image,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import {
  FaCheck,
  FaExclamationCircle,
  FaPen,
  FaSearch,
  FaTrashAlt,
  FaUser,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../Images/Purple Badge Car Wash Logo1.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userlogin from "../Images/userlogin.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
function Navigationbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
   const fetchUser = async () => {
      try {
        const email = Cookies.get("email");
        const response = await axios.get(
          `http://localhost:8181/get-user-details?email=${email}`
        );
        setUser(response.data.firstName);
        console.log(response.data.firstName);
      } catch (error) {
        consol.log(error);
      }
    };
    fetchUser();
  }, []);

  const logOutHandler = () => {
    Cookies.remove("email");
    navigate("/");
  };
  return (
    <>
      <Navbar
        style={{ justifyContent: "space-between" }}
        className="bg-body-tertiary "
      >
        <Navbar.Brand href="/home">
          <Image
            style={{
              width: "30%",
              // aspectRatio: "3/1",
              mixBlendMode: "darken",
            }}
            src={logo}
            alt=""
          />
        </Navbar.Brand>
        <DropdownButton variant="light" className="m-4" id="dropdown-basic-button" title={"Hello "+user+"!"}>
          <Dropdown.Item href="/userprofile">
            <FaUserCircle style={{ fontSize: "35px" }} />
          </Dropdown.Item>
          <Dropdown.Item href="/wishlist">Favorite</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item onClick={logOutHandler}>Log Out</Dropdown.Item>
        </DropdownButton>
        {/* <Dropdown size>
          <Dropdown.Toggle variant="light" id="user-dropdown">
            <small>{user}</small>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{minWidth:'200px'}}>
            <Dropdown.Item href="#profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* <Button
            style={{ top: "10px", right: "5px", position: "absolute" }}
            variant="primary"
            className="ml"
          >
            Top Right Button
          </Button> */}
      </Navbar>

      <Navbar
        style={{ width: "block" }}
        className="shadow"
        bg="light"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/aboutus">New Launches</Nav.Link>
            <Nav.Link href="#home">Electric cars</Nav.Link>
            <NavDropdown title="Popular Brands" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Maruti Suzuki Cars
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hundai Cars
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kia Cars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mahindra Cars
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tata Cars</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigationbar;
