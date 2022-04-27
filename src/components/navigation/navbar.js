import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  // console.log(location.pathname);
  const links = [
    // { label: "Tuiter", icon: "fa-square-t", path: "/tuiter" },
    { label: "Home", icon: "fa-home", path: "/home" },
    { label: "Explore", icon: "fa-hashtag", path: "/explore" },
    { label: "Bookmarks", icon: "fa-bookmark", path: "/bookmarks" },
    { label: "Profile", icon: "fa-user", path: "/profile/mytuits" },
    { label: "More", icon: "fa-circle-ellipsis", path: "/more" },
    { label: "Login", icon: "fa-user", path: "/login" },
    { label: "Signup", icon: "fa-user", path: "/signup" },
  ];
  return (
    <div className="ttr-navigation">
      {/* <nav class="navbar navbar-light bg-light">
        <span class="navbar-text">Navbar text with an inline element</span>
      </nav> */}
      <nav className="navbar navbar-light bg-light">
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
