import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { NextCtx } from "@globalTypes";
import {
  Action,
  GetAction,
  PostAction,
  PutAction,
  PatchAction,
  DeleteAction,
} from "./types";
import { API_GET, API_DELETE, API_PATCH, API_POST, API_PUT } from "./constants";

export function* apiGetFlow(nextCtx: NextCtx, action: GetAction): Generator {
  const { url, successAction, errorAction, options }: GetAction = action;

  try {
    const response = yield call(axios.get, `${url}/`, {
      ...(options || {}),
    });

    if (!response) throw new Error();

    // @ts-ignore
    const { data } = response;

    yield put(successAction({ data }));
  } catch (error) {
    yield put(errorAction({ error }));
  }
}

export function* apiPostFlow(nextCtx: NextCtx, action: PostAction): Generator {}

export function* apiPutFlow(nextCtx: NextCtx, action: PutAction): Generator {}

export function* apiPatchFlow(
  nextCtx: NextCtx,
  action: PatchAction
): Generator {}

export function* apiDeleteFlow(
  nextCtx: NextCtx,
  action: DeleteAction
): Generator {}

export function* apiRequestFlow(nextCtx: NextCtx, action: Action): Generator {
  switch (action.type) {
    case API_GET:
      yield call(apiGetFlow, nextCtx, action);
      break;
    case API_POST:
      yield call(apiPostFlow, nextCtx, action);
      break;
    case API_PUT:
      yield call(apiPutFlow, nextCtx, action);
      break;
    case API_PATCH:
      yield call(apiPatchFlow, nextCtx, action);
      break;
    case API_DELETE:
      yield call(apiDeleteFlow, nextCtx, action);
      break;
    default:
      break;
  }
}

function* apiRequestWatcher(nextCtx: NextCtx): Generator {
  yield takeEvery(
    [API_GET, API_POST, API_PUT, API_PATCH, API_DELETE],
    apiRequestFlow,
    nextCtx
  );
}

export default apiRequestWatcher;
