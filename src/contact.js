import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
      {/* contact section */}
      <section id="contact">
        <div className="contact">
          <div className="container">
            <div className="mb-5 mt-5 text-center">
              <h5>Let's Start a Conversation</h5>
              <h2 className="fw-bold">Contact Us</h2>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-5">
                <h4 className="fw-bold">Contact Info</h4>
                <ul className="info list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-location-pin fs-5"></span>
                    <p>
                      <a href="https://www.carselecta.com" className="text-info text-black">
                        Carselecta.com Headquarters
                      </a>
                    </p>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-mobile fs-5"></span>
                    <p>
                      <a href="tel:+919999999999" className="text-info text-black">
                        +91 999-999-9999
                      </a>
                    </p>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-envelope fs-5"></span>
                    <p>
                      <a href="mailto:info@carselecta.com" className="text-info text-black">
                        info@carselecta.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="    Your name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="   Enter address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="textarea"
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-dark">
                        <span className="ti-rocket pe-2 fs-5"></span>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
