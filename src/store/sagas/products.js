import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators as ProductsActions, Types as ProductsTypes } from 'store/ducks/products';
import api from 'services/api';

function* getProductListRequest() {
  try {
    const url = '';
    const response = yield call(api.get, url);
    yield put(ProductsActions.getProductListSuccess(response.data));
  } catch (error) {
    yield put(ProductsActions.getProductListFailure('Não foi possível listar os produtos.'));
  }
}

export default function* productsSaga() {
  yield takeLatest(ProductsTypes.GET_LIST_REQUEST, getProductListRequest);
}
