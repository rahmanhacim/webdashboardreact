import Styled from "styled-components";
import css from "@styled-system/css";
import { Section } from "klayar/components/Layout";
import { SIDEBAR_MAXWIDTH } from "@constants/layout";

const MainStyled = Styled(Section)((props) =>
  css({
    position: "absolute",
    transition: "left .3s ease-out, right .3s ease-out",
    overflow: "auto",
    top: ["84px", "84px"],
    right: ["space0", "space0"],
    bottom: ["space0", "space0"],
    left: ["space0", props.isOpen ? SIDEBAR_MAXWIDTH : "space0"],
  })
);

export default MainStyled;
