import Fetcher from "@core/fetcher";
import {
  createAxios,
  createFetch,
  clientErrorHandler,
  clientSuccessHandler,
} from "@core/fetcher/helper";
import { authStorage } from "@helpers/storage";

export default class AuthFetcher extends Fetcher {
  constructor() {
    super();
    this.setFetcher(
      createAxios(process.env.NEXT_PUBLIC_AUTH_API).instance
    );
    this.setSuccessHandler(clientSuccessHandler);
    this.setErrorHandler(clientErrorHandler);
  }

  async login(data: any) {
    this.setFetcher(
      createFetch(process.env.NEXT_PUBLIC_AUTH_API).instance
    );
    this.setData(data);
    this.setUrl("/login");
    const response = await this.post();
    return response;
  }

  async logout() {
    this.setFetcher(
      createFetch(
        process.env.NEXT_PUBLIC_AUTH_API, 
        authStorage.getToken()
      ).instance
    );
    this.setUrl("/logout");
    const response = await this.get();
    return response;
  }

  async getPermissions() {
    this._fetcher.setHeaders({
      Authorization: authStorage.getToken(),
    })
    this.setUrl("/menu");
    const response = await this.get();
    return response;
  }
}
