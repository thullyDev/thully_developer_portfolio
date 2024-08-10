import axios, { type AxiosResponse } from "axios";
import { SUCCESSFUL } from "../utilities/errors";
import { ApiHandlerResponse, PamaterOptions } from "../types/apiHandlersTypes";

export class ApiHandler {
  private BASE: string;

  constructor(BASE: string) {
    this.BASE = BASE;
  }

  private buildUrl(url: string, params: PamaterOptions): string {
    const urlInstance = new URL(url);

    for (const key in params) {
        urlInstance.searchParams.set(key, params[key]);
      }

    return urlInstance.href;
  }

  private async request(
    endpoint: string,
    method: string = "GET",
    params: PamaterOptions = {},
    data?: any,
  ): Promise<ApiHandlerResponse | null> {
    const url = this.buildUrl(this.BASE + endpoint, params);

    try {
      const response: AxiosResponse<any> = await axios.request({
        url,
        method,
        data,
      });

      if (response.status !== SUCCESSFUL) {
        return null;
      }

      return response.data;
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }

  async get(
    endpoint: string,
    params: PamaterOptions = {},
  ): Promise<ApiHandlerResponse | null> {
    return await this.request(endpoint, "GET", params);
  }

  async post(
    endpoint: string,
    data: any,
    params: PamaterOptions = {},
  ): Promise<ApiHandlerResponse | null> {
    return await this.request(endpoint, "POST", params, data);
  }
}
