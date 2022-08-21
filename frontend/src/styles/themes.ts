interface DefaultSpec {
  colors: Record<string, string>;
  space: BaseTheme['space'];
}

const defaultThemeSpec: DefaultSpec = {
  colors: {
    background: '#fafafa',
    font: '#262626',
    search: '#efefef',
    header: '#ffffff',
    white: '#ffffff',
    black: '#000000',
    button: '#0095f6',
    line: '#dbdbdb',
  },
  space: {
    xl: '40px',
    lg: '20px',
    md: '16px',
    sm: '8px',
    xs: '4px',
  },
};

const lightTheme: BaseTheme = {
  colors: {
    ...defaultThemeSpec.colors,
    background: '#fafafa',
    font: '#262626',
    search: '#efefef',
    header: '#ffffff',
    button: '#0095f6',
    line: '#dbdbdb',
  },
  space: {
    ...defaultThemeSpec.space,
  },
};

const darkTheme: BaseTheme = {
  colors: {
    ...defaultThemeSpec.colors,
    background: '#121212',
    font: '#fafafa',
    search: '#262626',
    header: '#000000',
    button: '#0095f6',
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
