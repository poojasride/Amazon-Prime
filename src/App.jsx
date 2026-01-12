import Header from "./componants/ui/Header";
import Hero from "./componants/ui/Hero";
import Movies from "./componants/Movies";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./componants/ui/MovieDetails";
import Series from "./componants/Series";
import Episodes from "./componants/Episodes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/series" element={<Series />} />
        <Route path="/episodes" element={<Episodes />} />
        
      </Routes>
    </>
  );
}

export default App;
