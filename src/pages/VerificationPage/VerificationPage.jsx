import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { verificateUser } from '../../store/auth/authOperations';
import { useDispatch } from 'react-redux';

const VerificationPage = () => {
  const [loading, setLoading] = useState(true);
  const { verificationToken } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const verify = async () => {
      try {
        await dispatch(verificateUser(verificationToken)).unwrap();

        setLoading(false);
        navigate('/signin');
      } catch (error) {
        navigate('/signup');
      }
    };

    verify();
  }, [dispatch, verificationToken, navigate]);

  if (loading) {
    return <Loader />;
  }

  return null;
};

export default VerificationPage;
