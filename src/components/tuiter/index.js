import React from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import "./tuiter.css";
import EditProfile from "../profile/edit-profile";
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
import { Login } from "../profile/login";
import Signup from "../profile/signup";
import TuitScreen from "../tuits/tuit-screen";
import PublicProfile from "../profile/public-profile";
import MovieDetail from "../explore/movieDetail";
import movieidReducer from "../reducers/movieid-reducer";
import { combineReducers, createStore } from "redux";
import { Provider, useSelector } from "react-redux";

const store = createStore(movieidReducer);

function Tuiter() {
  // const movieID = useSelector((state) => state);
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Navigation />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/tuiter" element={<Home />} />
                <Route path="/tuiter/:uid" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/:uid" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/public-profile/:uid" element={<PublicProfile/>}/>
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/more" element={<More />} />
                <Route path="/tuit/:tid" element={<TuitScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}
export default Tuiter;
