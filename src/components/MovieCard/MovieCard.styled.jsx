import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  overflow: hidden;
  border-radius: 10px;
  color: #ffffff;
  background-color: #4682b4;
  box-shadow: 0px 1px 3px 0px rgba(237, 70, 47, 0.2),
    0px 1px 1px 0px rgba(237, 70, 47, 0.14),
    0px 2px 1px -1px rgba(237, 70, 47, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
`;

export const MovieImg = styled.img`
  width: 170px;
  height: 250px;
  object-fit: contain;
`;

export const InfoWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MovieName = styled.h3`
  width: 172px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 20px;
  text-shadow: -2px 4px 4px rgb(0 0 0 / 80%);
`;

export const Line = styled.hr`
  width: 172px;
  border: 1px solid #f32121;
`;

export const MovieRelease = styled.span`
  font-size: 20px;
  font-weight: 700;
  // text-align: center;
`;

export const MovieRating = styled.span`
  font-size: 16px;
  // text-align: center;
`;

export const VoteNum = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #191970;;
`;
