import styled from '@emotion/styled';

export const AppHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: rgba(3, 37, 65);
  box-shadow: 0 10px 10px -5px rgb(70, 130, 180);
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MainSection = styled.main`
  margin-bottom: 20px;
`;
export const Footer = styled.footer`
  top: 0;
  left: 0;
  position: sticky;
  // z-index: 1100;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 20px;
  padding-bottom: 12px;
  background: rgba(3, 37, 65);
  box-shadow: 1px -10px 10px 0px rgb(70, 130, 180);
  color: #ffffff;
  text-align: center;
  font-weight: 600;
`;