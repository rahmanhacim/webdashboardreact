import React from "react";

import { THEMES } from "@constants/theme";
import { GlobalStyles } from "@helpers/theme";
import { modeStorage } from "@helpers/storage";

import ThemeProvider from "@components/layout/theme";
import Section from "@components/layout/section";

const Fullscreen = (props) => {
  return (
    <ThemeProvider theme={THEMES[modeStorage.get()]}>
      <GlobalStyles />
      <Section height="100vh">{props.children}</Section>
    </ThemeProvider>
  );
};

export default Fullscreen;
