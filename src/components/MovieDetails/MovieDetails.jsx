import PropTypes from 'prop-types';
import { IoIosFilm } from 'react-icons/io';
import {
  MovieWrapper,
  MoviePoster,
  InfoWrapper,
  ReleaseStatus,
  MovieRelease,
  MovieRating,
  VoteNum,
  VoteNumTo,
  GenresName,
  GenresList,
  GenresItem,
  MovieOverview,
  MovieHomepage,
} from './MovieDetails.styled';
import defaultPoster from '../../images/noPoster.png';

const MovieDetails = ({ movieData }) => {
  const {
    poster_path,
    genres,
    homepage,
    overview,
    release_date,
    status,
    title,
    vote_average,
  } = movieData;

  const releaseDate = new Date(release_date);

  return (
    <MovieWrapper>
      <MoviePoster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultPoster
        }
        alt={title}
      />
      <InfoWrapper>
        <ReleaseStatus>Status: {status}</ReleaseStatus>
        <MovieRelease>
          Release date:{' '}
          {release_date !== 0 ? releaseDate.toLocaleDateString() : 'unknown'}
        </MovieRelease>
        <MovieRating>
          Rating:{' '}
          <VoteNum>{vote_average !== 0 ? vote_average : 'unrated'}</VoteNum>
        </MovieRating>
        {genres.length > 0 && (
          <>
            <GenresName>Genres: </GenresName>
            <GenresList>
              {genres.map(({ id, name }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
            </GenresList>
          </>
        )}
        {overview ? (
          <MovieOverview>{overview}</MovieOverview>
        ) : (
          <MovieOverview>Overview is absent.</MovieOverview>
        )}
        {homepage && (
          <VoteNumTo>
            <IoIosFilm size={36} color="#ffd700" />
            <MovieHomepage href={homepage} target="_blank">
              {homepage}
            </MovieHomepage>
          </VoteNumTo>
        )}
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default MovieDetails;
