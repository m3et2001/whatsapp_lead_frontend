import React, { useState } from "react";
import "./Header.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { useStateValue } from "../../StateProvider";

const Header = ({ toggle }) => {
  const [{ userInfo }, dispatch] = useStateValue();
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.clear();
    dispatch({ type: "SET_USER_INFO", data: {} });
    dispatch({ type: "SET_LOGIN_STATUS", status: false });
    navigate("/sign-in")
    
  };
  return (
    <div className="header">
      {/* navbar */}
      <div className="navbar-custom navbar navbar-expand-lg">
        <div className="container-fluid px-0">
          <div className="d-flex justify-content-center align-items-center">
            <div className="navbar-brand d-block ">
              <div className="header-logo">Whatsapp Lead</div>
            </div>
            {/* <div
              id="nav-toggle"
              className="ms-auto ms-md-0 me-0 me-lg-3 "
              style={{ cursor: "pointer" }}
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                className="bi bi-text-indent-left text-muted"
                viewBox="0 0 16 16"
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div> */}
          </div>
          <div className="d-none d-md-none d-lg-block"></div>
          {/*Navbar nav */}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
