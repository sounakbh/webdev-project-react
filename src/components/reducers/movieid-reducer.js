const movieidReducer = (state = "", action) => {
  switch (action.type) {
    case "update-movie-id":
      return action.movieID;

    default:
      return state;
  }
};

export default movieidReducer;
