import { ToggleLabel, ToggleButton, ToggleSlider } from './ToggleTheme.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/theme/themeSlice';
import { getIsDarkTheme } from '../../store/theme/themeSelectors';

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getIsDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <ToggleLabel>
        <ToggleButton
          onChange={handleToggleTheme}
          name="toggle"
          type="checkbox"
          checked={theme}
        />
        <ToggleSlider className="slider" />
      </ToggleLabel>
    </>
  );
};

export default ToggleTheme;
