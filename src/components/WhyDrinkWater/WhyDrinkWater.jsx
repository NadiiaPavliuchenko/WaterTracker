import { useTranslation } from 'react-i18next';
import {
  Container,
  Item,
  List,
  OutlineContainer,
  Title,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  const { t } = useTranslation();

  const list = [
    t('welcome.list.item1'),
    t('welcome.list.item2'),
    t('welcome.list.item3'),
    t('welcome.list.item4'),
    t('welcome.list.item5'),
    t('welcome.list.item6'),
    t('welcome.list.item7'),
  ];
  return (
    <OutlineContainer>
      <Container>
        <Title>{t('welcome.list.title')}</Title>
        <List>
          {list.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      </Container>
    </OutlineContainer>
  );
};

export default WhyDrinkWater;
