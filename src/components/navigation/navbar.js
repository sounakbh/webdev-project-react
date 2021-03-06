import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname } = useLocation();
  const roleId = useSelector((state) => state.userReducer.roleId);

  let links = [
    { label: "Home", icon: "fa-home", path: "/home" },
    { label: "Explore", icon: "fa-hashtag", path: "/explore" },
    { label: "Login", icon: "fa-sign-in", path: "/login" },
    { label: "Signup", icon: "fa-user-plus", path: "/signup" },
  ];

  if (roleId === 0 || roleId === 1) {
    links = [
      { label: "Home", icon: "fa-home", path: "/home" },
      { label: "Explore", icon: "fa-hashtag", path: "/explore" },
      { label: "Profile", icon: "fa-user", path: "/profile/movie-likes" },
    ];
  } else if (roleId === 2) {
    links = [
      { label: "Home", icon: "fa-home", path: "/home" },
      { label: "Explore", icon: "fa-hashtag", path: "/explore" },
      { label: "Profile", icon: "fa-user", path: "/profile/movie-likes" },
      { label: "Manage Users", icon: "fa-wrench", path: "/more" },
    ];
  }

  return (
    <div className="ttr-navigation">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          <i className="fa fa-clapperboard"></i>
          <b> Film Forum</b>
        </span>
        {links.map((link, ndx) => {
          return (
            <span
              key={ndx}
              className={`border-0 text-nowrap navbar-text
         ${pathname.indexOf(link.path) >= 0 ? "fw-bold" : ""}`}
            >
              <Link
                to={link.path}
                id={link.label}
                className="text-decoration-none text-black"
              >
                <i className={`fa ${link.icon} text-center`}></i>
                <span className="ttr-label">{link.label}</span>
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
