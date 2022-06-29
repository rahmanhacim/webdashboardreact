import { regularDarkTheme, regularLightTheme } from "klayar/constants/Theme";

const THEME_MODE = [
  {
    ID: "darkMode",
    TITLE: "Dark-Mode",
    THEME: regularDarkTheme,
  },
  {
    ID: "lightMode",
    TITLE: "Light-Mode",
    THEME: regularLightTheme,
  },
];
export const THEMES = {};
export const TITLES = {};
export const MODES = Object.keys(THEME_MODE).map((key) => THEME_MODE[key].ID);
Object.keys(THEME_MODE).map(
  (key) => (THEMES[THEME_MODE[key].ID] = THEME_MODE[key].THEME)
);
Object.keys(THEME_MODE).map(
  (key) => (TITLES[THEME_MODE[key].ID] = THEME_MODE[key].TITLE)
);
