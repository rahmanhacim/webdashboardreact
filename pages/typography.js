import React from "react";

import { H1, H2, H3, H4, H5, H6 } from "klayar/components/Heading";
import { Title, SubTitle, TitleSmall } from "klayar/components/Title";
import { Body, BodySmall } from "klayar/components/Body";

import { Pad } from "@components/layout/common";
import { Center } from "@components/layout/wrapper";
import { createBC } from "@helpers/layout";

const Page = () => {
  return (
    <Center>
      <H1 color="item100">Heading1</H1>
      <H2 color="item100">Heading2</H2>
      <H3 color="item100">Heading3</H3>
      <H4 color="item100">Heading4</H4>
      <H5 color="item100">Heading5</H5>
      <H6 color="item100">Heading6</H6>
      <Pad />
      <Title color="item100">Title</Title>
      <SubTitle color="item100">Sub Title</SubTitle>
      <TitleSmall color="item100">Title Small</TitleSmall>
      <Pad />
      <Body color="item100">Body</Body>
      <BodySmall color="item100">Body Small</BodySmall>
    </Center>
  );
};

const bcData = [
  {
    url: "/",
    title: "Foundations",
  },
  "Typography",
];
const bc = createBC(bcData);
Page.breadcrumb = bc;

export default Page;
