import MovieRow from "./ui/MovieRow";

const Episodes = () => {
  const episodeCategories = [
    { title: "Latest Episodes", keyword: "episode", key: 201, type: "episode" },
    // { title: "Popular TV Episodes", keyword: "season", key: 202, type: "episode" },
    // { title: "Drama Episodes", keyword: "drama", key: 203, type: "episode" },
    // { title: "Crime Episodes", keyword: "crime", key: 204, type: "episode" },
    // { title: "Mystery Episodes", keyword: "mystery", key: 205, type: "episode" },
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
