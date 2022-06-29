import React from "react";
import Link from "next/link";

export const createBC = (val) => {
  return val.map((v, index) => {
    const data = {
      index,
      href: v.url ? v.url : v.title ? v.title : `/${v.toLowerCase()}`,
      title: v.title ? v.title : v,
    };
    return (
      <Link href={data.href} key={data.index}>
        {data.title}
      </Link>
    );
  });
};
