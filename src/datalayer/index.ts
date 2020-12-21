import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { logger } from "redux-logger"

import auth from './session/sessionDuck';
import member from './member/reducers';

const rootReducer = combineReducers({
    auth, member
});

const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
    sagaMiddleware.run(function* rootSaga() {
        yield all([]);
    });
    return store;
}

const store = getStore();

export default store;
export type RootState = ReturnType<typeof rootReducer>;