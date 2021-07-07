export type children = any;

export interface Response {
  writeHead: (
    statusCode: number,
    options: {
      [key: string]: any;
    }
  ) => void;
  end: () => void;
  setHeader: (headerName: string, headerValue: string) => void;
  redirect: (arg0: number, arg1: string) => void;
  set: (arg0: any, arg1: any) => void;
  header: (...args: Array<string>) => void;
  send: (text: string) => void;
  statusCode: number;
}

export interface Request {
  headers: {
    cookie?: string;
    "user-agent": string;
  };
  ip: string;
  path: string;
  hostname: string;
  search: string;
  method: string;
  query?: any;
  url: string;
}

export interface NextCtx {
  isServer: boolean;
  req?: Request;
}

export interface Enum {
  label: string;
  value: string;
}

export interface HttpHeaders {
  "Accept-Language": string;
  Authorization?: string;
}

export interface Event {
  target: {
    value: string;
  };
  stopPropagation: () => void;
  preventDefault: () => void;
}
