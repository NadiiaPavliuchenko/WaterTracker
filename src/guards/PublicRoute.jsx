import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from '../store/auth/authSelectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(getToken);

  return token ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
