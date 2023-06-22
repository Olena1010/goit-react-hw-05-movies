import styled from '@emotion/styled';

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(120vw - 48px);
  grid-gap: 16px;
  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
