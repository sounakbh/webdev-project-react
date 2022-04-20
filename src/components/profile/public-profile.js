import React, { useEffect, useState } from "react";
import "./profile.css";
import {
    useNavigate,
    useLocation, useParams,
} from "react-router-dom";
import * as service from "../../services/users-service";

const PublicProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [profileDetails, setProfileDetails] = useState({});
    const {uid} = useParams();
    const findUserById = () =>
        service.findUserById(uid)
            .then(profileDetails => setProfileDetails(profileDetails));
    useEffect(findUserById, []);

    return (
        <div className="row">
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="col-sm-11 col-md-11 col-lg-11">
                    <div className="row">
                        <h5 className="p-0 m-0"><b>{profileDetails.name ? profileDetails.name : "New User Name"}</b></h5>
                    </div>
                    <div className="row">
                        {profileDetails.name ? profileDetails.name : "New User Name"}
                    </div>
                </div>
            </div>
            <div className="row wd-banner-div">
                <div className="col-12">
                    <img className="wd-cover-img p-0" src={profileDetails.bannerPicture ? profileDetails.bannerPicture : "../../../images/movies/default-banner.png"}/>
                    <div >
                        <img className="wd-profile-img p-0" src={profileDetails.profilePicture ? profileDetails.profilePicture : "../../../images/movies/default-profile.png" }/>
                    </div>
                </div>
            </div>
            <div className="row ps-4 pt-3">
                <div className="row"><h4 className="p-0"><b>{profileDetails.name ? profileDetails.name : "New User Name"}</b></h4></div>
                <div className="row">@{profileDetails.username}</div>
                <div className="row text-white">{profileDetails.bio ? profileDetails.bio : "Default Bio"}</div>
                <div className="wd-profile-details-panel">
                    <div className="wd-profile-item">
                        <p className="wd-profile-item-icon"><a href="#"><i className="fa-regular fa-compass"></i></a></p>
                        <p>{profileDetails.location ? profileDetails.location : 'New User Location'}</p>
                    </div>
                    <div className="wd-profile-item">
                        <p className="wd-profile-item-icon"><a href="#"><i className="fa-solid fa-cake-candles"></i></a></p>
                        <p>{profileDetails.dateOfBirth ? profileDetails.dateOfBirth : '01/01/2001'}</p>
                    </div>
                    <div className="wd-profile-item">
                        <p className="wd-profile-item-icon"><a href="#"><i className="fa-regular fa-calendar-days"></i></a></p>
                        <p>Joined {profileDetails.dateJoined ? profileDetails.dateJoined : '01/01/2001'}</p>
                    </div>
                </div>
                <div className="wd-follower-details-panel">
                    <div className="wd-profile-item">
                        <p className="wd-profile-item-icon"><b>{profileDetails.followingCount  ? profileDetails.followingCount : 0}</b></p>
                        <p className="wd-profile-item-icon">Following</p>
                    </div>
                    <div className="wd-profile-item">
                        <p className="wd-profile-item-icon"><b>{profileDetails.followersCount ? profileDetails.followersCount : 0}</b></p>
                        <p className="wd-profile-item-icon">Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PublicProfile;
