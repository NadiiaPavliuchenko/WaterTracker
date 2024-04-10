import { Link } from 'react-router-dom';
import { Wrapper } from './ErrorPage.styled';
import BubblesAnimation from '../../components/Animation/BubblesAnimation';

const ErrorPage = () => {
  return (
    <Wrapper>
      <BubblesAnimation />
      <div className="main">
        <h1>404</h1>
        <p>
          It looks like you&apos;re lost...
          <br />
          That&apos;s a trouble?
        </p>
        <div className="buttons">
          <Link to="/home">
            <button>Go to Home</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
