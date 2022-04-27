import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import * as service from "../../services/users-service";

const PublicProfile = () => {
  const navigate = useNavigate();
  const defaultProfile = {
    username: "sounakbh",
    password: "hellopassword",
    email: "sounakbh@gmail.com",
    firstName: "Sounak",
    lastName: "Bhattacharya",
    profilePhoto: "../../..//",
    // headerImage: string,
    // biography: string,
    // dateOfBirth: Date,
    // accountType: AccountType,
    // maritalStatus: MaritalStatus,
    // location: Location,
    // salary: number,
  };
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const { uid } = useParams();
  const findUserById = () =>
    service.findUserById(uid).then((profile) => setProfile(profile));
  useEffect(findUserById, []);

  return (
    <div className="row">
      {console.log(profile)};<div className="col-4"></div>
      <div className="col-4">
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
              <div style={{ fontSize: "30px", height: "35px", color: "white" }}>
                <b>{profile.name}</b>
              </div>{" "}
              <br />
              <div style={{ fontSize: "15px" }}>
                {profile.totalTweets} Tweets
              </div>
            </div>
          </div>
          <div className="row" style={{ position: "relative" }}>
            {/* Cover photo */}
            <img
              src={profile.bannerPicture}
              style={{ height: "250px", objectFit: "cover" }}
              alt="Banner"
            />
            {/* Profile Photo */}
            <img
              src={profile.profilePicture}
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
              class="btn btn-block btn-outline-dark rounded-pill"
              style={{ float: "right" }}
            >
              <b>Edit Profile</b>
            </button>
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <h5>
              <b>{profile.name}</b>
            </h5>
            <span>@{profile.username}</span> <br /> <br />
            <span style={{ color: "white" }}>{profile.bio}</span>
            <div style={{ marginTop: "10px" }}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
              {profile.location} &nbsp; &nbsp; &nbsp; &nbsp;
              <i class="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
              {profile.dateOfBirth}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
              {profile.dateJoined}
            </div>
            <span style={{ marginTop: "10px" }}>
              <b style={{ color: "white" }}>{profile.followingCount}</b>{" "}
              &nbsp;Following &nbsp; &nbsp;{" "}
              <b style={{ color: "white" }}>{profile.followersCount}</b>{" "}
              &nbsp;Followers{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export default PublicProfile;
