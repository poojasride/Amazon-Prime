import Header from "./componants/ui/Header";
import Hero from "./componants/ui/Hero";
import Movies from "./componants/ui/Movies";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./componants/ui/MovieDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/movies"
          element={
            <>
              <Movies />
            </>
          }
        />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
