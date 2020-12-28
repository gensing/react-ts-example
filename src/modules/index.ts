import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { logger } from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
import session from './session/duck';
import member from './member/duck';
import { watcher as sessionSaga } from './session/saga';
import { watcher as memberSaga } from './member/saga';

const rootReducer = combineReducers({
    session, member
});

// saga: 사이드 이펙트(비동기 작업), 테스트, 에러 처리를 용이하게 
const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = applyMiddleware(...[sagaMiddleware, logger]);
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