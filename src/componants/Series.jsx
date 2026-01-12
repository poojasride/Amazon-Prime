import MovieRow from "./ui/MovieRow";

const Series = () => {
  const seriesCategories = [
    { title: "Popular TV Series", keyword: "series", key: 101, type: "series" },
    { title: "Crime & Thriller Shows", keyword: "crime", key: 102, type: "series" },
    { title: "Mystery & Adventure Series", keyword: "mystery", key: 103, type: "series" },
    { title: "Drama TV Shows", keyword: "drama", key: 104, type: "series" },
    { title: "Comedy Series", keyword: "comedy", key: 105, type: "series" },
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-6">
      {seriesCategories.map((category) => (
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

export default Series;
