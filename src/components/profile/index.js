import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import * as service from "../../services/security-service";
import Bookmarks from "../bookmarks";
import MyMovieLikes from "./my-movieLikes";
import MyMovieDislikes from "./my-movieDislikes";
import { useDispatch } from "react-redux";
const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const defaultProfile = {
    username: "sounakbh",
    password: "hellopassword",
    email: "sounakbh@gmail.com",
    firstName: "Sounak",
    lastName: "Bhattacharya",
    profilePhoto: "../../../images/day1-ipod.png",
    headerImage: "../../../images/nasa-profile-header.jpg",
    dateOfBirth: "7th July, 1998",
    location: "Boston, MA",
  };
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const user = await service.profile();
      console.log("Profile service is called!");
      setProfile(user);
    } catch (e) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    service.logout().then(() => {
      dispatch({ type: "logout" });
      dispatch({ type: "clear_bookmark" });
      dispatch({ type: "clear_movieLike" });
      dispatch({ type: "clear_movieDislike" });
      navigate("/login");
    });
  };
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div>
              <div className="row">
                <div
                  className="col-1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/tuiter/")}
                >
                  &#8592;
                </div>
                <div className="col-11" style={{ fontSize: "0" }}>
                  <div
                    style={{ fontSize: "30px", height: "35px", color: "black" }}
                  >
                    <b>
                      {profile.firstName
                        ? profile.firstName
                        : defaultProfile.firstName}{" "}
                      &nbsp;
                      {profile.lastName
                        ? profile.lastName
                        : defaultProfile.lastName}
                    </b>
                  </div>
                  <br />
                </div>
              </div>
              <div className="row" style={{ position: "relative" }}>
                {/* Cover photo */}
                <img
                  src={
                    profile.headerImage
                      ? profile.headerImage
                      : defaultProfile.headerImage
                  }
                  style={{ height: "250px", objectFit: "cover" }}
                  alt="Banner"
                />
                {/* Profile Photo */}
                <img
                  src={
                    profile.profilePhoto
                      ? profile.profilePhoto
                      : defaultProfile.profilePhoto
                  }
                  alt=""
                  style={{
                    width: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    position: "absolute",
                    bottom: -55,
                    left: 20,
                  }}
                />
              </div>
              <div className="mt-2" style={{ boder: "1px solid red" }}>
                {/* <button> */}
                <button
                  onClick={() =>
                    navigate(`/profile/edit-profile/${profile._id}`)
                  }
                  className="btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                >
                  Edit profile
                </button>
                {/* <Link
                  to="/profile/edit-profile"
                  className="btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
                >
                  Edit profile
                </Link> */}
                {/* </button> */}
                {/* <button
                  type="button"
                  onClick={() => }
                  className="btn btn-block btn-outline-dark rounded-pill"
                  style={{ float: "right" }}
                >
                  <b>Edit Profile</b>
                </button> */}
                <button
                  onClick={logout}
                  className="float-end btn btn-warning rounded-pill"
                >
                  Logout
                </button>
              </div>
              <div className="row" style={{ marginTop: "60px" }}>
                <h5>
                  <b>
                    {profile.firstName
                      ? profile.firstName
                      : defaultProfile.firstName}{" "}
                    &nbsp;
                    {profile.lastName
                      ? profile.lastName
                      : defaultProfile.lastName}
                  </b>
                </h5>
                <span>@{profile.username}</span> <br /> <br />
                <span>
                  Faculty, Software Engineer, AI, Space, and renewable
                  enthusiast. Retuits and likes are not endorsements.{" "}
                </span>
                <div style={{ marginTop: "10px" }}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  {profile.location
                    ? profile.location
                    : defaultProfile.location}{" "}
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa fa-birthday-cake"
                    aria-hidden="true"
                  ></i>{" "}
                  {profile.dateOfBirth
                    ? profile.dateOfBirth.substring(0, 10)
                    : defaultProfile.dateOfBirth}
                </div>
                <span style={{ marginTop: "10px" }}>
                  <b>325</b> &nbsp;Following &nbsp; &nbsp; <b>746</b>{" "}
                  &nbsp;Followers{" "}
                </span>
              </div>
            </div>
            <ul className="mt-4 nav nav-pills nav-fill">
              <li className="nav-item">
                <Link
                  to="/profile/movie-likes"
                  className={`nav-link ${
                    location.pathname.indexOf("movie-likes") >= 0
                      ? "active"
                      : ""
                  }`}
                >
                  Likes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile/movie-dislikes"
                  className={`nav-link ${
                    location.pathname.indexOf("movie-dislikes") >= 0
                      ? "active"
                      : ""
                  }`}
                >
                  Dislikes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile/bookmarks"
                  className={`nav-link ${
                    location.pathname.indexOf("bookmarks") >= 0 ? "active" : ""
                  }`}
                >
                  Bookmarks
                </Link>
              </li>
            </ul>
            <Routes>
              <Route path="/movie-likes" element={<MyMovieLikes />} />
              <Route path="/movie-dislikes" element={<MyMovieDislikes />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </div>
          <div className="col-3"></div>
        </div>

        {/* <div className="border border-bottom-0">
          <div className="mb-5 position-relative">
            <Link
              to="/profile/edit"
              className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right"
            >
              Edit profile
            </Link>
            <button
              onClick={logout}
              className="mt-2 float-end btn btn-warning rounded-pill"
            >
              Logout
            </button>
          </div>

          <div className="p-2">
            <h4 className="fw-bolder pb-0 mb-0">{profile.username}</h4>
            <h6 className="pt-0">@{profile.username}</h6>
            <ul className="mt-4 nav nav-pills nav-fill">
              <li className="nav-item">
                <Link
                  to="/profile/movie-likes"
                  className={`nav-link ${
                    location.pathname.indexOf("movie-likes") >= 0
                      ? "active"
                      : ""
                  }`}
                >
                  Likes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile/movie-dislikes"
                  className={`nav-link ${
                    location.pathname.indexOf("movie-dislikes") >= 0
                      ? "active"
                      : ""
                  }`}
                >
                  Dislikes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile/bookmarks"
                  className={`nav-link ${
                    location.pathname.indexOf("bookmarks") >= 0 ? "active" : ""
                  }`}
                >
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Profile;
