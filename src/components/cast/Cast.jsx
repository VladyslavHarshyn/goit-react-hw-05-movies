import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInfo } from ' services/API';
import { List, ListElement } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setError(null);
        const { cast } = await getInfo(id, 'credits');
        setCastInfo(cast);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, [setCastInfo, id]);

  const elements = castInfo.map(
    ({ cast_id, name, character, profile_path }) => (
      <ListElement key={cast_id}>
        <img
          src={profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </ListElement>
    )
  );

  return (
    <List>
      {error && <p>Не удалось загрузить список актёров</p>}
      {elements}
    </List>
  );
};

export default Cast;
