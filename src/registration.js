import { useRef, useState } from "react";
import "./login.css";

function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    userType: "buyer",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let handlerUserTypeAction = (e) => {
    let newuser = { ...user, userType: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      alert("Success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center mt-10" style={{ marginTop: "100px" }}>
        <div className="col-sm-12 col-md-6 ">
          <div className="fs-2" style={{ textAlign: "center" }}>Registration Form</div>
          <form ref={formRef} className="needs-validation" noValidate>
            <input type="text" className="form-control form-control-lg mb-2 mt-1" placeholder="Enter username" value={user.username} onChange={handlerUsernameAction} required />
            <input type="password" className="form-control form-control-lg mb-2" placeholder="Enter password" value={user.password} onChange={handlerPasswordAction} minLength={6} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$" title="Password must be at least 6 characters long and contain at least one letter and one number." required />
            <input type="email" className="form-control form-control-lg mb-2" placeholder="Enter Email" value={user.email} onChange={handlerEmailAction} required />
            <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter mobile" value={user.mobile} onChange={handlerMobileAction} pattern="[0-9]{10}" title="Mobile number must be 10 digits." required />
            <select className="form-control form-control-lg mb-2" value={user.userType} onChange={handlerUserTypeAction} required>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <input type="button" value="Register" className="w-100 btn btn-lg btn-secondary" onClick={registerAction} />
          </form>
          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default MyRegistration;
