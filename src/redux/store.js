import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // middleware
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.sagas';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export default { store, persistor }; 