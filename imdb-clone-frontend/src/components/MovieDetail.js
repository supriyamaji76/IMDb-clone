import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((response) => {
        console.log("Movie detail data:", response.data); // Log the data
        setMovie(response.data);
      })
      .catch((error) => console.error("Error fetching movie detail:", error));
  }, [id]);

  if (!movie) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.longDescription}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
