import React from 'react'
import {Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../js/action/authAction'

const NavBar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    return (
        <Navbar bg="dark">
        
          <Navbar.Brand href="#home" className="d-flex justify-content-around">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DgY7LuJLYjg-C47h3_Zk0mR7UnaWGmi1VA&usqp=CAU"
              width="60"
              height="60"
              className="ml-3"
              alt="mern"

            />
            <Link to="/" className="nav-link">Home</Link>
            <Link  className="nav-link" to="/profile">Profile</Link>
           {
               isAuth ?  <Link onClick={() => dispatch(logout())}  className="nav-link" to="/">Logout</Link> :
               <Link  className="nav-link" to="/login">Login</Link>
           }
          </Navbar.Brand>
        
        </Navbar>
    )
}

export default NavBar
