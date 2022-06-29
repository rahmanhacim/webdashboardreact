import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import KSidebar from "klayar/components/Sidebar";
import { destroySession } from "@modules/auth/client/redux/actions";

const Sidebar = (props) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  return (
    <KSidebar
      activeLink={Router.pathname}
      footerMenus={[
        {
          onClick: () => props.setMode({}),
          text: "Mode",
        },
        {
          onClick: () => {},
          text: "Settings",
        },
        {
          onClick: () => dispatch(destroySession()),
          text: "Logout",
        },
      ]}
      fullname="Linka Jadid"
      headerMenus={[
        {
          icon: "QuestionCircle",
          link: "/help",
        },
        {
          icon: "Notification",
          link: "/notification",
        },
      ]}
      logo="https://seeklogo.com/images/L/link-aja-logo-F029ED0939-seeklogo.com.png"
      menus={[
        {
          child: [
            {
              link: "/color",
              name: "Color",
            },
            {
              link: "/typography",
              name: "Typography",
            },
          ],
          link: "/foundations",
          name: "Foundations",
        },
        {
          link: "/components",
          name: "Components",
          child: [
            {
              link: "/table",
              name: "Table",
            },
            {
              link: "/counter",
              name: "Counter",
            },
          ],
        },
      ]}
      onRedirect={(link) => {
        Router.push(link);
        props.onSelect();
      }}
      role="Administrator"
      title="CMS LinkAja"
    />
  );
};

export default Sidebar;
