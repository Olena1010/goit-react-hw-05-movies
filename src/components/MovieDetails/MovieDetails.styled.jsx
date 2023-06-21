import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
 @media screen and (min-width: 760px) {  
display: flex;}
`;

export const MoviePoster = styled.img`
  width: 340px;
  padding: 20px;
`;

export const InfoWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const ReleaseStatus = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const MovieRelease = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  color: #191970;
`;

export const MovieRating = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  
`;

export const VoteNum = styled.span`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #ffd700;
  text-shadow: 1px 0 11px rgb(255 0 0 / 90%);
`;

export const GenresName = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  
`;

export const GenresList = styled.ul`
  margin-bottom: 5px;
`;

export const GenresItem = styled.li`
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 15px;
`;

export const MovieOverview = styled.p`
  font-size: 18px;
  margin-top: 30px;
`;

export const MovieHomepage = styled.a`
  font-size: 10px;
  margin-top: 30px;
  color: #191970;
  &:hover {
    color: #800000;
  }
  @media screen and (min-width: 760px) {
    font-size: 18px;
    letter-spacing: 1px;
  }
`;
// IoIosFilm
//TfiVideoClapper