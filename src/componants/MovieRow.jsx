import { useEffect, useState } from "react";
import omdb from "../api/omdb";

const MovieRow = ({ title, keyword }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await omdb.get("", {
        params: {
          s: keyword,
          type: "movie",
          page: 1,
        },
      });

      if (res.data.Search) {
        setMovies(res.data.Search);
      }
    };

    fetchMovies();
  }, [keyword]);

  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>

      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="relative group min-w-[180px] cursor-pointer transform hover:scale-105 transition duration-300"
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.Title}
              className="rounded-lg object-cover w-full h-[260px] object-cover transform transition duration-300 group-hover:scale-110 "
            />
            <div
              className="absolute inset-0 bg-black/80 text-white
             opacity-0 group-hover:opacity-100
             transition duration-300
             rounded-lg p-3 flex flex-col justify-end"
            >
              <h3 className="text-sm font-bold">{movie.Title}</h3>

              <p className="text-xs text-gray-300">
                {movie.Year} • {movie.Type}
              </p>

              <button className="mt-2 bg-green-400 text-black text-xs px-3 py-1 rounded">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
