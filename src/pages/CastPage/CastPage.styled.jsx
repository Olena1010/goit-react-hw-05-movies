import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  padding: 20px;
`;

export const CastList = styled.ul`
  padding: 20px;
  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
  }
`;

export const NoCastText = styled.p`
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 15px;
  text-align: center;
  padding: 10px 0 20px 0;
`;

export const BtnWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;
