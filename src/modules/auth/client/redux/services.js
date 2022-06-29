import { routers } from "../constants/routers";
import AuthFetcher from "../fetcher/auth";

const authFetcher = new AuthFetcher();

export const login = async (data) => {
  const response = await authFetcher.login(data);
  return response;
};

export const logout = async () => {
  const response = await authFetcher.logout();
  return response;
};

export const getRoutes = async () => {
  const response = await authFetcher.getPermissions();
  const permissions = response.data.reduce((acc, key) => {
    acc[key.name] = key.accessControl.map((access) => access.control);
    return acc;
  }, {});

  if (permissions) {
    const permittedRoutes = routers.filter((route) => {
      return (
        Object.keys(permissions).includes(route.name) &&
        permissions[route.name].includes(route.access)
      );
    });
    return {
      permissions: permissions,
      routes: permittedRoutes,
    };
  }
};
