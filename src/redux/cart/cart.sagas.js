import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearOutCart } from './cart.actions';

export function* clearCart() {
    yield put(clearOutCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}