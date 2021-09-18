import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../js/action/authAction";
import {Redirect} from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isAuth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <h1>Loading ....</h1>
      ) : !isAuth ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
