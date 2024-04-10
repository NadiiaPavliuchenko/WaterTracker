import Wrapper from 'components/Wrapper/Wrapper';
import { Container, Title } from './TeamPage.styled';
import AD from '../../assets/images/team/AD.png';
import AK from '../../assets/images/team/AK.png';
import BS from '../../assets/images/team/BS.png';
import DD from '../../assets/images/team/DD.png';
import II from '../../assets/images/team/II.png';
import IT from '../../assets/images/team/IT.png';
import NP from '../../assets/images/team/NP.png';
import OP from '../../assets/images/team/OP.png';
import SK from '../../assets/images/team/SK.png';
import SO from '../../assets/images/team/SO.png';
import NoFoto from '../../assets/images/team/nofoto.png';
import VS from '../../assets/images/team/VS.png';

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
                <div className="img-container">
                  <img src={NP} alt="Nadiia Pavliuchenko" />
                </div>
                <div className="desc-container">
                  <h3>
                    Nadiia Pavliuchenko, <span>TechLeader, Developer</span>
                  </h3>
                  <p>
                    Developed part: deployment of a server for development,
                    routes, SettingsModal, implementation of dark and light
                    themes
                  </p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/andrii-dovhaniuk-ua/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={AD} alt="Andrii Dovhaniuk" />
                </div>
                <div className="desc-container">
                  <h3>
                    Andrii Dovhaniuk, <span>SCRUM, Developer</span>
                  </h3>
                  <p>
                    Developed part: redux state, api thunks, addWaterModal,
                    animation, loader, 404 page, deleteUserModal/Form,
                    modalContainer, wrapper, recoveryModal/Form,
                    resendCodeModal/Form, userLogoutModal, waterRatioPanel,
                    notifications, services, help with complex issues.
                  </p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/andrii-koliadenko/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={AK} alt="Andrii Koliadenko" />
                </div>
                <div className="desc-container">
                  <h3>
                    Andrii Koliadenko, <span>Developer</span>
                  </h3>
                  <p>Developed part: Calendar, TodayListModal</p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href=" https://www.linkedin.com/in/ivan-imenynnyk/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={II} alt="Ivan Imenynnyk" />
                </div>
                <div className="desc-container">
                  <h3>
                    Ivan Imenynnyk, <span>Developer</span>
                  </h3>
                  <p>Developed part: DailyNormaModal</p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/irynatrysh/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={IT} alt="Iryna Trysh" />
                </div>
                <div className="desc-container">
                  <h3>
                    Iryna Trysh, <span>Developer</span>
                  </h3>
                  <p>Developed part: HomePage</p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/bogdan-solomich/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={BS} alt="Bohdan Solomych" />
                </div>
                <div className="desc-container">
                  <h3>
                    Bohdan Solomych, <span>Developer</span>
                  </h3>
                  <p>Developed part: Header, UserLogo</p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/dana-dobryshkina-ua"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={DD} alt="Dana Dobryshkina" />
                </div>
                <div className="desc-container">
                  <h3>
                    Dana Dobryshkina, <span>Developer</span>
                  </h3>
                  <p>
                    Developed part: WelcomePage, WhyDrinkWater, Main,
                    WaterTrackerConsumption, partially DailyNorma
                  </p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/volodymyr-shevchenko-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={VS} alt=" Volodymyr Shevchenko" />
                </div>
                <div className="desc-container">
                  <h3>
                    Volodymyr Shevchenko, <span>Developer</span>
                  </h3>
                  <p>
                    Developed part: SignInPage, SignUpPage, SignIn/SignUp form,
                    TodayWaterList, DeleteWaterIntakesModal
                  </p>
                </div>
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
                <div className="img-container">
                  <img src={SO} alt="Svitlana Otenko" />
                </div>
                <div className="desc-container">
                  <h3>
                    Svitlana Otenko, <span>TechLeader, Developer</span>
                  </h3>
                  <p>
                    Developed part: backend: deployment of a server for
                    development, database, routes, controllers (authControllers,
                    monthControllers, todayControllers, userControllers,
                    waterControllers, waterRateControllers), services and
                    middleware, implementation of sending emails, storing images
                    in the cloud, help with complex issues, frontend: help with
                    complex issues
                  </p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={SK} alt="Serhii Krysiuk" />
                </div>

                <div className="desc-container">
                  <h3>
                    Serhii Krysiuk, <span>Developer</span>
                  </h3>
                  <p>
                    Developed part: partially updateWaterIntakeRecord,
                    removeWaterIntakeRecord, sendPasswordRecoveryEmail and
                    recoverPassword, frontend: UserLogoModal, styling DailyNorma
                  </p>
                </div>
              </a>
            </li>
            <li className="member">
              <a
                href="https://www.linkedin.com/in/oleksiy-pokormyakho/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="img-container">
                  <img src={OP} alt="Oleksii Pokormiakho" />
                </div>{' '}
                <div className="desc-container">
                  <h3>
                    Oleksii Pokormiakho, <span>Developer</span>
                  </h3>
                  <p>Developed part: Swagger endpoint documentation</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TeamPage;
