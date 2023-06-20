import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Logo, Navigation } from 'components';
import {
  AppHeader,
  AppBar,
  MainSection,
  Footer,
} from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar>
            <Logo />
            <Navigation />
          </AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection>
          <Outlet />
        </MainSection>
      </Container>
      <Footer>
        Developed by{' '}
        <Link to="https://github.com/Olena1010" target="_blank">
          Olena Boichenko
        </Link>{' '}
        <span>|</span> 2023 <span>|</span>
      </Footer>
    </>
  );
};

export default SharedLayout;
