import { Form, Nav, Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AlertPopup from "./AlertPopup";
import card from "../Images/card2.webp";
function CarPreviewAsCompany() {
  const renderTooltip = (description, name) => (
    <Popover id="popover-basic" className="w-100">
      <Popover.Header as="h5" className="text-center text-info">
        {name}
      </Popover.Header>
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  const formatPrice = (price) => {
    // if (newCar && newCar.carPrice && firstModelPrice) {
    //   return price.toLocaleString("en-IN", {
    //     style: "currency",
    //     currency: "INR",
    //     minimumFractionDigits: 0,
    //     //   maximumFractionDigits: 2,
    //   });
    // }
  };
  return (
    <>
      <Navigationbar />
      <div
        style={{ backgroundColor: "#fafafa" }}
        className="p-5 mb-0 p-0 d-flex justify-content-center"
      >
        <div className="loader d-flex justify-content-center"></div>
      </div>
      <div className="container-fluid">asdadad</div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="row m-2 ">
              <div className="col-sm-6 col-md-9 ">
                <h4>Maruti Suzuki Car Models</h4>
              </div>
              <div className="col-sm-6 col-md-3">
                <Form.Select aria-label="Default select example">
                  <option>Change Brand</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 p-4">
                <div class="card mb-3" style={{ maxWidth: "840px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={card}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title">Mahindra Thar</h5>
                        <h5 class="card-title">Price</h5>
                        <p class="card-text">
                          petrol . mileage . transamission
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CarPreviewAsCompany;
