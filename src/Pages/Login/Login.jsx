import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form= new FormData(e.currentTarget);
    console.log(form.get('password'))
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="card shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100 mx-auto">
          <h1 className="text-center text-4xl font-semibold font-poppins pt-16">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Don't Have an Account?{" "}
              <Link to="/Register">
                <a className="link link-error no-underline">Register</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
