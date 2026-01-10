import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import omdb from "../../api/omdb";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await omdb.get("", {
        params: { i: id, plot: "full" },
      });
      setMovie(res.data);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const storedRatings =
      JSON.parse(localStorage.getItem("movieStarRatings")) || {};

    if (storedRatings[id]) {
      setRating(storedRatings[id]);
    }
  }, [id]);

  const handleStarClick = (star) => {
    const storedRatings =
      JSON.parse(localStorage.getItem("movieStarRatings")) || {};

    storedRatings[id] = star;

    localStorage.setItem("movieStarRatings", JSON.stringify(storedRatings));

    setRating(star);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-black text-white min-h-screen">
      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Poster */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-[280px] md:w-[300px] h-[400px] rounded-2xl shadow-2xl ring-2 ring-gray-700 mx-auto md:mx-0"
          />

          {/* Text */}
          <div>
            <p className="text-whie text-xl font-semibold mb-2">
              It's on{" "}
              <span className="text-cyan-400 font-sarif">Amazon Prime</span>
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.Title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-5">
              <span>{movie.Year}</span>
              <span>•</span>
              <span>{movie.Runtime}</span>
              <span>•</span>
              <span>{movie.Genre}</span>
              <span className="border border-gray-600 px-2 rounded text-xs">
                {movie.Rated}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl mb-8 line-clamp-4">
              {movie.Plot}
            </p>

            {/* Meta Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="text-gray-500">Director:</span>{" "}
                {movie.Director}
              </p>
              <p>
                <span className="text-gray-500">Writer:</span> {movie.Writer}
              </p>
              <p>
                <span className="text-gray-500">Stars:</span> {movie.Actors}
              </p>
              <p>
                <span className="text-gray-500">Language:</span>{" "}
                {movie.Language}
              </p>
              <p>
                <span className="text-gray-500">Country:</span> {movie.Country}
              </p>

              <div className="pt-6 flex items-center gap-3">
                <span className="bg-yellow-200 text-black px-3 py-1 rounded font-semibold">
                  ⭐ {movie.imdbRating}
                </span>
                <span className="text-gray-400 text-xs">
                  {movie.imdbVotes} votes
                </span>
              </div>
            </div>

            {/* rating system we want add */}
            <div className="flex items-center gap-6 mt-8">
              {/* Label */}
             <span className="px-3 py-1 text-xs tracking-wide text-gray-300 border border-gray-700 rounded-full">
  Rate this title
</span>

              {/* Stars */}
              <div className="flex items-center gap-1 bg-[#111] px-4 py-2 rounded-2xl border border-gray-800">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition transform hover:scale-110"
                  >
                    <span
                      className={`text-2xl ${
                        star <= (hoverRating || rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>

              {/* Rating Text */}
              {rating > 0 && (
                <span className="text-sm text-gray-400">
                  You rated this{" "}
                  <span className="text-white font-medium">{rating}/5</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default MovieDetails;
