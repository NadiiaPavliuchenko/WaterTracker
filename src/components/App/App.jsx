import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PublicRoute from '../../guards/PublicRoute';
import PrivateRoute from '../../guards/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const SigninPage = lazy(() => import('../../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../../pages/SignupPage/SignupPage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="home"
          element={
            <PrivateRoute
              redirectTo="/signin"
              component={<HomePage />}
            ></PrivateRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute
              redirectTo="/home"
              component={<SigninPage />}
            ></PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute
              redirectTo="/home"
              component={<SignupPage />}
            ></PublicRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
