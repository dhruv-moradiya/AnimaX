import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Layout from "./layout/Layout";
import Movie from "./page/Movie";
import CharacterInfo from "./page/CharacterInfo";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Movie/:id" element={<Movie />} />
          <Route path="/CharacterInfo/:chraID" element={<CharacterInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
