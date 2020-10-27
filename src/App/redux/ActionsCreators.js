import * as ActionTypes from './ActionsTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchGames= () => (dispatch) => {
	dispatch(gamesLoading(true));
	
	return fetch(baseUrl+'games')
		.then(response => {
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(dishes => dispatch(addGames(dishes)))
		.catch(error => dispatch(gamesFailed(error.message)));
};

export const gamesLoading = () => ({
	type: ActionTypes.GAMES_LOADING
});

export const gamesFailed = (errmess) => ({
	type: ActionTypes.GAMES_FAILED,
	payload: errmess
});

export const addGames = (dishes) => ({
	type: ActionTypes.ADD_GAMES,
	payload: games
});