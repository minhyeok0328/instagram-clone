interface DefaultSpec {
  theme: Pick<
    BaseTheme['theme'],
    'background' | 'font' | 'search' | 'header' | 'colors'
  >;
  space: BaseTheme['space'];
}

const defaultThemeSpec: DefaultSpec = {
  theme: {
    background: '#fafafa',
    font: '#262626',
    search: '#efefef',
    header: '#ffffff',
    colors: {
      white: '#ffffff',
      black: '#000000',
    },
  },
  space: {
    xl: '40px',
    lg: '20px',
    md: '12px',
    sm: '5px',
    xs: '2px',
  },
};

const lightTheme: BaseTheme = {
  theme: {
    ...defaultThemeSpec.theme,
    background: '#fafafa',
    font: '#262626',
    search: '#efefef',
    header: '#ffffff',
  },
  space: {
    ...defaultThemeSpec.space,
  },
};

const darkTheme: BaseTheme = {
  theme: {
    ...defaultThemeSpec.theme,
    background: '#121212',
    font: '#fafafa',
    search: '#262626',
    header: '#000000',
  },
  space: {
    ...defaultThemeSpec.space,
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
