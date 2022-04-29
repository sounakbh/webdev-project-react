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
import movieLikeReducer from "../reducers/movieLike-reducer";
import { combineReducers, createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import Navbar from "../navigation/navbar";
import bookmarkReducer from "../reducers/bookmark-reducer";
import userReducer from "../reducers/user-reducer";
import MovieDetailPage from "../explore/movieDetailPage";

const store = createStore(
  combineReducers({ movieidReducer, bookmarkReducer, userReducer, movieLikeReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function Tuiter() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="container-fluid">
          <Navbar />
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/tuiter" element={<Home />} />
              <Route path="/tuiter/:uid" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:uid" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route
                path="/explore/movie/:movieID"
                element={<MovieDetailPage />}
              />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/public-profile/:uid" element={<PublicProfile />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/more" element={<More />} />
              <Route path="/tuit/:tid" element={<TuitScreen />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}
export default Tuiter;
