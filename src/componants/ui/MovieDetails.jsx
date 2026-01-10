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
    <div className="bg-gradient-to-b from-black via-[#050505] to-black text-white min-h-screen">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-start">
          {/* POSTER */}
          <div className="relative mx-auto lg:mx-0">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-[300px] h-[450px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            {/* Platform */}
            <p className="text-sm tracking-wide text-gray-400">
              Now streaming on{" "}
              <span className="text-cyan-400 font-semibold">Amazon Prime</span>
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {movie.Title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span>{movie.Year}</span>
              <span>•</span>
              <span>{movie.Runtime}</span>
              <span>•</span>
              <span>{movie.Genre}</span>
              <span className="border border-gray-700 px-2 py-0.5 rounded text-xs">
                {movie.Rated}
              </span>
            </div>

            {/* Plot */}
            <p className="text-gray-300 leading-relaxed max-w-3xl line-clamp-2">
              {movie.Plot}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-300">
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
            </div>

           

            {/* USER RATING */}
            <span className=" py-1 text-2xl tracking-wide text-gray-300">
              Rate this movie 🤩
            </span>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-1 bg-[#0d0d0d] px-4 py-2 rounded-2xl border border-gray-800">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-125"
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

              {rating > 0 && (
                <span className="text-sm text-gray-400">
                  You rated this{" "}
                  <span className="text-white font-medium">{rating}/5</span>
                </span>
              )}
            </div>

             {/* IMDb Rating */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-yellow-300 text-black px-4 py-2 rounded-xl font-semibold">
                ⭐ {movie.imdbRating}
              </div>
              <span className="text-xs text-gray-400">
                {movie.imdbVotes} IMDb votes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
