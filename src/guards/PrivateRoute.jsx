import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from '../store/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
