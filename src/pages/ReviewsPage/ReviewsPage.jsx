import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesAPI';
import { ButtonLink, Loader, ReviewCard } from '../../components/index';
import {
  LoaderWrapper,
  ReviewsList,
  NoReviewsText,
  BtnWrapper,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(response => setReviews(response.data.results))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const fromPage = location.state?.from ?? '/';

  return (
    <>
      {reviews.length > 0 ? (
        <>
          <ReviewsList>
            {reviews.map(({ id, ...props }) => (
              <ReviewCard key={id} {...props} />
            ))}
          </ReviewsList>
          <BtnWrapper>
            <ButtonLink
              to={`/movies/${movieId}`}
              text="Close"
              state={{ from: fromPage }}
            />
          </BtnWrapper>
        </>
      ) : (
        <>
          <NoReviewsText>
            Sorry, we can not find any reviews for this movie
          </NoReviewsText>
          <BtnWrapper>
            <ButtonLink
              to={`/movies/${movieId}`}
              text="Close"
              state={{ from: fromPage }}
            />
          </BtnWrapper>
        </>
      )}
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </>
  );
};

export default ReviewsPage;
