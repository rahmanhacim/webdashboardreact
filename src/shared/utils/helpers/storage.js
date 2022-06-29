import Storage from "@core/storage";

import { MODES } from "@constants/theme";
import { THEME_KEY, AUTH_KEY } from "@constants/storage";

// mode
export const modeStorage = {
  set(data) {
    return new Storage().setLocalStorage(THEME_KEY, data);
  },

  get() {
    return new Storage().getLocalStorage(THEME_KEY) || MODES[0];
  },
};

// auth
export const authStorage = {
  set(data) {
    return new Storage().setLocalStorage(AUTH_KEY, data);
  },

  clear() {
    return new Storage().clearLocalStorage(AUTH_KEY);
  },

  getUser() {
    return new Storage().getLocalStorage(AUTH_KEY);
  },

  getToken() {
    const data = new Storage().getLocalStorage(AUTH_KEY);
    return data ? data.accessToken : null;
  },
};
