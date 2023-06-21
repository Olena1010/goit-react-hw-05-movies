import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 1100;
  top: 0;
  padding: 15px;
  width: 100%;
  background: rgba(3, 37, 65);
  box-shadow: 0 10px 10px -5px rgb(70, 130, 180);
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MainSection = styled.main`
  // margin-bottom: 100px;
  padding-top: 100px;
`;
export const Footer = styled.footer`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  background: rgba(3, 37, 65);
  box-shadow: 1px -10px 10px 0px rgb(70, 130, 180);
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  overflow: hidden;
`;