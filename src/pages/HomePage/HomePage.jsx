import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { PageHeading, MoviesGallery } from '../../components/index';
import { TextWrapper, NoMovieText, Wrapper } from './HomePage.styled';
import { FcFilmReel } from 'react-icons/fc';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <Wrapper>
        <PageHeading text="Trending today" />
        <FcFilmReel />
      </Wrapper>
      {movies && <MoviesGallery moviesSet={movies} />}
      {movies && movies.length === 0 && (
        <TextWrapper>
          <NoMovieText>
            All filmmakers are on holiday. <br /> There are no trending movies
            for now.
          </NoMovieText>
        </TextWrapper>
      )}
    </>
  );
};

export default HomePage;
