import React from "react";

import { H4, H6 } from "klayar/components/Heading";

import { Pad } from "@components/layout/common";
import { Wrapper } from "@components/layout/wrapper";
import Color from "@components/color";
import { createBC } from "@helpers/layout";

const Page = () => {
  return (
    <>
      <H4 color="item100">Mode</H4>
      <H6 color="item100">Brand</H6>
      <Wrapper>
        <Color
          backgroundColor="brand.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="brand.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="brand.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="brand.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="brand.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">Background</H6>
      <Wrapper>
        <Color backgroundColor="bg100" bordercolor="item10" color="item10" />
        <Color backgroundColor="bg90" bordercolor="item10" color="item10" />
        <Color backgroundColor="bg80" bordercolor="item10" color="item10" />
        <Color backgroundColor="bg70" bordercolor="item10" color="item10" />
        <Color backgroundColor="bg40" bordercolor="item10" color="item100" />
        <Color backgroundColor="bg30" bordercolor="item10" color="item100" />
        <Color backgroundColor="bg20" bordercolor="item10" color="item100" />
        <Color backgroundColor="bg10" bordercolor="item10" color="item100" />
      </Wrapper>
      <H6 color="item100">Item</H6>
      <Wrapper>
        <Color backgroundColor="item100" bordercolor="item10" color="bg10" />
        <Color backgroundColor="item90" bordercolor="item10" color="bg10" />
        <Color backgroundColor="item80" bordercolor="item10" color="bg10" />
        <Color backgroundColor="item70" bordercolor="item10" color="bg10" />
        <Color backgroundColor="item60" bordercolor="item10" color="bg10" />
        <Color backgroundColor="item50" bordercolor="item10" color="bg100" />
        <Color backgroundColor="item40" bordercolor="item10" color="bg100" />
        <Color backgroundColor="item30" bordercolor="item10" color="bg100" />
        <Color backgroundColor="item20" bordercolor="item10" color="bg100" />
        <Color backgroundColor="item10" bordercolor="item10" color="bg100" />
      </Wrapper>
      <Pad />
      <H4 color="item100">Fixed</H4>
      <H6 color="item100">Error</H6>
      <Wrapper>
        <Color
          backgroundColor="error.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="error.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="error.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="error.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="error.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">Warning</H6>
      <Wrapper>
        <Color
          backgroundColor="warning.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="warning.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="warning.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="warning.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="warning.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">Info</H6>
      <Wrapper>
        <Color
          backgroundColor="info.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="info.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="info.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="info.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="info.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">Success</H6>
      <Wrapper>
        <Color
          backgroundColor="success.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="success.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="success.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="success.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="success.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">White</H6>
      <Wrapper>
        <Color
          backgroundColor="white.massive"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="white.heavy"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="white.fair"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="white.soft"
          bordercolor="item10"
          color="item10"
        />
        <Color
          backgroundColor="white.root"
          bordercolor="item10"
          color="item10"
        />
      </Wrapper>
      <H6 color="item100">Black</H6>
      <Wrapper>
        <Color
          backgroundColor="black.massive"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="black.heavy"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="black.fair"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="black.soft"
          bordercolor="item10"
          color="item100"
        />
        <Color
          backgroundColor="black.root"
          bordercolor="item10"
          color="item100"
        />
      </Wrapper>
      <H6 color="item100">Overlay</H6>
      <Wrapper>
        <Color backgroundColor="overlay" bordercolor="item10" color="item100" />
      </Wrapper>
    </>
  );
};

const bcData = [
  {
    url: "/",
    title: "Foundations",
  },
  "Color",
];
const bc = createBC(bcData);
Page.breadcrumb = bc;

export default Page;
