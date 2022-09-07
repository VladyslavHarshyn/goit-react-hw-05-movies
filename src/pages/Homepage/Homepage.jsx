import Movies from 'components/movies/Movies';

const Homepage = () => {
  return (
    <>
      <h1>Trending today</h1>
      <div>
        <Movies />
      </div>
    </>
  );
};

export default Homepage;
