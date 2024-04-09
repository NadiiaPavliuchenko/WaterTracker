import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PublicRoute from '../../guards/PublicRoute';
import PrivateRoute from '../../guards/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../store/auth/authOperations';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const SigninPage = lazy(() => import('../../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../../pages/SignupPage/SignupPage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const TeamPage = lazy(() => import('../../pages/TeamPage/TeamPage'));
const VerificationPage = lazy(() =>
  import('../../pages/VerificationPage/VerificationPage')
);
const RecoveryPage = lazy(() =>
  import('../../pages/RecoveryPage/RecoveryPage')
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="home"
          element={
            <PrivateRoute redirectTo="/signin" component={<HomePage />} />
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute redirectTo="/home" component={<SigninPage />} />
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute redirectTo="/home" component={<SignupPage />} />
          }
        />
        <Route
          path="verification/:verificationToken"
          element={
            <PublicRoute redirectTo="/home" component={<VerificationPage />} />
          }
        />
        <Route
          path="recovery/:recoveryToken"
          element={
            <PublicRoute redirectTo="/home" component={<RecoveryPage />} />
          }
        />
        <Route
          path="team"
          element={<PublicRoute redirectTo="/home" component={<TeamPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
