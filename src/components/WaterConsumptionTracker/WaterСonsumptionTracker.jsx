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
import { useTranslation } from 'react-i18next';

export const WaterConsumptionTracker = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const benefits = [
    {
      text: t('welcome.benefits.1'),
      id: `${sprite}#calendar`,
    },
    {
      text: t('welcome.benefits.2'),
      id: `${sprite}#presentation-chart-bar`,
    },
    {
      text: t('welcome.benefits.3'),
      id: `${sprite}#wrench-screwdriver`,
    },
  ];

  function handleClick() {
    navigate('/signup');
  }
  console.log('Translations:', t('welcome.h1'));
  return (
    <Tracker>
      <HiddenTitle>Hidden</HiddenTitle>
      <Title>{t('welcome.h1')}</Title>
      <Subtitle>{t('welcome.p')}</Subtitle>
      <BenefitsTitle>{t('welcome.benefits.title')}</BenefitsTitle>
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
        {t('welcome.button')}
      </Button>
    </Tracker>
  );
};
