import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../js/action/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(login(credentials));
  };
  return (
    <div>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <form action="" className="col-md-7 mx-auto" onSubmit={loginUser}>
          <h1>Login</h1>
         {
             error && error.id === "login" &&  <Alert  variant={"danger"} >
                  {error.msg.err}
             </Alert>
         }
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="btn btn-sm btn-primary mt-3">
            Login
          </button>{" "}
          <br />
          <Link to="/register">Register here</Link>
        </form>
      )}
    </div>
  );
};

export default Login;
