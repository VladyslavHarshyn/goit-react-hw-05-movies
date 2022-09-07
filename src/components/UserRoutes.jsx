import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const Search = lazy(() => import('../components/search/Search'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
