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
import VS from '../../assets/images/team/VS.png';
import { Container, Title } from './TeamPage.styled';
import Wrapper from '../../components/Wrapper/Wrapper';
import BubblesAnimation from '../../components/Animation/BubblesAnimation';

const TeamPage = () => {
  return (
    <Wrapper>
      <BubblesAnimation />

      <Title>Our team IT Froggs</Title>
      <Container>
        <ul className="members">
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
                  <b>Developed part:</b> backend: deployment of a server for
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
                  <b>Developed part:</b> deployment of a server for development,
                  routes, SettingsModal, implementation of dark and light themes
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
                  <b>Developed part:</b> redux state, api thunks, addWaterModal,
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
                <p>
                  <b>Developed part:</b> Calendar, TodayListModal
                </p>
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
                <p>
                  <b>Developed part:</b> DailyNormaModal
                </p>
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
                <p>
                  <b>Developed part:</b> HomePage
                </p>
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
                <p>
                  <b>Developed part:</b> Header, UserLogo
                </p>
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
                  <b>Developed part:</b> WelcomePage, WhyDrinkWater, Main,
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
                  <b>Developed part:</b> SignInPage, SignUpPage, SignIn/SignUp
                  form, TodayWaterList, DeleteWaterIntakesModal
                </p>
              </div>
            </a>
          </li>

          <li className="member">
            <a
              href="https://www.linkedin.com/in/serhii-krysiuk-4330052ab/"
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
                  <b>Developed part:</b> partially updateWaterIntakeRecord,
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
                <p>
                  <b>Developed part:</b> Swagger endpoint documentation
                </p>
              </div>
            </a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default TeamPage;
