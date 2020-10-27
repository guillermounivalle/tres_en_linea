import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Games } from './games';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            games: Games
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};