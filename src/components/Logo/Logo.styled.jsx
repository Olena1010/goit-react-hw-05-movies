import styled from '@emotion/styled';

export const AppName = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: -2px 4px 4px rgb(0 0 0 / 80%);
   @media screen and (max-width: 425px) {
  font-size: 34px;}

  svg {
    color: #ffd700;
    width: 45px;
    height: 50px;
    padding-top: 5px;
    @media screen and (min-width: 760px) {
      width: 60px;
      height: 60px;
      padding-top: 0px;
    }
  }
`;

export const AppNameExpansion = styled.span`
  @media screen and (max-width: 425px) {
    font-size: 34px;
  }
  // text-shadow: none;
`;

