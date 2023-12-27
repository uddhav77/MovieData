import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaSpinner } from "react-icons/fa";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=66f5919e810330e8457ceab84b6dc34c`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      console.log(`Error occurred: ${err}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin" size={40} />
        <p className="mt-4 text-gray-600">Loading Movies...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-300">
      <div className="text-center font-bold text-2xl pb-4">
        Top Rated Movies
      </div>
      <div className="flex flex-wrap pt-4 gap-8 w-full justify-center">
        {movies.map((item) => (
          <div
            key={item.id}
            className="shadow-xl bg-gray-300 p-4 relative w-64"
          >
            <Link to={`/moviedetails/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-72 w-full"
              />
              <div className="text-xl text-center mt-2 w-48 h-24 font-semi uppercase">
                {item.title}
              </div>
              <div className="absolute top-4 p-1 bg-white rounded-ee-xl flex items-center">
                <span>{<FaStar fill="#FFFF00" />}</span>
                {item.vote_average}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
