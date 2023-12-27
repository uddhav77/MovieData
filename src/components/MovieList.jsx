import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=66f5919e810330e8457ceab84b6dc34c`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data.results);
    } catch (err) {
      console.log(`Error occured: ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {movie.map((items) => (
        <div key={items.id}>
          <div>{items.title}</div>
          <img
            src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
            alt={items.title}
          />
          <div>{items.vote_average}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
