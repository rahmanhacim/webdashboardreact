import React from "react";

import { createBC } from "@helpers/layout";

const Page = () => {
  return <>Home Dashboard</>;
};

const bcData = [
  {
    url: "/",
    title: "Dashboard",
  },
];
const bc = createBC(bcData);
Page.breadcrumb = bc;

export default Page;
