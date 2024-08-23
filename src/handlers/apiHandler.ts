import axios, { type AxiosResponse } from "axios";
import { SUCCESSFUL } from "../utilities/errors";
import type {
  ApiHandlerResponse,
  PamaterOptions,
  HeadersOptions,
  DataOptions,
  RequestOptions,
} from "../types/apiHandlersTypes";

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

  private async request({
    endpoint,
    method = "GET",
    params = {},
    headers = {},
    data,
  }: RequestOptions): Promise<ApiHandlerResponse | null> {
    const url = this.buildUrl(this.BASE + endpoint, params);

    try {
      const response: AxiosResponse<any> = await axios.request({
        url,
        method,
        data,
        headers,
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
    return await this.request({
      endpoint: endpoint,
      method: "GET",
      params: params,
    });
  }

  async post(
    endpoint: string,
    data: DataOptions = {},
    params: PamaterOptions = {},
    headers: HeadersOptions = {},
  ): Promise<ApiHandlerResponse | null> {
    return await this.request({
      endpoint: endpoint,
      method: "POST",
      data: data,
      params: params,
      headers: headers,
    });
  }
}
