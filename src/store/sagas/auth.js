import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import api from '../../services/api'

import AuthActions from '../ducks/auth'
import { actions as toastrActions } from 'react-redux-toastr'

export function* signIn({ email, password }) {
    try {
        const response = yield call(api.post, '/token', { email, password })
        
        localStorage.setItem('@Omni:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))
        yield put(push('/'))
    } catch (err) {
      yield put(toastrActions.add({
            type: 'error',
            title: 'Falha no login',
            message: 'Verifique seu e-mail/senha'
        }))
    }
}