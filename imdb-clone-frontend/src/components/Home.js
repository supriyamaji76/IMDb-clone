import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        console.log("Movies data:", response.data); // Log the data
        setMovies(response.data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="container">
      {movies.length === 0 ? (
        <div className="no-movies">No movies available</div>
      ) : (
        movies.map((movie) => (
          <div key={movie._id} className="movie">
            <h2>{movie.title}</h2>
            <p>{movie.shortDescription}</p>
            <img src={movie.image} alt={movie.title} />
            <Link to={`/movies/${movie._id}`}>More details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
