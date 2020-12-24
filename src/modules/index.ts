import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { logger } from "redux-logger"

import session from './session/reducer';
import member from './member/reducer';
import { watcher as sessionSaga } from './session/saga';
import { watcher as memberSaga } from './member/saga';

const rootReducer = combineReducers({
    session, member
});

const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = applyMiddleware(...[sagaMiddleware, logger]);
// saga: 사이드 이펙트(비동기 작업), 테스트, 에러 처리를 용이하게 
function* rootSaga() { yield all([sessionSaga(), memberSaga()]); }

const configureStore = () => {
    const store = createStore(rootReducer, process.env.NODE_ENV === 'production'
        ? compose(rootMiddleware)
        : composeWithDevTools(rootMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore();
export type IRootState = ReturnType<typeof rootReducer>;

