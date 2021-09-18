import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../js/action/authAction";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    dispatch(register({ email, name, password, phone }));
  };
  return (
    <div>
      {isLoading ? (
        <h1>Loading ... </h1>
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <form action="" className="col-md-7 mx-auto" onSubmit={registerUser}>
          {error && error.id === "register" && (
            <Alert variant={"danger"}>{error.msg.err}</Alert>
          )}
          <h1>Register</h1>
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
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <button type="submit" className="btn btn-sm btn-primary mt-3">
            Register
          </button>{" "}
          <br />
          <Link to="/login">Login here</Link>
        </form>
      )}
    </div>
  );
};

export default Register;
