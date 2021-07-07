import { all } from "redux-saga/effects";
import { NextCtx } from "@globalTypes";
import apiRequestSagas from "@redux/components/Api/saga";

/* you can pass nextCtx to the sagas */
export default function* rootSaga(nextCtx: NextCtx): Generator {
  yield all([apiRequestSagas(nextCtx)]);
}
