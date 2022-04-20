import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {PublicProfile} from "../profile/public-profile"
import * as service from "../../services/security-service";

export const UserList = ({users, deleteUser}) => {
    const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({});
    useEffect(async () => {
        try {
            const user = await service.profile();
            setCurrentlyLoggedInUser(user);
        } catch (e) {
            console.log("No User currently logged in!");
        }
    }, []);

    return (
        <div className="list-group">
            {
                users.map(user => {
                    return (
                        user._id === currentlyLoggedInUser._id ?
                            <Link className="list-group-item"
                                  key={user._id}
                                  to={`/profile/mytuits`}>
          <span className="fs-3">
            {user.username}
          </span>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    deleteUser(user._id)
                                }} className="btn btn-danger fa-pull-right">
                                    <i className="fas fa-remove"></i>
                                </button>
                            </Link>

                            :

                            <Link className="list-group-item"
                                  key={user._id}
                                  to={`/public-profile/${user._id}`}>
          <span className="fs-3">
            {user.username}
          </span>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    deleteUser(user._id)
                                }} className="btn btn-danger fa-pull-right">
                                    <i className="fas fa-remove"></i>
                                </button>
                            </Link>

                    )
                })
            }
        </div>)
};
