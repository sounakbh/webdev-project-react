import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../../services/security-service";
import {useDispatch} from "react-redux";
import {findAllBookMarks} from "../../services/bookmark-service";
import {findAllMoviesLikedByUser} from "../../services/movies-likes-service";

export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const login = () =>
        service.login(loginUser)
            .then((user) => {
                dispatch({type: 'login', username: user.username})
                fetchBookmarks(user.username);
                fetchMovieLikes(user.username);
            })
            .catch(e => alert(e));
    
    const fetchBookmarks = (username) => {
        findAllBookMarks(username)
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: "all_bookmark", bookmarks: res.data})
                }
                navigate('/profile/mytuits');
            })
    };

    const fetchMovieLikes = (username) => {
        findAllMoviesLikedByUser("me")
            .then(res => {
                if(res.status === 200){
                    dispatch({type: "all_likes", likedMovies: res.data})
                }
                navigate('/profile/mytuits');
            })
    };

    return (
        <div>
            <h1>Login</h1>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setLoginUser({...loginUser, username: e.target.value})}
                   placeholder="username"/>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setLoginUser({...loginUser, password: e.target.value})}
                   placeholder="password" type="password"/>
            <button onClick={login}
                    className="btn btn-primary mb-5">Login
            </button>
        </div>
    );
};