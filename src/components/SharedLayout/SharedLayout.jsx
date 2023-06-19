import React from 'react';
import Container from 'components/Container/Container';
import { AppHeader, AppBar, MainSection } from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar></AppBar>
        </Container>
      </AppHeader>
    </>
  );
};

export default SharedLayout;
