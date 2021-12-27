const MovieDisplay = (props) => {
  const loaded = () => {
    return (
      <>
        <h1>{props.movie.Title}</h1>
        <h2>{props.movie.Genre}</h2>
        <img src={props.movie.Poster} alt={props.movie.Title} />
        <h2>{props.movie.Year}</h2>
      </>
    );
  };

  const loading = () => <h1>No Film To Display</h1>;

  //   if (props.movie) {
  //     return loaded();
  //   } else {
  //     return loading();
  //   }

  return props.movie ? loaded() : loading();
};

export default MovieDisplay;
