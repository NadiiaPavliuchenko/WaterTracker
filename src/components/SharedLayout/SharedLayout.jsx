import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Loader from '../Loader/Loader';
import { Footer } from '../Footer/Footer';
import { Content, MainContent } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Content>
      <Header />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContent>
      <Footer />
    </Content>
  );
};

export default SharedLayout;
