import { useEffect, useState } from "react";
import omdb from "../api/omdb";
import MovieDetails from "./ui/MovieDetails";
import { Link } from "react-router-dom";

const MovieRow = ({ title, keyword }) => {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await omdb.get("", {
        params: {
          i: "tt3896198",
          s: keyword,
          type: "movie",
          page: 1,
        },
      });

      if (res.data.Search) {
        {
          console.log(res);
        }
        setMovies(res.data.Search);
      }
    };

    fetchMovies();
  }, [keyword]);

  // fetch once per movie (cached)
  const fetchDetails = async (id) => {
    if (details[id]) return;

    const res = await omdb.get("", {
      params: { i: id, plot: "short" },
    });

    setDetails((data) => ({
      ...data,
      [id]: res.data,
    }));
  };

  return (
    <div className="mb-10">
      <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>

      {/* WRAPPER FIX */}
      <div className="relative">
        <div className="flex space-x-4 scrollbar-hide pb-2">
          {movies
            .filter((m) => m.imdbID)
            .map((movie) => (
              <div
                key={movie.imdbID}
                className="relative min-w-[200px] group cursor-pointer overflow-visible "
                onMouseEnter={() => fetchDetails(movie.imdbID) }
              >
                <div>
                  {/* IMAGE */}
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.Title}
                    className="w-full h-[260px] rounded-xl object-cover
                             transition-transform duration-300
                             group-hover:scale-105 group-hover:rounded-b-xs"
                  />

                  {details[movie.imdbID] && (
                    <div
                      className=" absolute left-1/2 -translate-x-1/2 translate-y-6 w-[240px] h-[140px]  bg-black text-white
                                   rounded-xl shadow-2xl  z-50  opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"
                    >
                      <div className="px-4">
                        <h2 className="text-lg font-bold  line-clamp-1">
                          {details[movie.imdbID].Title}
                        </h2>

                        <p className="text-xs text-white/70 mt-1">
                          {details[movie.imdbID].Year} •{" "}
                          {details[movie.imdbID].Runtime}
                        </p>

                        <p className="text-xs mt-2 text-white/70 line-clamp-2">
                          {details[movie.imdbID].Plot}
                        </p>

                        <Link
                          to={`/movie-details/${movie.imdbID}`}
                          className="inline-flex items-center gap-2
             mt-3 text-xs bg-white text-black
             px-3 py-1.5 rounded-full
             hover:bg-gray-200 transition"
          
                        >
                          ▶ View Details
                        
                         
                        </Link>
                         
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
