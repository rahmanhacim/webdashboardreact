import { authStorage } from "@helpers/storage";
import { uiActions } from "@utils/redux/ui-slice";

import { getRoutes, login, logout } from "./services";
import { authActions } from "./slice";

export const createSession = (data) => async (dispatch) => {
  dispatch(uiActions.showLoading());
  try {
    const response = await login(data);
    if (response.status !== "00") {
      dispatch(authActions.authenticated(false));
    } else {
      const { accessToken, user, role } = response.data;
      const authData = {
        accessToken: accessToken,
        userId: user.userId,
        name: user.name,
        email: user.email,
        role: role.name,
        roleId: user.roleId,
      };
      // save authenticated data to local storage
      authStorage.set(authData);

      // create routes compare list routes with response from BE
      const access = await getRoutes();
      if (access) {
        const newAuthData = {
          ...authData,
          permissions: access.permissions,
          routes: access.routes,
        };

        // update auth data when login success
        authStorage.set(newAuthData);

        // set authenticated to true
        dispatch(authActions.authenticated(true));

        let path = "/dashboard";
        if (typeof data.path !== "undefined") {
          path = data.path;
        }
        location.href = path;
      }
    }
  } catch (error) {
    dispatch(authActions.authenticated(false));
  } finally {
    dispatch(uiActions.hideLoading());
  }
};

export const checkSession = () => async (dispatch) => {
  const accessToken = authStorage.getToken();
  if (!accessToken) {
    await logout();
    authStorage.clear();
    dispatch(authActions.authenticated(false));
  } else {
    dispatch(authActions.authenticated(true));
  }
};

export const destroySession = () => async (dispatch) => {
  dispatch(uiActions.showLoading());
  try {
    await logout();
    authStorage.clear();
    dispatch(authActions.authenticated(false));
    location.href = "/";
  } catch (error) {
    dispatch(uiActions.hideLoading());
  }
};
