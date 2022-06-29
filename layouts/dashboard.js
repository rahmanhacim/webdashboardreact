import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import { Card, CardBody } from "klayar/components/Card";
import Icon from "klayar/components/Icons";
import DFlex from "klayar/components/DisplayFlex";

import { THEMES, MODES } from "@constants/theme";
import { GlobalStyles } from "@helpers/theme";
import { modeStorage } from "@helpers/storage";

import LoadingBar from "klayar/components/LoadingBar";
import ThemeWrapper from "@components/layout/theme";
import Sidebar from "@components/layout/sidebar";
import LeftBar from "@components/layout/leftbar";
import Section from "@components/layout/section";
import { Overlay, OverlayContent } from "@components/layout/overlay";
import Main from "@components/layout/main-section";

const Header = dynamic(() => import("klayar/components/Header"), {
  ssr: false,
});

const Dashboard = (props) => {
  const [used, setMode] = useState(modeStorage.get());
  const [open, setOpen] = useState(true); // open menu
  const [show, setShow] = useState(false); // show overlay

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!modeStorage.get()) {
    setMode(MODES[0]);
    modeStorage.set(MODES[0]);
  }
  const cycleMode = () => {
    const i = MODES.indexOf(used);
    const n = (i + 1) % MODES.length;
    setMode(MODES[n]);
    modeStorage.set(MODES[n]);
  };

  const toggleMenu = () => {
    setOpen(!open);
    setShow(!show);
  };

  const selectMenu = () => {
    if (typeof window !== "undefined") {
      const theme = THEMES[modeStorage.get()];
      const width = window.innerWidth;
      if (width < parseInt(theme.breakpoints[0], 10)) {
        setShow(!show);
        setOpen(true);
      }
    }
  };

  return isAuthenticated ? (
    <ThemeWrapper theme={THEMES[modeStorage.get()]}>
      <GlobalStyles />
      <DFlex jcontent="center">
        <Overlay isShow={show}>
          <div className="closebtn">
            <Icon name="Close" size="36px" onClick={() => toggleMenu()} />
          </div>
          <OverlayContent>
            <LeftBar isOpen={open}>
              <Sidebar setMode={cycleMode} onSelect={() => selectMenu()} />
            </LeftBar>
          </OverlayContent>
        </Overlay>
        <Section isOpen={open}>
          <Header
            title="Example Title"
            toggle={() => toggleMenu()}
            links={props.children.type.breadcrumb}
          />
          <Main>
            <Card position="absolute">
              <CardBody>{props.children}</CardBody>
            </Card>
          </Main>
        </Section>
      </DFlex>
    </ThemeWrapper>
  ) : (
    <LoadingBar show overlay />
  );
};

export default Dashboard;
