import { Link } from 'react-router-dom';
import { Wrapper } from './ErrorPage.styled';

const ErrorPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Wrapper>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
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
          <button onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
