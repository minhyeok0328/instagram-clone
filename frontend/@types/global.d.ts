declare interface BaseTheme {
  // colors
  theme: Readonly<{
    background: string;
    font: string;
    search: string;
    header: string;
    colors: Record<string, string>;
  }>;
  // space
  space: Readonly<Record<'xl' | 'lg' | 'md' | 'sm' | 'xs', string>>;
}
