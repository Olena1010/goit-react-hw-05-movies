import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  padding: 50px;
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 760px) {
    margin: 100px auto 100px auto;
  }
  @media screen and (min-width: 1280px) {
    margin: 100px auto 250px auto;
  }
`;

export const WelcomeText = styled.p`
  font-size: 42px;
  letter-spacing: 3px;
  text-align: center;
  color: #2a2a2a;
`;
