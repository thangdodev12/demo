import { API_GET, API_POST, API_PUT, API_PATCH, API_DELETE } from "./constants";

import type {
  GetAction,
  PostAction,
  PutAction,
  PatchAction,
  DeleteAction,
  ApiRequestOptions,
  Action,
} from "./types";

export const getRequest = (
  url: string,
  successAction: (data: any, included: any) => Action,
  errorAction: (error: any) => Action,
  options?: ApiRequestOptions
): GetAction => ({
  type: API_GET,
  url,
  successAction,
  errorAction,
  options,
});

export const postRequest = (
  url: string,
  body: {},
  successAction: () => Action,
  errorAction: (error: any) => Action
): PostAction => ({
  type: API_POST,
  url,
  body,
  successAction,
  errorAction,
});

export const putRequest = (
  id: string,
  url: string,
  body: {},
  successAction: (id: string) => Action,
  errorAction: (id: string, error: any) => Action
): PutAction => ({
  type: API_PUT,
  id,
  url,
  body,
  successAction,
  errorAction,
});

export const patchRequest = (
  id: string,
  url: string,
  body: {},
  successAction: (id: string) => Action,
  errorAction: (id: string, error: any) => Action
): PatchAction => ({
  type: API_PATCH,
  id,
  url,
  body,
  successAction,
  errorAction,
});

export const deleteRequest = (
  id: string,
  url: string,
  successAction: (id: string) => Action,
  errorAction?: (id: string, error: any) => Action
): DeleteAction => ({
  type: API_DELETE,
  id,
  url,
  successAction,
  errorAction,
});
