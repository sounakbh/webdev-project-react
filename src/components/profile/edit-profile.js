import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { findUserById, updateUser } from "../../services/users-service";

const EditProfile = () => {
  const [profile, setProfile] = useState({});
  const { uid } = useParams();
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
  const navigate = useNavigate();
  useEffect(async () => {
    try {
      const user = await findUserById(uid);
      setProfile(user);
    } catch (e) {
      navigate("/login");
    }
  }, []);

  return profile ? (
    <div className="row mt-2">
      <div className="col-3"></div>
      <div className="col-6">
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
              <b>Edit Profile</b>
            </div>
            <br />
          </div>
        </div>
        <div
          className="row"
          style={{
            position: "relative",
          }}
        >
          <img
            src={
              profile.headerImage
                ? profile.headerImage
                : defaultProfile.headerImage
            }
            style={{ height: "250px", objectFit: "cover" }}
            alt="Banner"
          />
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

        <div style={{ marginBottom: "100px" }}>
          <button
            onClick={async () => {
              await updateUser(uid, profile);
              navigate("/profile/movie-likes");
            }}
            className="btn btn-large btn-warning border border-secondary fw-bolder rounded-pill fa-pull-right mt-2"
          >
            Save Changes
          </button>
        </div>
        <input
          required
          className="mb-2 form-control"
          defaultValue={profile.firstName}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
          placeholder="First Name"
        />
        <input
          className="mb-2 form-control"
          defaultValue={profile.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          placeholder="Last Name"
        />
        <input
          className="mb-2 form-control"
          defaultValue={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          placeholder="Username"
        />
        <input
          className="mb-2 form-control"
          defaultValue={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email"
          type="email"
        />
        <input
          className="mb-2 form-control"
          defaultValue={profile.dateOfBirth?.substr(0, 10)}
          onChange={(e) =>
            setProfile({ ...profile, dateOfBirth: e.target.value })
          }
          placeholder="Date of Birth"
          type="date"
        />
        <input
          className="mb-2 form-control"
          defaultValue={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          placeholder="Location"
        />
      </div>
      <div className="col-3"></div>
    </div>
  ) : (
    <></>
  );
};
export default EditProfile;
