import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate, useParams } from "react-router-dom";
import * as service from "../../services/users-service";

const PublicProfile = () => {
  const navigate = useNavigate();
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

  const [profile, setProfile] = useState({});
  const { uid } = useParams();
  const findUserById = () =>
    service.findUserById(uid).then((profile) => setProfile(profile));
  useEffect(findUserById, []);

  return (
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
              <div style={{ fontSize: "30px", height: "35px", color: "black" }}>
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
            <button
              type="button"
              className="btn btn-block btn-outline-dark rounded-pill"
              style={{ float: "right" }}
            >
              <b>Edit Profile</b>
            </button>
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <h5>
              <b>
                {profile.firstName
                  ? profile.firstName
                  : defaultProfile.firstName}{" "}
                &nbsp;
                {profile.lastName ? profile.lastName : defaultProfile.lastName}
              </b>
            </h5>
            <span>@{profile.username}</span> <br /> <br />
            <span>
              Faculty, Software Engineer, AI, Space, and renewable enthusiast.
              Retuits and likes are not endorsements.{" "}
            </span>
            <div style={{ marginTop: "10px" }}>
              <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
              {profile.location ? profile.location : defaultProfile.location}{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <i className="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
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
      </div>
      <div className="col-3"></div>
    </div>
  );
};
export default PublicProfile;
