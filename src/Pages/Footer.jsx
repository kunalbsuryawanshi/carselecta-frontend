import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div>
        <div className="row row2">
          <div className="col-sm-3">
            <h4>India’s #1</h4>
            <p>Largest Auto portal</p>
          </div>
          <div className="col-md-3">
            <h4>Car Sold</h4>
            <p>Every 4 minute</p>
          </div>
          <div className="col-md-3">
            <h4>Offers</h4>
            <p>Stay updated pay less</p>
          </div>
          <div className="col-md-3">
            <h4>Compare</h4>
            <p>Decode the right car</p>
          </div>
        </div>
        <div className="row">
          <hr />
          {/* Main footer content code */}
          <div className="col-md-4">
            <ul type="none">
              <li className="lightb">ABOUT CARDEKHO</li>
              <li>About</li>
              <li>Careers With Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Corporate Policies</li>
              <li>Investors</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul type="none">
              <li className="lightb">CONNECT WITH US</li>
              <li>Feedback</li>
              <li>Contact Us</li>
              <li>Advertise with Us</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul type="none">
              <li className="lightb">OTHERS</li>
              <li>Health Insurance</li>
              <li>Term life insurance</li>
              <li>Crack-Ed</li>
              <li>Personal loan</li>
              <li>TyreDekho</li>
              <li>BatteryDekho</li>
              <li>Girnar Vision Fund</li>
            </ul>
          </div>
        </div>
        {/* Code after horizontal line */}
        <hr />
        <div className="row">
          <div className="col-md-6">
            <footer>
              <p>© 2023 Girnar Software Pvt. Ltd.</p>
            </footer>
          </div>
          <div className="col-md-6">
            <strong> Connect: </strong>
            <span className="icon">
              &nbsp;
              <a href="#" className="me-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
