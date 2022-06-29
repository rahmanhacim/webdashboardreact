import Styled from "styled-components";
import css from "@styled-system/css";
import { LeftBar } from "klayar/components/Layout";

const LeftBarStyled = Styled(LeftBar)((props) =>
  css({
    position: "absolute",
    zIndex: "z2",
    top: "0px",
    bottom: "0px",
    left: "0px",
    backgroundColor: "bg20",
    color: "item70",
    height: "100vh",
    width: [props.isOpen ? "0" : "100%", props.isOpen ? "100%" : "0"],
    display: [props.isOpen ? "none" : "block", props.isOpen ? "block" : "none"],
    willChange: "transform",
    transition: "transform 1s ease-in-out",
    transform: "translateX(0%)",
  })
);

export default LeftBarStyled;
