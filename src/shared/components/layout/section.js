import Styled from "styled-components";
import css from "@styled-system/css";
import { Section } from "klayar/components/Layout";
import { SIDEBAR_MAXWIDTH } from "@constants/layout";

const SectionStyled = Styled(Section)((props) =>
  css({
    position: "absolute",
    transition: "left .3s ease-out, right .3s ease-out",
    width: [
      "100%",
      props.isOpen ? `calc( 100% - ${SIDEBAR_MAXWIDTH})` : "100%",
    ],
    height: "100vh",
    bg: "bg20",
    top: ["space0", "space0"],
    right: ["space0", "space0"],
    bottom: ["space0", "space0"],
    left: ["space0", props.isOpen ? SIDEBAR_MAXWIDTH : "space0"],
  })
);

export default SectionStyled;
