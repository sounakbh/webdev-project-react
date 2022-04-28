import React, { useEffect, useState } from "react";
import MyTuits from "./my-tuits";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import * as service from "../../services/security-service";
import TuitsAndReplies from "./tuits-and-replies";
import Media from "./media";
import MyLikes from "./my-likes";
import MyDislikes from "./my-dislikes";
import MyMovieLikes from "./my-movieLikes";
const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    try {
      const user = await service.profile();
      setProfile(user);
    } catch (e) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    service.logout().then(() => navigate("/login"));
  };
  return (
    <div className="ttr-profile">
      <div className="border border-bottom-0">
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
                to="/profile/mytuits"
                className={`nav-link ${
                  location.pathname.indexOf("mytuits") >= 0 ? "active" : ""
                }`}
              >
                Tuits
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile/tuits-and-replies"
                className={`nav-link ${
                  location.pathname.indexOf("tuits-and-replies") >= 0
                    ? "active"
                    : ""
                }`}
              >
                Tuits & replies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile/media"
                className={`nav-link ${
                  location.pathname.indexOf("media") >= 0 ? "active" : ""
                }`}
              >
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile/movie-likes"
                className={`nav-link ${
                  location.pathname.indexOf("movie-likes") >= 0 ? "active" : ""
                }`}
              >
                Likes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile/disLikes"
                className={`nav-link ${
                  location.pathname.indexOf("disLikes") >= 0 ? "active" : ""
                }`}
              >
                Dislikes
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/mytuits" element={<MyTuits />} />
        <Route path="/tuits-and-replies" element={<TuitsAndReplies />} />
        <Route path="/media" element={<Media />} />
        <Route path="/likes" element={<MyLikes />} />
        <Route path="/movie-likes" element={<MyMovieLikes />} />
        <Route path="/disLikes" element={<MyDislikes />} />
      </Routes>
    </div>
  );
};
export default Profile;
