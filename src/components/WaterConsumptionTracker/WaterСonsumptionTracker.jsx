import { useNavigate } from 'react-router-dom';
import {
  Benefits,
  BenefitsTitle,
  Button,
  HiddenTitle,
  Item,
  Subtitle,
  Title,
  Tracker,
  Svg,
} from './WaterConsumptionTracker.styled';
import sprite from 'src/assets/sprite.svg';

export const WaterConsumptionTracker = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      text: 'Habit drive',
      id: `${sprite}#calendar`,
    },
    {
      text: 'View statistics',
      id: `${sprite}#presentation-chart-bar`,
    },
    {
      text: 'Personal rate setting',
      id: `${sprite}#wrench-screwdriver`,
    },
  ];

  function handleClick() {
    navigate('/signup');
  }

  return (
    <Tracker>
      <HiddenTitle>Hidden</HiddenTitle>
      <Title>Water consumption tracker</Title>
      <Subtitle>Record daily water intake and track</Subtitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <Benefits>
        {benefits.map(({ id, text }, index) => (
          <Item key={index}>
            <Svg>
              <use href={id}></use>
            </Svg>
            {text}
          </Item>
        ))}
      </Benefits>

      <Button type="button" onClick={handleClick}>
        Try tracker
      </Button>
    </Tracker>
  );
};
