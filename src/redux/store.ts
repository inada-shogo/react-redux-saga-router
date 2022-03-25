import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { RootReducer, State } from './root.reducer';
import { RootSaga } from './root.saga';
import history from "../routes/history";
import {routerMiddleware} from "connected-react-router";

// 画面遷移を行う為のミドルウェア
const connectedReactRouterMiddleWare = routerMiddleware(history);

// redux-saga
const sagaMiddleWare = createSagaMiddleware();

// redux-logger
const reduxLogger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
});

// reduxのミドルウェアを設定
const middleware = [
  reduxLogger,
  sagaMiddleWare,
  connectedReactRouterMiddleWare,
];

// ストア生成
const ConfigureStore = (preloadState?: State) => {
  const middlewareEnhancer = applyMiddleware(...middleware);
  const store = createStore(
    RootReducer(history),
    preloadState,
    middlewareEnhancer
  );
  sagaMiddleWare.run(RootSaga);
  return store ;
};

// Store取り出し
export const Store = ConfigureStore();
