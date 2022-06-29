const parseJson = (str: string) => {
  try {
      return JSON.parse(str);
  } catch (e) {
      return str;
  }
}

export default class Storage {

  // localStorage
  setLocalStorage(key: string, data: any) {
    return process.browser && localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorage(key: string):any {
    return process.browser && parseJson(localStorage.getItem(key))
  }

  clearLocalStorage(key: string):any {
    return process.browser && localStorage.removeItem(key)
  }

  // sessionStorage
  setSessionStorage(key: string, data: any) {
    return process.browser && sessionStorage.setItem(key, JSON.stringify(data));
  }

  getSessionStorage(key: string):any {
    return process.browser && parseJson(sessionStorage.getItem(key))
  }

  clearSessionStorage(key: string):any {
    return process.browser && sessionStorage.removeItem(key)
  }
};
