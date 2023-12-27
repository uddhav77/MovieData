import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

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
    <div className="bg-slate-300">
      <div className="text-center font-bold text-2xl pb-4">
        Top Rated Movies
      </div>
      <div className="flex flex-wrap pt-4 gap-8 w-full justify-center">
        {movie.map((items) => (
          <div
            key={items.id}
            className="shadow-xl bg-gray-300 p-4 relative w-64"
          >
            <Link to={`/moviedetails/${items.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                alt={items.title}
                className="h-72 w-full"
              />
              <div className="text-xl text-center mt-2 w-48 h-24 font-semi uppercase">
                {items.title}
              </div>
              <div className="absolute top-4 p-1 bg-white rounded-ee-xl flex items-center">
                <span>{<FaStar fill="#FFFF00" />}</span>
                {items.vote_average}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
