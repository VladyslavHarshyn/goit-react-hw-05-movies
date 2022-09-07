import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { getMoviesById } from ' services/API';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchById = async () => {
      try {
        setError(null);
        const data = await getMoviesById(id);
        setState(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchById();
  }, [setError, setState, id]);

  const goBack = () => navigate(from);

  const {
    poster_path,
    title,
    name,
    overview,
    genres,
    release_date,
    vote_average,
  } = state;

  return (
    <>
      {error}
      <button onClick={goBack} type="button">
        ← Go back
      </button>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Poster"
        />
        <div>
          <h1>
            {title || name} ({release_date && release_date.slice(0, -6)})
          </h1>
          <p>User rating: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres &&
              genres.map(({ name }) => {
                return `${name} `;
              })}
          </p>
        </div>
      </div>
      <div>
        <Link state={{ from }} to={`/movies/${id}/cast`}>
          Cast
        </Link>
        <Link state={{ from }} to={`/movies/${id}/reviews`}>
          Reviews
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
