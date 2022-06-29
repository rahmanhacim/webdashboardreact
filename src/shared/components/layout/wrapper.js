import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div`
  ${css({
    display: "inline-flex",
    border: "borders1",
    borderColor: "item100",
    mx: "space16",
    my: "space8",
  })}
`;

export const Center = styled.div`
  ${css({
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    px: "space16",
    py: "space0",
  })}
`;
