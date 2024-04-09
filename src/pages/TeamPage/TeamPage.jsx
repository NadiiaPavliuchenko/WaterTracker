import Wrapper from 'components/Wrapper/Wrapper';
import { Container, Title } from './TeamPage.styled';

const TeamPage = () => {
  return (
    <Wrapper>
      <Title>Our team IT Froggs</Title>
      <Container>
        <div className="front-end">
          <h2 className="front-end-title">Frontend</h2>
          <ul className="membersFront">
            <li className="member">
              <a
                href="www.linkedin.com/in/nadiia-pavliuchenko"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Nadiia Pavliuchenko</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a href="">
                <img src="" alt="" />
                <h3>Andrii Dovhaniuk</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/andrii-koliadenko/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Andrii Koliadenko</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a href="">
                <img src="" alt="" />
                <h3>Ivan Imenynnyk</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/irynatrysh/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Iryna Trysh</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/bogdan-solomich/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Bohdan Solomych</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/dana-dobryshkina-ua"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Dana Dobryshkina</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a href="">
                <img src="" alt="" />
                <h3>Volodymyr Shevchenko</h3>
                <p></p>
              </a>
            </li>
          </ul>
        </div>
        <div className="back-end">
          <h2 className="back-end-title">Backend</h2>
          <ul className="membersBack">
            <li className="member">
              <a
                href="https://www.linkedin.com/in/svitlana-otenko/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Svitlana Otenko</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="" alt="" />
                <h3>Serhii Krysiuk</h3>
                <p></p>
              </a>
            </li>
            <li className="member">
              <a href="">
                <img src="" alt="" />
                <h3>Oleksii Pokormiakho</h3>
                <p></p>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TeamPage;
