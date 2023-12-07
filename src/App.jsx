import { Route, Routes } from "react-router-dom";
import CreatNewMovie from "./components/CreatNewMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import movieCollection from "./data";
import { useMemo, useState } from "react";
import MoviePlace from "./components/MoviePlace";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import MovieLayout from "./layout/MovieLayout";

function App() {
  return (
    <div>
      {/* Our Navbar component */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movieplace" element={<MovieLayout />}>
          <Route index element={<MoviePlace />} />
          <Route path=":movId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
