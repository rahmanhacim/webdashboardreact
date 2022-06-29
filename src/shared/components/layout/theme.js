import React from "react";

import { ThemeProvider as Stp } from "styled-components";
import { ThemeProvider as Ktp } from "klayar/components/ThemeProvider";

const ThemeProvider = (props) => {
  return (
    <Ktp {...props}>
      <Stp {...props}>{props.children}</Stp>
    </Ktp>
  );
};

export default ThemeProvider;
