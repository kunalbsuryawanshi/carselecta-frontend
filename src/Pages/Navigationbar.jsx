import {
  Button,
  Form,
  FormControl,
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
} from "react-icons/fa";
import logo from "../Images/Purple Badge Car Wash Logo1.png";
function Navigationbar() {
  return (
    <>
      <div className="row w-100 bg-light justify-content-center border-bottom">
        <Navbar className="shadow-sm w-100" bg="light" expand="lg">
          <div className="col-sm-4 col-md-3">
            <Navbar.Brand href="/">
              <img
                style={{
                  width: "50%",
                  aspectRatio: "3/1",
                  mixBlendMode: "darken",
                }}
                src={logo}
                alt=""
              />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <div className="col-sm-6 col-md-4 d-flex justify-content-start">
              <Nav className="me-5">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div> */}
            <div className="col-sm-4 col-md-8 d-flex justify-content-center">
              <Form className=" d-flex">
                <div className="d-flex shadow-sm">
                  <input
                    style={{ height: "45px", width: "300px" }}
                    type="text"
                    placeholder="Search cars"
                    className="form-control rounded-0"
                  />
                  <span
                    style={{ width: "50px" }}
                    className="bg-dark text-center"
                  >
                    <a
                      style={{ textDecoration: "none", fontSize: "20px" }}
                      className="text-light"
                      href=""
                    >
                      <FaSearch className="mt-2" />
                    </a>
                  </span>
                </div>
              </Form>
            </div>
            {/* <Button variant="outline-success">Search</Button> */}
            <div className="col-sm-4 w-100 col-md-4 d-flex justify-content-end">
              <a href="">
                <button className="btn btn-danger rounded-pill shadow">
                  Log Out
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Navbar className="shadow" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/aboutus">New Launches</Nav.Link>
            <Nav.Link href="#home">Electric cars</Nav.Link>
            {/* <Nav.Link href="#link">Popular Brands</Nav.Link> */}
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
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigationbar;
