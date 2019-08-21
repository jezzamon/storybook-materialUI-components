const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      contrastText: '#ECEFF4',
      dark: '#66bad2',
      light: '#7986cb',
      main: '#88c0d0',
    },
    secondary: {
      contrastText: '#ECEFF4',
      dark: '#00b8d4',
      light: '#18ffff',
      main: '#5E81AC',
    },
    gradientPrimary: {
      main: 'linear-gradient(60deg, #5E81AC, #81A1C1)',
    },
    background: {
      default: '#1c2429',
      paper: '#2E3440',
    },
    common: {
      white: '#ECEFF4',
    },
    action: {
      hover: '#4C566A',
      selected: '#4C566A',
      active: '#ECEFF4',
    },
    error: {
      main: '#bf616a',
      dark: '#b83643',
      light: '#d67f88',
      contrastText: '#ECEFF4',
    },
    text: {
      primary: '#ECEFF4',
      secondary: '#D8DEE9',
    },
    greyColorDepth: ['#434C5E', '#3B4252', '#2E3440', '#1C2429'],
  },
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#5E81AC',
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
};

export default darkTheme;