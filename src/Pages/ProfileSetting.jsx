import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import userIcon from "../Images/userlogin.jpg";
import { useState } from "react";
function ProfileSetting({userRef}) {
    const [address, setAddress] = useState("No Address Added");
  return (
    <>
      <div className="card shadow-sm " style={{ maxWidth: "540px" }}>
        <div className="row ">
          <div className="col-md-3">
            <img src={userIcon} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body m-0">
              <p className="card-title mb-0 mt-0">{userRef.firstName+" "+userRef.lastName}</p>
              <p className="card-text mb-0">
                <FaPhoneAlt
                  style={{ fontSize: "12px" }}
                  className="text-secondary"
                />{" "}
                &nbsp;
                <small style={{ fontSize: "12px" }}>{userRef.phoneNumber}</small>
              </p>
              <p className="card-text mb-0">
                <FaEnvelope
                  style={{ fontSize: "12px" }}
                  className="text-secondary"
                />{" "}
                &nbsp;
                <small style={{ fontSize: "12px" }}>{userRef.email}</small>
              </p>
            </div>
          </div>
          <div className=" col-md-2">
            <Link className="text-decoration-none" style={{ fontSize: "12px" }}>
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="card shadow-sm mt-3" style={{ maxWidth: "540px" }}>
        <div className="row ">
          <div className="col-md-7">
            <div className="card-body m-0">
              <p className="card-title m-0 p-0 mt-0">Address Book</p>
              <p className="card-text mb-0">&nbsp;</p>
              <p
                style={{ fontSize: "12px" }}
                className="card-text text-secondary mb-0"
              >
                {address}
              </p>
            </div>
          </div>
          <div
            style={{ textAlign: "end", marginLeft: "35px" }}
            className=" col-md-4"
          >
            <Link className="text-decoration-none" style={{ fontSize: "12px" }}>
              Add Address
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileSetting;
