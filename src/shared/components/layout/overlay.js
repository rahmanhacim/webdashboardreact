import styled from "styled-components";
import css from "@styled-system/css";

const contentWidth = "90%";

export const Overlay = styled.div((props) =>
  css({
    zIndex: "z1",
    height: "100%",
    width: [props.isShow ? "100%" : "0", "0"],
    position: ["fixed", "unset"],
    top: "space0",
    left: "space0",
    backgroundColor: "overlay",
    overflowX: "hidden",
    transition: "0.5s ease-in-out",
    ".closebtn": {
      position: ["absolute", "unset"],
      top: "1%",
      left: contentWidth,
      color: "item100",
      cursor: "pointer",
    },
  })
);

export const OverlayContent = styled.div((props) =>
  css({
    position: ["relative", "unset"],
    top: "space0",
    left: "space0",
    width: contentWidth,
  })
);
