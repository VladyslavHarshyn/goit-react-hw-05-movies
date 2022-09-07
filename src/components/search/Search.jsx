import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getSearchMovie } from ' services/API';

import { Box, SearchForm, Button } from './Search.styled';

const SearchMovie = ({ items }) => {
  const location = useLocation();

  const el = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));

  return <ul>{el}</ul>;
};

const Search = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('query');

  useEffect(() => {
    const searchOfName = async () => {
      try {
        setError(null);
        const { results } = await getSearchMovie(q);
        setState(results);
      } catch (error) {
        setError(error);
      }
    };
    if (q) {
      searchOfName();
    }
  }, [setState, q]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.input.value;
    setSearchParams({ query });
  };

  return (
    <Box>
      {error && <p>Не удалось загрузить фильм</p>}
      <SearchForm onSubmit={onSubmit}>
        <input name="input" type="text" />
        <Button type="submit">Search</Button>
      </SearchForm>
      <SearchMovie items={state} />
    </Box>
  );
};

export default Search;
