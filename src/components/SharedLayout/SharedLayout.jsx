import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';//Link
import { Toaster } from 'react-hot-toast';
import { Logo, Navigation, Loader, Container} from 'components';
import {
  Header,
  AppBar,
  MainSection,
  Footer,
  Wrapper,
} from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <AppBar>
            <Logo />
            <Navigation />
          </AppBar>
        </Container>
      </Header>
      <Container>
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
            <Toaster position="top-right" reverseOrder={false} />
          </Suspense>
        </MainSection>
      </Container>
      <Footer>
        <Container>
          Developed by{' '}
          <Link to="https://github.com/Olena1010" target="_blank">
            Olena Boichenko
          </Link>{' '}
          <span>|</span> 2023 <span>|</span>
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default SharedLayout;
