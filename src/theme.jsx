const lightTheme = {
  colors: {
    white: '#ffffff',
    black: '#2f2f2f',
    blue: '#407bff',
    lavender: '#ecf2ff',
    skyBlue: '#9ebbff',
    paleBlue: '#d7e3ff',
    red: '#ef5050',
    orange: '#ff9d43',
  },
  shadows: {
    normalButton: '0 4px 8px 0 rgba(64, 123, 255, 0.34)',
    hoverButton: '0 4px 14px 0 rgba(64, 123, 255, 0.54)',
    activeButton: 'none',
    popoverShadow: '0 4px 4px 0 rgba(64, 123, 255, 0.3)',
    calendarDayShadow: '0 2px 4px 0 rgba(64, 123, 255, 0.3)',
  },
};

const darkTheme = {
  colors: {
    white: '#1C1D26',
    black: '#D5DFF5',
    blue: '#5082F2',
    lavender: '#010101',
    skyBlue: '#2F3875',
    paleBlue: '#2A3052',
    red: '#F16161',
    orange: '#FFA756',
  },
  shadows: {
    normalButton: '0 4px 8px 0 rgba(0, 0, 0, 0.34)',
    hoverButton: '0 4px 14px 0 rgba(0, 0, 0, 0.54)',
    activeButton: 'none',
    popoverShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
    calendarDayShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },
};

const defaultTheme = {
  device: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1440px)',
  },
};

const theme = {
  light: {
    color: lightTheme.colors,
    boxShadow: lightTheme.shadows,
    ...defaultTheme,
  },
  dark: {
    color: darkTheme.colors,
    boxShadow: darkTheme.shadows,
    ...defaultTheme,
  },
};

export default theme;
