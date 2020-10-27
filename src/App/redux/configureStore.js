import { createStore, combineReducers, applyMiddleware } from 'redux';
import { games } from './games'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            games: games
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};