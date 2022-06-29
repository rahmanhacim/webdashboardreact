import styled from "styled-components";
import css from "@styled-system/css";

export const SectionDivider = styled.hr`
  ${css({
    mt: "space56",
    mb: "space48",
    display: "block",
    border: "borders0",
    textAlign: "center",
    overflow: "visible",
    color: "item100",

    "&:before": {
      fontWeight: "400",
      fontStyle: "italic",
      fontSize: "30px",
      letterSpacing: "0.6em",
      display: "inline-block",
      ml: "0.6em",
      position: "relative",
      top: "-30px",
      color: "item100",
    },
  })}
  &:before {
    --x-height-multiplier: 0.342;
    --baseline-multiplier: 0.22;
    content: "...";
  }
`;

export const Pad = styled.div`
  ${css({
    mt: "space56",
    mb: "space48",
  })}
`;
