import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from '../../store/theme/themeSelectors';

const ThemeCustomThemeProvider = ({ children }) => {
  const currentTheme = useSelector(getIsDarkTheme) ? 'dark' : 'light';
  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

export default ThemeCustomThemeProvider;
