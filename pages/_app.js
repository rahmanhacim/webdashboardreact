import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "klayar/components/LoadingBar";

import { authStorage } from "@helpers/storage";
import LayoutWrapper from "@layouts/wrapper";
import { wrapper } from "@utils/redux/store";
import { authActions } from "@modules/auth/client/redux/slice";

const App = (props) => {
  const { Component, pageProps } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state) => state.ui.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => dispatch(authActions.authenticated(false));
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const accessToken = authStorage.getToken();
    const publicPaths = ["/"];
    const path = url.split("?")[0];
    if (!accessToken && !publicPaths.includes(path)) {
      dispatch(authActions.authenticated(false));
      router.push({
        pathname: "/",
        query: {
          returnUrl: router.asPath === "/" ? "/dashboard" : router.asPath,
        },
      });
    } else {
      if (url === "/" && isAuthenticated) {
        router.push({
          pathname: "/dashboard",
        });
      }
      dispatch(authActions.authenticated(true));
    }
  }

  return (
    <>
      <LoadingBar show={isLoading} overlay />
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
};

export default wrapper.withRedux(App);
