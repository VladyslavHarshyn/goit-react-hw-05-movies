import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInfo } from ' services/API';

import { Author, Item } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { results } = await getInfo(id, 'reviews');
        setReview(results);
      } catch (error) {
        setError(error);
      }
    };
    fetchReview();
  }, [id]);

  const items = review.map(({ content, author, id }) => (
    <Item key={id}>
      <Author>{author}</Author>
      <p>{content}</p>
    </Item>
  ));

  return (
    <ul>
      {error && <p>Не удалось загрузить отзывы</p>}
      {items}
    </ul>
  );
};

export default Reviews;
