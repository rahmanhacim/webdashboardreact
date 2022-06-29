import React from "react";
import Dynamic from "klayar/components/Dynamic";

const Color = (props) => (
  <Dynamic
    {...props}
    width="150px"
    backgroundSize="20px 20px"
    p="12px 12px"
    position="relative"
    border={0}
  >
    {props.backgroundColor}
  </Dynamic>
);

export default Color;
