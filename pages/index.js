import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "klayar/components/LoadingBar";

import { authStorage } from "@helpers/storage";
import Login from "@modules/auth/client";
import { LAYOUT_TYPE } from "@constants/layout";

const Page = () => {
  const accessToken = authStorage.getToken();
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      router.push("/dashboard");
    }
  }, [router, accessToken]);

  return !accessToken ? <Login /> : <LoadingBar show overlay />;
};
Page.layout = LAYOUT_TYPE.FULLSCREEN;

export default Page;
