import MovieRow from "./ui/MovieRow";

const Episodes = () => {
  const episodeCategories = [
    {
      title: "Adventure TV Series",
      keyword: "adventure",
      key: 205,
      type: "series",
    },
    { title: "Top Rated TV Shows", keyword: "top", key: 201, type: "series" },

    {
      title: "Hollywood TV Series",
      keyword: "hollywood",
      key: 201,
      type: "series",
    },

    {
      title: "English Language Series",
      keyword: "english",
      key: 201,
      type: "series",
    },

    { title: "Drama TV Series", keyword: "drama", key: 201, type: "series" },
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-6">
      {episodeCategories.map((category) => (
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

export default Episodes;
