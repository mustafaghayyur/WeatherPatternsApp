import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:

			// NOTE: never modify state directly (just like in the components). 
			// This below operation returns a NEW array with the payload.data
			// being pushed into the top of the array of items (which are represented 
			// by state). 
			// return [ action.payload.data, ...state ]; - does the same thing
			// 
			// return state.push([action.payload.data]); 
			// would MODIFY state, which is a NO NO!
			return state.concat([action.payload.data]);

	}
	return state;
}