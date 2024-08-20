export interface PamaterOptions {
  [key: string]: any;
}

export interface ApiHandlerResponse {
  [key: string]: any;
}

export interface HeadersOptions {
  [key: string]: any;
}

export interface DataOptions {
  [key: string]: any;
}

export interface RequestOptions {
    endpoint: string;
    method?: string;
    params?: PamaterOptions;
    headers?: HeadersOptions;
    data?: DataOptions;
}

