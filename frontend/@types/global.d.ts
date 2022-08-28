declare interface BaseTheme {
  // colors
  colors: Readonly<Record<string, string>>;
  // space
  space: Readonly<Record<'xl' | 'lg' | 'md' | 'sm' | 'xs', string>>;
}

declare interface Feed {
  userId: string;
  userName: string;
  image: string;
  profile: string;
  title: string;
  like: number;
  comment: string;
  commentCount: number;
  registerDate: Date;
}
