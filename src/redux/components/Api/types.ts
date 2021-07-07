export interface Action {
  type: string;
}

export interface ApiRequestOptions {
  params?: any;
  headers?: any;
}

export interface GetAction {
  type: string;
  url: string;
  successAction: (data: any, headers?: any) => Action;
  errorAction: (error: any) => Action;
  options?: ApiRequestOptions;
}

export interface PostAction {
  type: string;
  url: string;
  body: {};
  successAction: () => Action;
  errorAction: (error: any) => Action;
}

export interface PutAction {
  type: string;
  url: string;
  id: string;
  body: {};
  successAction: (id: string) => Action;
  errorAction: (id: string, error: any) => Action;
}

export interface PatchAction {
  type: string;
  url: string;
  id: string;
  body: {};
  successAction: (id: string) => Action;
  errorAction: (id: string, error: any) => Action;
}

export interface DeleteAction {
  type: string;
  id: string;
  url: string;
  successAction: (id: string) => Action;
  errorAction?: (id: string, error: any) => Action;
}
