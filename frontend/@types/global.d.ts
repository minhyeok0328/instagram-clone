declare interface BaseTheme {
  // colors
  colors: Readonly<Record<string, string>>;
  // space
  space: Readonly<Record<'xl' | 'lg' | 'md' | 'sm' | 'xs', string>>;
}
