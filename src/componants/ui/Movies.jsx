import MovieRow from "../MovieRow";

const Movies = () => {
  const moviesCategories = [
    { title: "Action Movies", keyword: "action", key: 1 },
    { title: "Superhero Movies", keyword: "marvel", key: 2 },
    { title: "Movies in English", keyword: "english", key: 3 },
    { title: "Top Movies", keyword: "top", key: 4 },
    { title: "Romance Movies", keyword: "love", key: 5 },
  ];
  return (
    <div className="bg-black max-w-[vh] px-6 py-6">
      {moviesCategories.map((category) => (
        <MovieRow key={category.key} title={category.title} keyword={category.keyword} />
      ))}
    </div>
  );
};

export default Movies;
