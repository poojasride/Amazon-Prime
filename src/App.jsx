import Header from "./componants/ui/Header";
import Hero from "./componants/ui/Hero";
import Movies from "./componants/ui/Movies";
import { Routes, Route } from "react-router-dom";


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
       
      </Routes>
    </>
  );
}

export default App;
