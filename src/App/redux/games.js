import * as ActionTypes from './ActionsTypes';


export const Games = (state = {
		isLoading: true,
		errMess: null,
		dishes:[]
	}, action) => {
	switch(action.type){
		case ActionTypes.ADD_GAMES:
			return{
				...state, 
				isLoading: false, 
				errMess:null, 
				dishes:action.payload
			}

		case ActionTypes.GAMES_LOADING:
			return{
				...state, 
				isLoading: true, 
				errMess:null, 
				dishes:[]
			}

		case ActionTypes.GAMES_FAILED:
			return{
				...state, 
				isLoading: false, 
				errMess:action.payload, 
			}
		default:
			return state;
	}
}