import MovieRow from "../MovieRow";

const Movies = () => {
  const moviesCategories = [
    { title: "Movies in English", keyword: "english" },
    { title: "Top Movies", keyword: "top" },
    { title: "Romance Movies", keyword: "love" },
    { title: "Action Movies", keyword: "action" },
    { title: "Superhero Movies", keyword: "marvel" },
  ];
  return (
    <div className="bg-black max-w-[vh] px-6 py-6">
      {moviesCategories.map((category) => (
        <MovieRow title={category.title} keyword={category.keyword} />
      ))}
    </div>
  );
};

export default Movies;
