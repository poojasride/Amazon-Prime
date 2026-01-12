import MovieRow from "./ui/MovieRow";

const Movies = () => {
  const moviesCategories = [
    { title: "Action Movies", keyword: "action", key: 1, type: "movie" },
    { title: "Superhero Movies", keyword: "marvel", key: 2, type: "movie" },
    { title: "Movies in English", keyword: "english", key: 3, type: "movie" },
    { title: "Top Movies", keyword: "top", key: 4, type: "movie" },
    { title: "Romance Movies", keyword: "love", key: 5, type: "movie" },
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-6">
      {moviesCategories.map((category) => (
        <MovieRow
          key={category.key}
          title={category.title}
          keyword={category.keyword}
          type={category.type}
        />
      ))}
    </div>
  );
};

export default Movies;
