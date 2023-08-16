import { Button } from "react-bootstrap";
const LoginForm = () => {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-12 col-md-3">
          <h2>Login</h2>
          <form>
            <input
              className="form-control mt-1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
            />
            <input
              className="form-control mt-1"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password..."
            />
            <Button
                type="submit"
                className="form-control mt-3"
                variant="outline-primary"
                // onClick={adminLoginAction}
              >
                Login
              </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
