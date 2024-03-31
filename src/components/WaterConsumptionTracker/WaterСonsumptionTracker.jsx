import { useNavigate } from 'react-router-dom';
import {
  Benefits,
  BenefitsTitle,
  Button,
  HiddenTitle,
  Item,
  Subtitle,
  Title,
  Tracker
} from './WaterConsumptionTracker.styled';
import { WrapperBox } from '../Wrapper/Wrapper.styled';

export const WaterConsumptionTracker = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      text: 'Habit drive',
    },
    {
      text: 'View statistics',
    },
    {
      text: 'Personal rate setting',
    },
  ];

  function handleClick() {
    navigate('/signup');
  }

  return (
    <WrapperBox>
      <Tracker>
      <HiddenTitle>Hidden</HiddenTitle>
      <Title>Water consumption tracker</Title>
      <Subtitle>Record daily water intake and track</Subtitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <Benefits>
        {benefits.map(({ text }, index) => (
          <Item key={index}>{text}</Item>
        ))}
      </Benefits>

      <Button type="button" onClick={handleClick}>
        Try tracker
      </Button>
    </Tracker>
    </WrapperBox>
  );
};

