import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const API_KEY = "98e3fb1f";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_KEY}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Twilight");
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
