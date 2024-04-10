import { motion } from 'framer-motion';
import { Container, Title } from './TeamPage.styled';
import Wrapper from '../../components/Wrapper/Wrapper';
import BubblesAnimation from '../../components/Animation/BubblesAnimation';
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

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Svitlana Otenko',
      image: SO,
      role: 'TechLeader, Developer',
      description:
        'backend: deployment of a server for development, database, routes, controllers (authControllers, monthControllers, todayControllers, userControllers, waterControllers, waterRateControllers), services and middleware, implementation of sending emails, storing images in the cloud, help with complex issues, frontend: help with complex issues',
      linkedin: 'https://www.linkedin.com/in/svitlana-otenko/',
    },
    {
      name: 'Nadiia Pavliuchenko',
      image: NP,
      role: 'TechLeader, Developer',
      description:
        'deployment of a server for development, architecture,, routes, SettingsModal, implementation of dark and light themes',
      linkedin: 'www.linkedin.com/in/nadiia-pavliuchenko',
    },
    {
      name: 'Andrii Dovhaniuk',
      image: AD,
      role: 'SCRUM, Developer',
      description:
        'redux state, api thunks, addWaterModal, animation, Loader, ErrorPage, deleteUserModal/Form, modalContainer, Wrapper, recoveryModal/Form, resendCodeModal/Form, userLogoutModal, waterRatioPanel, Notifications, services, help with complex issues',
      linkedin: 'https://www.linkedin.com/in/andrii-dovhaniuk-ua/',
    },
    {
      name: 'Andrii Koliadenko',
      image: AK,
      role: 'Developer',
      description: 'Calendar, TodayListModal',
      linkedin: 'https://www.linkedin.com/in/andrii-koliadenko/',
    },
    {
      name: 'Ivan Imenynnyk',
      image: II,
      role: 'Developer',
      description: 'DailyNormaModal',
      linkedin: 'https://www.linkedin.com/in/ivan-imenynnyk/',
    },
    {
      name: 'Iryna Trysh',
      image: IT,
      role: 'Developer',
      description: 'HomePage',
      linkedin: 'https://www.linkedin.com/in/irynatrysh/',
    },
    {
      name: 'Bohdan Solomych',
      image: BS,
      role: 'Developer',
      description: 'Header, UserLogo',
      linkedin: 'https://www.linkedin.com/in/bogdan-solomich/',
    },
    {
      name: 'Dana Dobryshkina',
      image: DD,
      role: 'Developer',
      description:
        'WelcomePage, WhyDrinkWater, WaterTrackerConsumption, partially DailyNorma',
      linkedin: 'https://www.linkedin.com/in/dana-dobryshkina-ua/',
    },
    {
      name: 'Volodymyr Shevchenko',
      image: VS,
      role: 'Developer',
      description:
        'SignInPage, SignUpPage, SignIn/SignUp form, TodayWaterList, DeleteWaterIntakesModal',
      linkedin: 'https://www.linkedin.com/in/volodymyr-shevchenko-developer/',
    },
    {
      name: 'Serhii Krysiuk',
      image: SK,
      role: 'Developer',
      description:
        'backend:partially updateWaterIntakeRecord, removeWaterIntakeRecord, sendPasswordRecoveryEmail and recoverPassword, frontend: UserLogoModal, styling DailyNorma',
      linkedin: 'https://www.linkedin.com/in/serhii-krysiuk-4330052ab/',
    },
    {
      name: 'Oleksii Pokormiakho',
      image: OP,
      role: 'Developer',
      description: 'Swagger endpoint documentation',
      linkedin: 'https://www.linkedin.com/in/oleksiy-pokormyakho/',
    },
  ];

  return (
    <Wrapper>
      <BubblesAnimation />
      <Title>Our team IT Froggs</Title>
      <Container>
        <ul className="members">
          {teamMembers.map((member, index) => (
            <motion.li
              className="member"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.6 }}
            >
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <div className="img-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="desc-container">
                  <h3>
                    {member.name}, <span>{member.role}</span>
                  </h3>
                  <p>
                    <b>Developed part:</b> {member.description}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default TeamPage;
