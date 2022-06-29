import React from "react";

import { LAYOUT_TYPE } from "@constants/layout";
import Dashboard from "./dashboard";
import Fullscreen from "./fullscreen";

const layouts = {
  default: Dashboard,
  fullscreen: Fullscreen,
};

const LayoutWrapper = (props) => {
  const type =
    props.children.type.layout !== undefined
      ? props.children.type.layout
      : LAYOUT_TYPE.DEFAULT;
  const Layout = layouts[type];
  return <Layout {...props}>{props.children}</Layout>;
};

export default LayoutWrapper;
