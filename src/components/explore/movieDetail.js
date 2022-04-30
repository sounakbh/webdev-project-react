import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const MovieDetail = ({movieID}) => {
    const [movieDetails, setMovieDetails] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleId = useSelector(state => state.userReducer.roleId);
    
    useEffect(() => {
        const API_KEY = "93a17f12";
        axios
            .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`)
            .then((res) => res.data)
            .then((data) => {
                setMovieDetails(data);
            });
    }, [movieID]);
    
    return movieDetails && movieID ? (
        <div className="card mb-3 shadow">
            <div className="text-right">
                {
                    roleId !== undefined && roleId > 0 &&
                        <div className="card-header">
                            <Button
                                onClick={() => navigate(`/explore/movie/${movieID}`)}
                                type="button" variant="contained"
                            >
                                Learn More
                            </Button>
                        
                        </div>
                }
                {
                    (roleId !== undefined && roleId === 0) &&
                    <div className="card-header">
                        <Tooltip title="You should be a premium user to view this">
                            <div>
                        <Button
                            onClick={() => navigate(`/explore/movie/${movieID}`)}
                            type="button" variant="contained"
                             disabled={true}
                        >
                            Learn More
                        </Button>
                            </div>
                        </Tooltip>
                    </div>
                }
                {
                    roleId === undefined &&
                    <div className="card-header">
                        <Tooltip title="Please login to view this   ">
                            <div>
                                <Button
                                    onClick={() => navigate(`/explore/movie/${movieID}`)}
                                    type="button" variant="contained"
                                    disabled={true}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </Tooltip>
                    </div>
                }
            </div>
            <div className="card-body">
                <i
                    onClick={() => dispatch({type: "update-movie-id", movieID: ""})}
                    className="fa fa-times"
                    aria-hidden="true"
                ></i>
                
                <h5 className="card-title text-center">{movieDetails.Title}</h5>
                <h6 className="card-subtitle text-muted">
                    Starring: {movieDetails.Actors}
                </h6>
            </div>
            <div className="card-body text-center">
                <img className="img-fluid" src={movieDetails.Poster}/>
                <p className="card-text">{movieDetails.Plot}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Genre: {movieDetails.Genre}</li>
                <li className="list-group-item">Runtime: {movieDetails.Runtime}</li>
                <li className="list-group-item">
                    IMDB Rating: {movieDetails.imdbRating}
                </li>
            </ul>
        </div>
    ) : (
        <></>
    );
};

export default MovieDetail;
