import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from ' services/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const moviesList = async () => {
      try {
        setError(null);
        const { results } = await getTrendMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      }
    };
    moviesList();
  }, [setMovies]);

  const element = movies.map(({ id, title, name }) => (
    <li key={id}>
      <Link movies={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));
  return (
    <ul>
      {error && <p>No film founded</p>}
      {element}
    </ul>
  );
};

export default Movies;
