import React from 'react';
import Container from 'components/Container/Container';
import { Logo } from 'components';
import { AppHeader, AppBar } from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar>
            <Logo />
          </AppBar>
        </Container>
      </AppHeader>
    </>
  );
};

export default SharedLayout;
