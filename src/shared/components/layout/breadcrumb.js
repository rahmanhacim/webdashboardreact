import React from "react";
import Link from "next/link";

export const BreadCrumb = (props) => {
  <Link href={props.href} key={props.index}>
    {props.title}
  </Link>;
};
