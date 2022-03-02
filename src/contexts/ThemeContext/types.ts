export type ThemeType = 'light' | 'dark';

export interface ThemeContextState{
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
export interface IProps{
    children : JSX.Element
}