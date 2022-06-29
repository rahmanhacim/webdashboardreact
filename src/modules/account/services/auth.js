/**
 * @author Ian Maulana
 * @email ian_maulana@yahoo.com
 * @create date 2020-04-22 16:55:50
 * @modify date 2021-02-21 16:13:07
 * @desc Authorization service class
 */

/* eslint-disable require-jsdoc */
import BaseService from "./BaseService";

export default class Auth extends BaseService {
  constructor() {
    super();
    this.api = process.env.REACT_APP_LOGIN_API;
  }

  login(data) {
    const api = this.api + "/login";
    return this.post(data, api);
  }

  logout(token) {
    const api = this.api + "/logout";
    return this.request(api, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
  }

  changePassword(data) {
    const api = this.api + "/user/change/password";
    return super.put(data, api);
  }

  updateProfile(data) {
    const api = this.api + "/user";
    return super.put(data, api);
  }

  /**
   * Get all permissions
   * @returns {Promis<Array>} List of permissions
   */
  getPermissions() {
    const api = this.api + "/menu";
    return super.get(null, api);
  }

  getWBList(params) {
    const api = `${this.api}/userlist`;
    return super.get(params, api);
  }
}
